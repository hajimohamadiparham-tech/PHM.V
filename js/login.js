
function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    // یوزر و پسوردی که می‌خوای
    if (user === "admin" && pass === "1234") {
        window.location.href = "pages/panel.html";
    } else {
        alert("نام کاربری یا رمز اشتباه است");
    }
}
