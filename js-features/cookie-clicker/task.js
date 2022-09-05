const cookie = document.getElementById("cookie");

function cookieClicker() {
    const clicker__counter = document.getElementById("clicker__counter");
    ++clicker__counter.textContent;
    if (clicker__counter.textContent % 2 != 0){
        cookie.width = 300;
    } else{
        cookie.width = 200; 
    }
}

cookie.onclick = cookieClicker;