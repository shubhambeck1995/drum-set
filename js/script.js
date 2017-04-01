function changer(e) {
    var key = e.keyCode;

    function remover() {
        document.getElementById("kk-" + key).classList.remove("playing");
    }


    console.log(key);
    var elem = document.getElementById("kk-" + key);
    elem.className += " playing";
    var player = document.getElementById("ss-" + key);
    player.currentTime=0;
    player.play();


    setTimeout(remover, 300);


}

window.addEventListener("keydown", changer);
window.onLoad = changer;
