const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++){
    function getHole(index){
        let thisHole = document.getElementById(`hole${index}`);
        return thisHole;
    }

    let hole = getHole(index);

    hole.onclick = function(){

        if (hole.className.includes( 'hole_has-mole' )){
            dead.textContent++;
        } else{
            lost.textContent++;
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
}
