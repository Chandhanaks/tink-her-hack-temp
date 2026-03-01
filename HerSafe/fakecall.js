
let ringtone = document.getElementById("ringtone");

// Play ringtone when user taps anywhere
document.body.addEventListener("click", () => {
  if(ringtone.paused){
    ringtone.play().catch(()=>{
        console.log("Ringtone blocked until user interacts");
    });
  }
}, { once: true });

function acceptCall() {
  ringtone.pause();
  document.querySelector(".call-buttons").style.display = "none";
  document.getElementById("callActive").style.display = "block";
}

function declineCall() {
  ringtone.pause();
  window.location.href = "dashboard.html";
}

function endCall() {
  window.location.href = "dashboard.html";
}