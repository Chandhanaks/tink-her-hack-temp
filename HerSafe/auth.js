let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;

  document.getElementById("formTitle").innerText = isLogin
    ? "Login"
    : "Sign Up";

  document.getElementById("authBtn").innerText = isLogin
    ? "Login"
    : "Sign Up";

  document.getElementById("toggleText").innerHTML = isLogin
    ? `Don’t have an account?
       <span onclick="toggleForm()" style="color:#e91e63; cursor:pointer;">Sign Up</span>`
    : `Already have an account?
       <span onclick="toggleForm()" style="color:#e91e63; cursor:pointer;">Login</span>`;
}

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "" || pass === "") {
    alert("Please fill all fields");
    return;
  }

  if (isLogin) { 
    const storedUser = localStorage.getItem("hersafeUser");
    const storedPass = localStorage.getItem("hersafePass");

    if (user === storedUser && pass === storedPass) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials");
    }
  } else {
    localStorage.setItem("hersafeUser", user);
    localStorage.setItem("hersafePass", pass);

    alert("Signup successful! Now login.");
    toggleForm();
  }
}