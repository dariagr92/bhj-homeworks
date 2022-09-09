const dropdownLink = Array.from(document.querySelectorAll("a.dropdown__link"));
const dropdown = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");

onClick = function () {
    dropdownList.className = "dropdown__list dropdown__list_active";
}

rename = function () {
    this.dropdown
}

dropdown.addEventListener('click', onClick);

for (let i = 0; i < dropdownLink.length; i++){
    dropdownList.addEventListener()
}