// 🚨 SOS - Send emergency message with location
function sendSOS() {
  let contacts = JSON.parse(localStorage.getItem("hersafeContacts")) || [];
  if (contacts.length === 0) {
    alert("No emergency contacts saved!");
    return;
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const locationURL = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;

      contacts.forEach(contact => {
        const number = contact.number;
        const message = `Hi ${contact.name}, I need help! My current location: ${locationURL}`;
        // Opens SMS app on mobile
        const smsURL = `sms:${number}?body=${encodeURIComponent(message)}`;
        window.open(smsURL, "_blank");
      });

      alert("SOS message opened for all saved contacts!");
    }, () => {
      alert("Unable to get location. Please allow location access.");
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}