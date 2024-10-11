// let workDuration = 30;  // default work duration in minutes
// let breakDuration = 5;  // default break duration in minutes
// let isWorking = true;
// let timerInterval;
// let timeRemaining;

// document.getElementById('startBtn').addEventListener('click', startTimer);
// document.getElementById('resetBtn').addEventListener('click', resetTimer);
// document.getElementById('workDuration').addEventListener('change', updateDurations);
// document.getElementById('breakDuration').addEventListener('change', updateDurations);

// function updateDurations() {
//     workDuration = parseInt(document.getElementById('workDuration').value) || 30;
//     breakDuration = parseInt(document.getElementById('breakDuration').value) || 5;
//     if (isWorking) {
//         timeRemaining = workDuration * 60;
//         updateTimerDisplay();
//     }
// }

// function startTimer() {
//     document.getElementById('startBtn').disabled = true;
//     document.getElementById('resetBtn').disabled = false;
//     timeRemaining = isWorking ? workDuration * 60 : breakDuration * 60;
//     timerInterval = setInterval(countdown, 1000);
// }

// function countdown() {
//     if (timeRemaining <= 0) {
//         document.getElementById('beep').play();
//         clearInterval(timerInterval);
//         switchSession();
//     } else {
//         timeRemaining--;
//         updateTimerDisplay();
//     }
// }

// function updateTimerDisplay() {
//     let minutes = Math.floor(timeRemaining / 60);
//     let seconds = timeRemaining % 60;
//     document.getElementById('timerDisplay').textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
// }

// function switchSession() {
//     isWorking = !isWorking;
//     document.getElementById('sessionStatus').textContent = isWorking ? "Work Session" : "Break Time";
//     timeRemaining = isWorking ? workDuration * 60 : breakDuration * 60;
//     updateTimerDisplay();
//     document.getElementById('startBtn').disabled = false;
// }

// function resetTimer() {
//     clearInterval(timerInterval);
//     document.getElementById('startBtn').disabled = false;
//     document.getElementById('resetBtn').disabled = true;
//     isWorking = true;
//     document.getElementById('sessionStatus').textContent = "Work Session";
//     timeRemaining = workDuration * 60;
//     updateTimerDisplay();
// }

// function playAlertSound() {
//     const alertSound = document.getElementById('beep');
//     alertSound.play();
// }

let workDuration = 30;  // default work duration in minutes
let breakDuration = 5;  // default break duration in minutes
let isWorking = true;   // flag to check if it's work or break session
let timerInterval;
let timeRemaining;

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('workDuration').addEventListener('change', updateDurations);
document.getElementById('breakDuration').addEventListener('change', updateDurations);

function updateDurations() {
    workDuration = parseInt(document.getElementById('workDuration').value) || 30;
    breakDuration = parseInt(document.getElementById('breakDuration').value) || 5;
    if (isWorking) {
        timeRemaining = workDuration * 60;
        updateTimerDisplay();
    }
}

function startTimer() {
    document.getElementById('startBtn').disabled = true;
    document.getElementById('resetBtn').disabled = false;
    timeRemaining = isWorking ? workDuration * 60 : breakDuration * 60;
    timerInterval = setInterval(countdown, 1000);
}

function countdown() {
    if (timeRemaining <= 0) {
        // Play beep sound when the timer ends
        document.getElementById('beep').play();
        
        clearInterval(timerInterval);
        switchSession();  // Switch between work and break sessions
    } else {
        timeRemaining--;
        updateTimerDisplay();
    }
}

function updateTimerDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    document.getElementById('timerDisplay').textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function switchSession() {
    // Toggle between work and break sessions
    isWorking = !isWorking;
    document.getElementById('sessionStatus').textContent = isWorking ? "Work Session" : "Break Time";
    timeRemaining = isWorking ? workDuration * 60 : breakDuration * 60;
    
    // Automatically start the next session after switching
    updateTimerDisplay();
    startTimer();
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').disabled = false;
    document.getElementById('resetBtn').disabled = true;
    isWorking = true;
    document.getElementById('sessionStatus').textContent = "Work Session";
    timeRemaining = workDuration * 60;
    updateTimerDisplay();
}

function playAlertSound() {
     const alertSound = document.getElementById('beep');
     alertSound.play();
}
// git remote add origin https://github.com/Nonsookoli007/study-timer.git
// git remote add origin https://github.com/Nonsookoli007/study-timer
