// Cookies because of using font awesome icons we need to let the browser to get more of the icons from one site.
document.cookie = "promo_shown=1; Max-Age=2600000; Secure promo_shown=1; Max-Age=2600000; Secure";

//I. Variables
const startBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const qMarkBtn = document.querySelector('.q-mark');
const closeBtn = document.querySelector('.close');
const brushBtn = document.querySelector('.brush');

const stopWatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timesList = document.querySelector('.times-list');

const modalShadow = document.querySelector('.modal-shadow');
let countTime = 0;
let minutes = 0;
let seconds = 0;
const resultArray = [];

const colorsBox = document.querySelector('.colors');
const colorFirst = document.querySelector('.first');
const colorSecond = document.querySelector('.second');
const colorThird = document.querySelector('.third');
const colorFourth = document.querySelector('.fourth');
const colorFifth = document.querySelector('.fifth');

let root = document.documentElement;

//II. Functions
const startTime = () => {
    clearInterval(countTime);
    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++;
            stopWatch.textContent = `${minutes}:0${seconds}`;
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            stopWatch.textContent = `${minutes}:${seconds}`;
        } else {
            seconds = 0;
            minutes++;
            stopWatch.textContent = `${minutes}:${seconds}`;
        }
    }, 1000);
};

const pauseTheTime = () => {
    clearInterval(countTime);
};

const stopAddClearDisplayResults = () => {
    time.textContent = `The last Time: ${stopWatch.textContent}`;
    if (stopWatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        resultArray.push(stopWatch.textContent);
    };
    clearAllResults();
};

const resetHistory = () => {
    clearAllResults();
    time.style.visibility = 'hidden';
    resultArray = [];
};

const clearAllResults = () => {
    stopWatch.textContent = '0:00';
    clearInterval(countTime);
    timesList.textContent = '';
    seconds = 0;
    minutes = 0;
};

const historyDisplay = () => {
    timesList.textContent = '';
    resultArray.forEach((time, index) => {
        console.log(time);
        const newTime = document.createElement('li');
        newTime.innerHTML = `The result no ${index + 1}: <span>${time}</span>`;
        timesList.appendChild(newTime);
    });
    timesList.classList.toggle('hide-history');
};

const displayModal = () => {
    modalShadow.style.display = 'block';
    modalShadow.classList.toggle('modal-animation');
};

const closeModal = () => {
    modalShadow.style.display = 'none';
};

const showColorsPalette = () => {
    colorsBox.classList.toggle('colors-show');
};



//III. Event listener
startBtn.addEventListener('click', startTime);
pauseBtn.addEventListener('click', pauseTheTime);
stopBtn.addEventListener('click', stopAddClearDisplayResults);
resetBtn.addEventListener('click', resetHistory);
historyBtn.addEventListener('click', historyDisplay);
qMarkBtn.addEventListener('click', displayModal);
closeBtn.addEventListener('click', closeModal);
brushBtn.addEventListener('click', showColorsPalette);

window.addEventListener('click', e => e.target === modalShadow ? closeModal() : false);

colorFirst.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#fa1406');
});
colorSecond.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#e2bb0e');
});
colorThird.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#3bcc0f');
});
colorFourth.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#0a35c4');
});
colorFifth.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#e712e7');
});