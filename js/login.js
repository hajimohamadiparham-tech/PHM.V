
function login() {
    let pass = document.getElementById("pass").value;

    const correctPass = "1234"; // اینجا رمز دلخواهت

    if (pass === correctPass) {
        window.location.href = "pages/panel.html";
    } else {
        alert("رمز اشتباه است!");
    }
}
