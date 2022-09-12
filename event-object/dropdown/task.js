const dropdownLink = Array.from(document.getElementsByClassName("dropdown__link"));
const dropdown = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");


dropdown.addEventListener('click', function (event){
    dropdownList.classList.toggle("dropdown__list_active");
});

for (let i = 0; i < dropdownLink.length; i++){
    dropdownLink[i].addEventListener('click', function (e){
        e.preventDefault();
        dropdownList.className = "dropdown__list";
        dropdown.textContent = this.textContent;
    });
}