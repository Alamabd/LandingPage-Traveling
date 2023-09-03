const spinner = document.getElementsByClassName('spinner')[0];


function open() {
    spinner.classList.add('spinner-hide')
    setTimeout(() => {
        spinner.style.display = "none";
    }, 700);
}

