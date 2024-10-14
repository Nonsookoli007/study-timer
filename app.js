let workMinutes = 25;  // default work minutes
let workSeconds = 0;   // default work seconds
let breakMinutes = 5;  // default break minutes
let breakSeconds = 0;  // default break seconds
let isWorking = true;  // flag to check if it's work or break session
let timerInterval;
let timeRemaining;

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('workMinutes').addEventListener('change', updateDurations);
document.getElementById('workSeconds').addEventListener('change', updateDurations);
document.getElementById('breakMinutes').addEventListener('change', updateDurations);
document.getElementById('breakSeconds').addEventListener('change', updateDurations);

function updateDurations() {
    workMinutes = parseInt(document.getElementById('workMinutes').value) || 0;
    workSeconds = parseInt(document.getElementById('workSeconds').value) || 0;
    breakMinutes = parseInt(document.getElementById('breakMinutes').value) || 0;
    breakSeconds = parseInt(document.getElementById('breakSeconds').value) || 0;
    
    if (isWorking) {
        timeRemaining = workMinutes * 60 + workSeconds;
        updateTimerDisplay();
    }
}

function startTimer() {
    document.getElementById('startBtn').disabled = true;
    document.getElementById('resetBtn').disabled = false;
    timeRemaining = isWorking ? (workMinutes * 60 + workSeconds) : (breakMinutes * 60 + breakSeconds);
    timerInterval = setInterval(countdown, 1000);
}

function countdown() {
    if (timeRemaining <= 0) {
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
    isWorking = !isWorking;
    document.getElementById('sessionStatus').textContent = isWorking ? "Work Session" : "Break Time";
    timeRemaining = isWorking ? (workMinutes * 60 + workSeconds) : (breakMinutes * 60 + breakSeconds);
    updateTimerDisplay();
    startTimer();
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').disabled = false;
    document.getElementById('resetBtn').disabled = true;
    isWorking = true;
    document.getElementById('sessionStatus').textContent = "Work Session";
    timeRemaining = workMinutes * 60 + workSeconds;
    updateTimerDisplay();
}

function playAlertSound() {
     const alertSound = document.getElementById('beep');
     alertSound.play();
}

