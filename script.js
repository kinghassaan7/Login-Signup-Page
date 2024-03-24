        let form = document.getElementById("form");
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let cfnpassword = document.getElementById("password1");

        let login = document.getElementById("btn-login");
        let btn = document.getElementById("signup");
        let signup = document.getElementById("btn-signup");
        let already = document.getElementById("already");
        let header = document.getElementById("header");
        function loginForm() {
  login.className = "active-btn";
  signup.className = "";
  name.placeholder = "Name / Email Address";
  email.style.display = "none";
  cfnpassword.style.display = "none";
  btn.innerHTML = "Login";
  already.innerHTML = "&nbsp;Signup";
  already.setAttribute('onclick', 'signupForm()'); // Change to signupForm()
  header.innerHTML = "Login Form";
}

function signupForm() {
  login.className = "";
  signup.className = "active-btn";
  name.placeholder = "Name";
  email.style.display = "flex";
  cfnpassword.style.display = "flex";
  btn.innerHTML = "Signup";
  already.innerHTML = "&nbsp;Login";
  already.setAttribute('onclick', 'loginForm();'); 
  header.innerHTML = "Signup Form";
}
