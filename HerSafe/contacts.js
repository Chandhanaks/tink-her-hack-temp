// Load contacts on page load
window.onload = function() {
  displayContacts();
}

// Save contact
function saveContact() {
  const name = document.getElementById("contactName").value.trim();
  const number = document.getElementById("contactNumber").value.trim();

  if(!name || !number){
    alert("Please enter both Name and Number");
    return;
  }

  let contacts = JSON.parse(localStorage.getItem("hersafeContacts")) || [];

  contacts.push({ name, number });

  localStorage.setItem("hersafeContacts", JSON.stringify(contacts));

  document.getElementById("contactName").value = "";
  document.getElementById("contactNumber").value = "";

  displayContacts();
}

// Display contacts
function displayContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";

  let contacts = JSON.parse(localStorage.getItem("hersafeContacts")) || [];

  if(contacts.length === 0){
    list.innerHTML = "<li>No contacts saved</li>";
    return;
  }

  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${contact.name} - ${contact.number}</span>
                    <button onclick="deleteContact(${index})">delete❌</button>`;
    list.appendChild(li);
  });
}

// Delete contact
function deleteContact(index){
  let contacts = JSON.parse(localStorage.getItem("hersafeContacts")) || [];
  contacts.splice(index,1);
  localStorage.setItem("hersafeContacts", JSON.stringify(contacts));
  displayContacts();
}