const btn = document.getElementById("helloBtn");
const message = document.getElementById("message");
const themeBtn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
  message.textContent = "أهلاً بك في بروفايلي الشخصي 👋";
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});
