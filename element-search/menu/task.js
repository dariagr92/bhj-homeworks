let menu = Array.from(document.querySelectorAll(".menu__link"));
let subMenu = Array.from(document.querySelectorAll("ul.menu.menu_sub"))

for (let i = 0; i < menu.length; i++){
    menu[i].onclick = function() {
        const choosen = menu[i].closest(".menu__item").querySelector(".menu_sub");
        const show = subMenu.find((item) => item.classList.contains("menu_active"));

        if (choosen) {
            if (show === undefined){
                choosen.classList.add('menu_active');
            } else {
                if (show !== choosen){
                    choosen.classList.add('menu_active'); 
                }
                show.classList.remove('menu_active');
            }
           return false; 
        }
    };
}



