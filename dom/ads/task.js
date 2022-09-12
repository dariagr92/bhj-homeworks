const rotator = Array.from(document.querySelectorAll('.rotator__case'));

let index = rotator.findIndex((item) => item.classList.contains('rotator__case_active'));

function changeRotator() {
    rotator[index].classList.remove('rotator__case_active');
    if (index >= rotator.length - 1){
        index = 0;
    } else {
        index++;
    }
    rotator[index].classList.add('rotator__case_active');
}

setInterval(changeRotator, 1000);