const item__content__1 = document.querySelector('.item__content__1');
const item__title__1 = document.querySelector('.item__title__1');

const item__content__2 = document.querySelector('.item__content__2');
const item__title__2 = document.querySelector('.item__title__2');

const item__content__3 = document.querySelector('.item__content__3');
const item__title__3 = document.querySelector('.item__title__3');

const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
const croix1 = document.querySelector('.croix__1');
const croix2 = document.querySelector('.croix__2');
const croix3 = document.querySelector('.croix__3');

const btnMore1 = document.querySelector('.more__1');
const btnMore2 = document.querySelector('.more__2');
const btnMore3 = document.querySelector('.more__3');

const allContainer = document.querySelectorAll('.item');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let isOpen1 = false;
let isOpen2 = false;
let isOpen3 = false;

btnMore1.addEventListener("click", function () {
    section2.classList.remove('sectionClose');
    section2.classList.add('sectionOpen');
});
croix1.addEventListener("click", function () {
    section2.classList.add('sectionClose');
    section2.classList.remove('sectionOpen');
});

btnMore2.addEventListener("click", function () {
    section3.classList.remove('sectionClose');
    section3.classList.add('sectionOpen');
});
croix2.addEventListener("click", function () {
    section3.classList.add('sectionClose');
    section3.classList.remove('sectionOpen');
});

btnMore3.addEventListener("click", function () {
    section4.classList.remove('sectionClose');
    section4.classList.add('sectionOpen');
});
croix3.addEventListener("click", function () {
    section4.classList.add('sectionClose');
    section4.classList.remove('sectionOpen');
});


btn1.addEventListener("click", function () {
    if (isOpen1) {
        close(1, 0, 0);
        setTimeout(resetAll, 500);
        isOpen1 = false;
    } else {
        if (isOpen2 || isOpen3) {
            close2();
            close3();
            setTimeout(reset1, 500);
            setTimeout(open1, 500);
        } else {
            open1();
        }
        isOpen1 = true;
    }
})

btn2.addEventListener("click", function () {
    if (isOpen2) {
        close(0, 1, 0);
        setTimeout(resetAll, 500);
        isOpen2 = false;
    } else {
        if (isOpen1 || isOpen3) {
            close1();
            close3();
            setTimeout(reset2, 500);
            setTimeout(open2, 500);
        } else {
            open2();
        }
        isOpen2 = true;
    }
})

btn3.addEventListener("click", function () {
    if (isOpen3) {
        close(0, 0, 1);
        setTimeout(resetAll, 500);
        isOpen3 = false;
    } else {
        if (isOpen1 || isOpen2) {
            close1();
            close2();
            setTimeout(reset3, 500);
            setTimeout(open3, 500);
        } else {
            open3();
        }

        isOpen3 = true;
    }
})

/*--- Functions ---*/
function removeTransition() {
    let i = allContainer.length;
    while (i--) {
        allContainer[i].style.transition = "none";
    }
}

function addTransition() {
    let i = allContainer.length;
    while (i--) {
        allContainer[i].style.transition = "all 0.5s ease-in-out";
    }
}

function resetAll() {
    removeTransition();
    item__content__1.style.clipPath = "inset(0 0 0 100%)";
    item__title__1.style.clipPath = "inset(100% 0 0 0)";
    item__content__2.style.clipPath = "inset(0 0 0 100%)";
    item__title__2.style.clipPath = "inset(100% 0 0 0)";
    item__content__3.style.clipPath = "inset(0 0 0 100%)";
    item__title__3.style.clipPath = "inset(100% 0 0 0)";
    setTimeout(addTransition, 100);
}

function reset1() {
    item__content__2.style.clipPath = "inset(0 0 0 100%)";
    item__title__2.style.clipPath = "inset(100% 0 0 0)";
    item__content__3.style.clipPath = "inset(0 0 0 100%)";
    item__title__3.style.clipPath = "inset(100% 0 0 0)";
    isOpen2 = false;
    isOpen3 = false;
}

function reset2() {
    item__content__1.style.clipPath = "inset(0 0 0 100%)";
    item__title__1.style.clipPath = "inset(100% 0 0 0)";
    item__content__3.style.clipPath = "inset(0 0 0 100%)";
    item__title__3.style.clipPath = "inset(100% 0 0 0)";
    isOpen1 = false;
    isOpen3 = false;
}

function reset3() {
    item__content__1.style.clipPath = "inset(0 0 0 100%)";
    item__title__1.style.clipPath = "inset(100% 0 0 0)";
    item__content__2.style.clipPath = "inset(0 0 0 100%)";
    item__title__2.style.clipPath = "inset(100% 0 0 0)";
    isOpen1 = false;
    isOpen2 = false;
}

function close(a, b, c) {
    if (a === 1) {
        close1();
    }
    if (b === 1) {
        close2();
    }
    if (c === 1) {
        close3();
    }
}

function open1() {
    item__content__1.style.clipPath = "inset(0 0 0 0)";
    item__title__1.style.clipPath = "inset(0 0 0 0)";
}

function open2() {
    item__content__2.style.clipPath = "inset(0 0 0 0)";
    item__title__2.style.clipPath = "inset(0 0 0 0)";
}

function open3() {
    item__content__3.style.clipPath = "inset(0 0 0 0)";
    item__title__3.style.clipPath = "inset(0 0 0 0)";
}

function close1() {
    item__content__1.style.clipPath = "inset(0 100% 0 0)";
    item__title__1.style.clipPath = "inset(0 0 100% 0)";
}

function close2() {
    item__content__2.style.clipPath = "inset(0 100% 0 0)";
    item__title__2.style.clipPath = "inset(0 0 100% 0)";
}

function close3() {
    item__content__3.style.clipPath = "inset(0 100% 0 0)";
    item__title__3.style.clipPath = "inset(0 0 100% 0)";
}