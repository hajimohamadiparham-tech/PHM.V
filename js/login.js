
async function login(){
    let u=document.getElementById('user').value.trim();
    let p=document.getElementById('pass').value.trim();
    let res=await fetch('data/users.json');
    let data=await res.json();
    if(data[u] && data[u].password===p){
        localStorage.setItem('phm_user',u);
        window.location='pages/welcome.html';
    } else {
        alert('نام کاربری یا رمز اشتباه است');
    }
}
