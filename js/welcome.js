
function playVoice(){
    document.getElementById('v').play();
    document.getElementById('v').onended = ()=>{
        window.location='panel.html';
    };
}
