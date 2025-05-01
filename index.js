document.addEventListener("DOMContentLoaded", function () {
  const adminBtn = document.getElementById("adminBtn");
  const adminModal = document.getElementById("adminModal");
  const closeBtn = document.getElementById("closeBtn");
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("error-message");

  const adminCredentials = {
      username: "johanna",
      password: "johanna123"
  };

  adminModal.style.display = "none";

  adminBtn.addEventListener("click", function () {
      adminModal.style.display = "flex";
      adminModal.style.opacity = "0";
      setTimeout(() => adminModal.style.opacity = "1", 10);
  });

  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", function (event) {
      if (event.target === adminModal) {
          closeModal();
      }
  });

  function closeModal() {
      adminModal.style.opacity = "0";
      setTimeout(() => adminModal.style.display = "none", 300);
  }

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === adminCredentials.username && password === adminCredentials.password) {
          localStorage.setItem("isAdmin", "true");
          closeModal();
          errorMessage.style.display = "none";
          window.location.href = "main.html"; 
      } else {
          errorMessage.style.display = "block";
      }
  });

  if (localStorage.getItem("isAdmin") === "true") {
      enableAdminFeatures();
  } else {
      disableAdminFeatures();
  }

  function enableAdminFeatures() {
      console.log("✅ Admin features enabled.");
  }

  function disableAdminFeatures() {
      console.log("❌ Admin features disabled.");
  }
});
