// Browser → Request → Server
// Server → Processing → Response
// Browser → Render

=====================================================================

🔍 السطر ده بيعمل إيه؟

URLSearchParams بيحوّل الـ string ده إلى object تقدر تتعامل معاه بسهولة

يعني بدل ما تعمل parsing بإيدك ❌
هو بيعملها لك جاهزة ✔️

📦 قبل وبعد
❌ قبل (string)
dataParsed = "message_data=hello&name=magdi&skills=code"
✅ بعد (object)
const params = new URLSearchParams(dataParsed);

بقى عندك object شبه كده:

{
message_data: "hello",
name: "magdi",
skills: "code"
}

==========================================================================

# 🧠 JavaScript Async vs Sync - Notes

## 🔹 Synchronous (Sync)

- التنفيذ بيكون **سطر ورا سطر**
- كل عملية لازم تخلص قبل اللي بعدها تبدأ

### ✔ مميزاته:

- سهل وبسيط
- مناسب للعمليات الصغيرة

### ❌ عيوبه:

- بيوقف البرنامج لو في عملية بطيئة (Blocking)

### مثال:

```js
console.log("1");
console.log("2");
console.log("3");
```

---

## 🔹 Asynchronous (Async)

- التنفيذ **مش بيستنى** المهمة تخلص
- العمليات بتشتغل في الخلفية

### ✔ مميزاته:

- أسرع في الأداء
- مناسب للسيرفرات والتعامل مع I/O

### ❌ عيوبه:

- أصعب شوية في الفهم (لو مش منظم)

### مثال:

```js
setTimeout(() => {
  console.log("2");
}, 1000);

console.log("1");
```

---

# 🔥 أنواع Async في JavaScript

## 1️⃣ Callback

- function بتتبعث كـ argument
- بتتنفذ لما العملية تخلص

### مثال:

```js
function getData(cb) {
  setTimeout(() => {
    cb("done");
  }, 1000);
}
```

### ❌ المشكلة:

- Callback Hell (تداخل كتير وصعب القراءة)

---

## 2️⃣ Promise

- كائن بيمثل نتيجة مستقبلية

### الحالات:

- pending
- fulfilled (resolve)
- rejected

### مثال:

```js
const promise = new Promise((resolve, reject) => {
  resolve("done");
});
```

### الاستخدام:

```js
promise.then((res) => console.log(res)).catch((err) => console.log(err));
```

### ✔ مميزاته:

- أنضف من callbacks
- يدعم chaining

---

## 3️⃣ Async / Await

- شكل أبسط وأوضح للـ Promise

### مثال:

```js
async function run() {
  const data = await promise;
  console.log(data);
}
```

### ✔ مميزاته:

- كود نظيف وسهل القراءة
- شبه synchronous

---

# ⚖️ مقارنة سريعة

| النوع       | الشكل      | السهولة  |
| ----------- | ---------- | -------- |
| Sync        | مباشر      | سهل      |
| Callback    | nested     | صعب      |
| Promise     | then/catch | متوسط    |
| Async/Await | شبه sync   | سهل جدًا |

---

# 🔑 الخلاصة

- Sync = تنفيذ بالترتيب (Blocking)
- Async = تنفيذ بدون انتظار (Non-blocking)
- أفضل طريقة حديثة = **Async / Await** 🚀

======================================================================================

# 🚀 Content-Type في Node.js (الأهم + أمثلة)

## 1️⃣ application/json

👉 الأكثر استخدامًا في APIs

### مثال:

```js
res.setHeader("Content-Type", "application/json");
res.end(JSON.stringify({ name: "Magdi" }));
```

📌 الاستخدام:

- إرسال واستقبال بيانات من frontend (React / Next.js)

---

## 2️⃣ text/html

👉 لعرض صفحات HTML

### مثال:

```js
res.setHeader("Content-Type", "text/html");
res.end("<h1>Hello World</h1>");
```

📌 الاستخدام:

- عرض صفحات من السيرفر

---

## 3️⃣ application/x-www-form-urlencoded

👉 بيانات الفورم العادية

### مثال (request):

```txt
name=magdi&age=25
```

### في Node.js:

```js
const params = new URLSearchParams(data);
console.log(params.get("name"));
```

📌 الاستخدام:

- Forms بدون ملفات

---

## 4️⃣ multipart/form-data

👉 رفع الملفات

### مثال:

```html
<form method="POST" enctype="multipart/form-data">
  <input type="file" name="file" />
</form>
```

📌 الاستخدام:

- Upload images / videos
- غالبًا مع libraries زي multer

---

## 5️⃣ text/plain

👉 نص عادي

### مثال:

```js
res.setHeader("Content-Type", "text/plain");
res.end("Hello bro");
```

📌 الاستخدام:

- testing أو رد بسيط

---

# 🔥 الخلاصة السريعة

- JSON → APIs 🔥
- HTML → صفحات
- urlencoded → فورم عادي
- form-data → رفع ملفات
- plain → نص بسيط

---

# 💡 أهم 3 في شغلك:

✔ application/json
✔ text/html
✔ application/x-www-form-urlencoded
