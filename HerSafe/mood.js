let selectedMood = "";

window.onload = function () {
  displayMoodHistory();
  
};

function selectMood(mood) {
  selectedMood = mood;
}

function saveMood() {
  const confidence = document.getElementById("confidenceNote").value.trim();
  const safety = document.getElementById("safetyNote").value.trim();

  if (selectedMood === "") {
    alert("Please select your mood 😊");
    return;
  }

  let moods = JSON.parse(localStorage.getItem("hersafeMoods")) || [];

  moods.push({
    mood: selectedMood,
    confidence: confidence,
    safety: safety,
    date: new Date().toISOString().split("T")[0]
  });

  localStorage.setItem("hersafeMoods", JSON.stringify(moods));

  document.getElementById("confidenceNote").value = "";
  document.getElementById("safetyNote").value = "";
  selectedMood = "";

  displayMoodHistory();
}

function displayMoodHistory() {
  const list = document.getElementById("moodHistory");
  list.innerHTML = "";

  let moods = JSON.parse(localStorage.getItem("hersafeMoods")) || [];

  if (moods.length === 0) {
    list.innerHTML = "<li>No moods saved yet 💭</li>";
    return;
  }

  moods.forEach((entry, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="mood-entry">
        <div>
          <strong>${entry.date}</strong> — ${entry.mood} <br>
           ${entry.confidence || "No note"} <br>
           ${entry.safety || "No safety note"}
        </div>
        <button class="delete-mood"
        onclick="deleteMood(${index})">❌</button>
      </div>
    `;

    list.appendChild(li);
  });
}

function deleteMood(index) {
  let moods = JSON.parse(localStorage.getItem("hersafeMoods")) || [];

  moods.splice(index, 1);

  localStorage.setItem("hersafeMoods", JSON.stringify(moods));

  displayMoodHistory();
}
function goBack(){
    window.location.href="dashboard.html";
}

