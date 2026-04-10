function togglePassword() {
    const passwordInput = document.getElementById("password");
    const button = event.target;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.innerText = "Hide Password";
    }
    else {
        passwordInput.type = "password";
        button.innerText = "Show Password";
    }
}







function toggle(btn) {
    const h1 = document.getElementById("heading");
    const container = document.getElementsByClassName("container")[0];// Assuming there's only one element /
    // /with class "container" ya fir you can use querySelector use kare 
    if (btn.textContent === "Show New") {
        h1.innerText = "Welcome Back 👋";
        btn.innerText = "Show Old";
    } else {
        h1.innerText = "Hello World";
        btn.innerText = "Show New";
    }


    console.log(container.textContent);
    console.log(container.innerText);
    console.log(container.innerHTML);
}



// document.getElementById("togglePasswordButton").addEventListener("click", togglePassword);