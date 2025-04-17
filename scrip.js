const form = document.getElementById("myform");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
      FirstName: document.getElementById("FirstName").value,
      LastName: document.getElementById("LastName").value,
      PhoneNumber: document.getElementById("PhoneNumber").value,
      Email: document.getElementById("Email").value,
      Message: document.getElementById("Message").value,
    };

    fetch("https://script.google.com/macros/s/AKfycbwZcHbzZZRd5kZSmLmnLmTwSQj4rVHCmoNUhIHpODeecteMzrhALX7d-Aa7tUcnRjTI/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    .then(response => response.json())
    .then(response => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(error => {
      console.error("Error!", error.message);
      alert("Something went wrong.");
    });
  });
