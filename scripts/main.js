// Cookies because of using font awesome icons we need to let the browser to get more of the icons from one site.
document.cookie = "promo_shown=1; Max-Age=2600000; Secure promo_shown=1; Max-Age=2600000; Secure";

//I. Variables
// A.Buttons
// 1. Start Button
const startBtn = document.querySelector('.play');
// 2. Pause Button
const pauseBtn = document.querySelector('.pause');
// 3. Stop Button
const stopBtn = document.querySelector('.stop');
// 4. Reset Button
const resetBtn = document.querySelector('.reset');
// 5. History Button
const historyBtn = document.querySelector('.history');
// 6. Question mark Button
const qMarkBtn = document.querySelector('.q-mark');
// 7. Close modal Button
const closeBtn = document.querySelector('.close');
// 7. Brush button Button
const brushBtn = document.querySelector('.brush');

// B. Displays
// 1. Stopwatch
const stopWatch = document.querySelector('.stopwatch');
// 2. Time display after stop
const time = document.querySelector('.time');
// 3. History - list of records
const timesList = document.querySelector('.times-list');

// C. Others
// 1. Modal Shadow
const modalShadow = document.querySelector('.modal-shadow');
// 2. Count time Variable
let countTime = 0;
// 3. Minutes counter
let minutes = 0;
// 4. Seconds counter
let seconds = 0;
// 5. Miliseconds counter
let miliSeconds = 0;
// 6. The array for our results
const resultArray = [];

// D. Colort technique
// 5, Colors box
const colorsBox = document.querySelector('.colors');
// 6, Colors separately --> first
const colorFirst = document.querySelector('.first');
// 7, Color second
const colorSecond = document.querySelector('.second');
// 8, Color third
const colorThird = document.querySelector('.third');
// 9, Color fourth
const colorFourth = document.querySelector('.fourth');
// 10, Color fifth
const colorFifth = document.querySelector('.fifth');

// 11. The root Element declaration
let root = document.documentElement;
//II. Functions
// 1. Start time function
const startTime = () => {
    // On the beginning we need to clear interval because if couple times someone will click the play button/start button than the counter will get confused
    clearInterval(countTime);
    // Check if works
    // console.log('Start: Clicked');
    // Set timer which will update our timer every milisecond
    countTime = setInterval(() => {
        // Conditions to add the values
        if (seconds < 9) {
            seconds++;
            stopWatch.innerText = `${minutes}:0${seconds}`;
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            stopWatch.innerText = `${minutes}:${seconds}`;
        } else if (seconds >= 59) {
            seconds = 0;
            seconds++;
            minutes++;
            stopWatch.innerText = `${minutes}:${seconds}:`;
        }
        // if (miliSeconds < 9) {
        //     miliSeconds++;
        //     stopWatch.innerText = `${minutes}:0${seconds}:00${miliSeconds}`;
        // } else if (miliSeconds >= 9 && miliSeconds < 99) {
        //     miliSeconds++;
        //     stopWatch.innerText = `${minutes}:0${seconds}:0${miliSeconds}`;
        // } else if (miliSeconds >= 99 && miliSeconds < 999) {
        //     miliSeconds++;
        //     stopWatch.innerText = `${minutes}:0${seconds}:${miliSeconds}`;
        // } else if (miliSeconds >= 999 && seconds < 9) {
        //     miliSeconds = 0;
        //     seconds++;
        //     miliSeconds++;
        //     stopWatch.innerText = `${minutes}:${seconds}:${miliSeconds}`;
        // } else if (miliSeconds >= 999 && seconds >= 9 && seconds < 59) {
        //     seconds++;
        //     miliSeconds = 0
        //     miliSeconds++;
        //     stopWatch.innerText = `${minutes}:${seconds}:${miliSeconds}`;
        // } else if (miliSeconds >= 999 && seconds >= 59) {
        //     miliSeconds = 0;
        //     seconds = 0;
        //     miliSeconds++
        //     seconds++;
        //     minutes++;
        //     stopWatch.innerText = `${minutes}:${seconds}:${miliSeconds}`;
        // }
    }, 1000);
};

// 2.Pause function
const pauseTheTime = () => {
    // It is enough to reset interval in here
    clearInterval(countTime);
};

// 3.Stop and add to the history --> stop button
const stopAddClearDisplayResults = () => {
    // Display results in our time paragraph
    // Add the text to our display
    time.textContent = `The last Time: ${stopWatch.textContent}`;
    if (stopWatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        // Add the result to our result array
        resultArray.push(stopWatch.textContent);
        // console.log(resultArray);
    };

    clearAllResults();
};

// 4. Reset  button
const resetHistory = () => {
    // Clear all the results
    clearAllResults();
    // Hide the time paragraph again
    time.style.visibility = 'hidden';
    // Clear all History --> it is enough to clear our array in here
    resultArray = [];
};

// 5.Help method - clearAllResults
const clearAllResults = () => {
    // Set the previous value of stopper
    stopWatch.textContent = '0:00';
    // Stop the interval
    clearInterval(countTime);
    // Reset the History
    timesList.textContent = '';
    // Reset the variables
    miliSeconds = 0;
    seconds = 0;
    minutes = 0;
};

// 6. History Display method
const historyDisplay = () => {
    // We should clear our array in here as well
    timesList.textContent = '';
    // Loop through the array of times to display it
    resultArray.forEach((time, index) => {
        console.log(time);
        const newTime = document.createElement('li');
        newTime.innerHTML = `The result no ${index + 1}: <span>${time}</span>`;
        timesList.appendChild(newTime);
    });
    // Toggle class of history display
    timesList.classList.toggle('hide-history');
};

// 7. Display modal
const displayModal = () => {
    modalShadow.style.display = 'block';
    // Add the animation for modal
    modalShadow.classList.toggle('modal-animation');
};

// 8. Close modal
const closeModal = () => {
    modalShadow.style.display = 'none';
};

// 9 Show colors palette
const showColorsPalette = () => {
    // Add the animation class of our colors box
    colorsBox.classList.toggle('colors-show');
};



//III. Event listener
// 1. Start time
startBtn.addEventListener('click', startTime);
// 2. Pause time
pauseBtn.addEventListener('click', pauseTheTime);
// 3. Stop button - responsible for stop the time and create the result to our log history
stopBtn.addEventListener('click', stopAddClearDisplayResults);
// 4.Reset button
resetBtn.addEventListener('click', resetHistory);
// 5. History button --> display history
historyBtn.addEventListener('click', historyDisplay);
// 6. QuestionMark Button Logic 
qMarkBtn.addEventListener('click', displayModal);
// 7. Close modal button logic
closeBtn.addEventListener('click', closeModal);
// 8. Brush button color menu show
brushBtn.addEventListener('click', showColorsPalette);

// 9. Modal on window click --> close
window.addEventListener('click', e => e.target === modalShadow ? closeModal() : false);

// 10. The colors on click color change 
colorFirst.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#fa1406');
});
// 11. The colors on click color change 
colorSecond.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#e2bb0e');
});
// 12. The colors on click color change 
colorThird.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#3bcc0f');
});
// 13. The colors on click color change 
colorFourth.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#0a35c4');
});
// 14. The colors on click color change 
colorFifth.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#e712e7');
});