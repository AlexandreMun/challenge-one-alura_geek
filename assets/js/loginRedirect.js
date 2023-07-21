document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./pages/login.html";
  });
});
