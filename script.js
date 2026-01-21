var toggle = document.querySelector('.theme-toggle i');
if(toggle){
    toggle.addEventListener('click', function(){
        document.body.classList.toggle('light');
    });
}

var loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        var email = document.getElementById("loginEmail").value;
        var pass = document.getElementById("loginPass").value;
        if(email && pass){
            alert("✅ Login Successfully!");
            window.location.href = "index.html";
        } else {
            alert("❌ Please fill correct email and password!");
        }
    });
}

var signupForm = document.getElementById("signupForm");
if(signupForm){
    signupForm.addEventListener("submit", function(e){
        e.preventDefault();
        var email = document.getElementById("signupEmail").value;
        var pass = document.getElementById("signupPass").value;
        if(email && pass){
            alert("🎉 Account Created Successfully!");
            window.location.href = "index.html";
        } else {
            alert("❌ Fill email and password!");
        }
    });
}

window.onload = function(){
    var logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn){
        logoutBtn.onclick = function(){
            alert("🔒 Logged Out Successfully!");
            window.location.href = "signIn.html"; 
        }
    }
}

