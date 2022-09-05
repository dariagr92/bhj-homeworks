function countdown() {
    const timer = document.getElementById("timer");
    --timer.textContent;
     if (timer.textContent <= 0){
        alert("Вы победили в конкурсе");
        clearInterval(interval);
    }
}

const interval = setInterval(countdown, 1000);
