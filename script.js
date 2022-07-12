const byes1 = document.querySelector('.byes1');
const bno1 = document.querySelector('.bno1');
const byes2 = document.querySelector('.byes2');
const bno2 = document.querySelector('.bno2');

let byes_1 = false;

byes1.addEventListener('click', () => {
    byes_1 = true;
    toggleColour();
});

bno1.addEventListener('click', () => {
    byes_1 = false;
    toggleColour();
});

function toggleColour() {
    if (byes_1) {
        byes1.style.backgroundColor = "tomato";
        bno1.style.backgroundColor = "#d3efd3";
    } else {
        byes1.style.backgroundColor = "#d3efd3";
        bno1.style.backgroundColor = "tomato";
    }
}

let byes_2 = false;
byes2.addEventListener('click', () => {
    byes_2 = true;
    toggleColour2();
});

bno2.addEventListener('click', () => {
    byes_2 = false;
    toggleColour2();
});

function toggleColour2() {
    if (byes_2) {
        byes2.style.backgroundColor = "tomato";
        bno2.style.backgroundColor = "#d3efd3";
    } else {
        byes2.style.backgroundColor = "#d3efd3";
        bno2.style.backgroundColor = "tomato";
    }
}

document.querySelector('.compare').onclick = () => {
    location.href = "compare/index.html"
};
