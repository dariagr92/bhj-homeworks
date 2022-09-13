const buttonSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

for (let i = 0; i < buttonSize.length; i++){
    buttonSize[i].addEventListener('click', (e) => {
        const activeSize = document.querySelector('.font-size_active');
        activeSize.classList.remove('font-size_active');
        buttonSize[i].classList.add('font-size_active');

        if (buttonSize[i].dataset.size === "small"){
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if (buttonSize[i].dataset.size === "big"){
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small', 'book_fs-big');
        }
        e.preventDefault();
        }
        )
}