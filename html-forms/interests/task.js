const intrestMenu = document.querySelectorAll('.interest__check');

for (let menuItem of intrestMenu){
    menuItem.addEventListener('change', () => {
        const subMenuItem = menuItem.closest('.interest').querySelectorAll('.interest__check');
        if (menuItem.checked){
            for (let subItem of subMenuItem) {
                subItem.checked = true;
            }
        } else if (!menuItem.checked){
            for (let subItem of subMenuItem) {
                subItem.checked = false;
            }
        }
    }
    );
}