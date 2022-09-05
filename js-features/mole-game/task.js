const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function holeIndex(){
    for (let index = 1; index <= 9; index++){
    let hole = document.getElementById(`hole${index}`)
}
    return hole;
}

holeIndex(index);



hole.onclick = function(){

    if (hole.className == "hole_has-mole"){
        ++dead.textContent;
    } else{
        ++lost.textContent;
    }

    if (dead.textContent == 10){
        alert("Вы выиграли!");
        dead.textContent = 0;
        lost.textContent = 0;
    }

    if (lost.textContent == 5){
        alert("Вы проиграли!");
        dead.textContent = 0;
        lost.textContent = 0;
    }
}
