const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', function (event){
        tabs.forEach(item => item.className = "tab");
        tabContent.forEach(item => item.className = "tab__content");
        tabs[i].className = "tab tab_active";
        tabContent[i].className = "tab__content tab__content_active"
    })
}
 