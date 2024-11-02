// Show specific section based on button click
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Daily Checklist: Add Task
function addTask() {
    const taskInput = document.getElementById("dailyTask");
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;
        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });
        document.getElementById("dailyList").appendChild(taskItem);
        taskInput.value = "";
    }
}

// Weekly Goals
function addWeeklyGoal() {
    const goalInput = document.getElementById("weeklyGoal");
    const goalText = goalInput.value.trim();
    if (goalText) {
        const goalItem = document.createElement("li");
        goalItem.innerText = goalText;
        document.getElementById("weeklyList").appendChild(goalItem);
        goalInput.value = "";
    }
}

// Monthly Calendar
function displayCalendar() {
    const calendar = document.getElementById("calendar");
    for (let day = 1; day <= 31; day++) {
        const dayElement = document.createElement("div");
        dayElement.innerText = day;
        dayElement.className = "calendar-day";
        calendar.appendChild(dayElement);
    }
}
displayCalendar();

// Exam Countdown
function startExamCountdown() {
    const examDate = document.getElementById("examDate").value;
    const countdownElement = document.getElementById("countdown");
    const examDateTime = new Date(examDate).getTime();

    if (isNaN(examDateTime)) {
        countdownElement.innerText = "Please select a valid date.";
        return;
    }

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = examDateTime - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerText = "Exam time!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        countdownElement.innerText = `Time left: ${days} days and ${hours} hours`;
    }, 1000);
}

// Score Tracker
function addScore() {
    const subject = document.getElementById("subject").value.trim();
    const score = document.getElementById("score").value;

    if (subject && score) {
        const scoreItem = document.createElement("li");
        scoreItem.innerText = `${subject}: ${score}`;
        document.getElementById("scoreList").appendChild(scoreItem);
        document.getElementById("subject").value = "";
        document.getElementById("score").value = "";
    }
}
