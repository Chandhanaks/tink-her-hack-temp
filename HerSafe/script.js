// 🚨 SOS
function sendSOS() {
  let contacts = JSON.parse(localStorage.getItem("hersafeContacts")) || [];
  if (contacts.length === 0) {
    alert("No emergency contacts saved!");
    return;
  }

  // Get current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const locationURL = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;

      // Send to each contact via WhatsApp (opens new tab)
      contacts.forEach(contact => {
        let number = contact.number.trim(); // remove spaces
        // Add default country code if only 10 digits
        if (number.length === 10) number = "91" + number;

        const message = `Hi ${contact.name}, I need help! My current location: ${locationURL}`;
        const whatsappURL = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
      });

      alert("SOS links opened! Click send in WhatsApp.");
    }, () => {
      alert("Unable to get location. Please allow location access.");
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// 👥 Save Emergency Contact
window.onload=function() {
  displayContacts();
};

function saveContact() {
  
  const name = document.getElementById("contactName").value.trim();
  const number =document.getElementById("contactNumber").value.trim();
  

  if (name === ""||number==="") {
    alert("Please enter both name and number");
    return;
  }
  if(!/^\d+$/.test(number)) {
    alert("Please enter a valid number with digits only(country code included)");
    return;
  }
  if(number.length===10) {
    number="91"+number;
  }
let contacts = JSON.parse(localStorage.getItem("hersafeContacts")) || [];

  contacts.push({ name: name, number: number });

  localStorage.setItem("hersafeContacts", JSON.stringify(contacts));

  document.getElementById("contactName").value = "";
  document.getElementById("contactNumber").value = "";

  displayContacts();
}

function displayContacts() {
  const contactList = document.getElementById("ContactList");
  contactList.innerHTML = "";

  let contacts = JSON.parse(localStorage.getItem("hersafeContacts")) || [];
if (contacts.length === 0) {
    contactList.innerHTML = "<li>No contacts saved</li>";
    return;
  }

  contacts.forEach((contact, index) => {
    const li = document.createElement("li");

   li.innerHTML = `
  <span class="contact-name">${contact.name}</span>
  <span class="contact-number">${contact.number}</span>
  <button class="delete-btn" onclick="deleteContact(${index})">delete contact</button>
`;
    contactList.appendChild(li);
  });
}

function deleteContact(index) {
  let contacts = JSON.parse(localStorage.getItem("hersafeContacts")) || [];

  contacts.splice(index, 1);

  localStorage.setItem("hersafeContacts", JSON.stringify(contacts));

  displayContacts();
}
  
  

// 📍 Share Location
function shareLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    window.open(`https://www.google.com/maps?q=${lat},${lon}`, "_blank");
  });
}

// 🗺️ Find Police Stations
function findSafePlace() {
  window.open(
    "https://www.google.com/maps/search/police+station+near+me",
    "_blank"
  );
}

function playBeep(duration = 500, frequency = 600, volume = 0.5) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = frequency;
  oscillator.type = "sine";

  oscillator.start();
  setTimeout(() => oscillator.stop(), duration);
}

// Fake Call simulation
function fakeCall() {
  document.getElementById("fakeCallBox").style.display = "block";
  window.fakeCallInterval = setInterval(() => playBeep(400, 700, 0.3), 1000);
}

function acceptCall() {
  clearInterval(window.fakeCallInterval);
  document.getElementById("callActive").style.display = "block";
}

function endCall() {
  clearInterval(window.fakeCallInterval);
  document.getElementById("callActive").style.display = "none";
  document.getElementById("fakeCallBox").style.display = "none";
}

function closeFakeCall() {
  clearInterval(window.fakeCallInterval);
  document.getElementById("callActive").style.display = "none";
  document.getElementById("fakeCallBox").style.display = "none";
}
