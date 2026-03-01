let isSignup = false;

function showSignup() {
  document.getElementById("formTitle").innerText = "Sign Up";
  document.querySelector("button").innerText = "Sign Up";
  document.getElementById("toggleText").innerHTML =
    'Already have an account? <span onclick="showLogin()">Login</span>';
  isSignup = true;
}

function showLogin() {
  document.getElementById("formTitle").innerText = "Login";
  document.querySelector("button").innerText = "Login";
  document.getElementById("toggleText").innerHTML =
    'Don\'t have an account? <span onclick="showSignup()">Sign up</span>';
  isSignup = false;
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  if (isSignup) {
    localStorage.setItem("hersafeUser", JSON.stringify({ email, password }));
    alert("Signup successful! Please login.");
    showLogin();
  } else {
    const storedUser = JSON.parse(localStorage.getItem("hersafeUser"));

    if (!storedUser) {
      alert("No account found. Please sign up.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password");
    }
  }
}

function openMoodTracker() {
  window.location.href="mood.html";
}
