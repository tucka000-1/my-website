document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🚨 THIS STOPS AUTO SUBMIT

    const name = document.getElementById("name").value.trim().toLowerCase();
    const id = document.getElementById("number").value.trim();

    if (name === "" || id === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (name === "emmanuel samuel" && id === "1213") {
      window.location.href = "https://t.me/TUCKA00001";
    } else {
      alert("Invalid details.");
    }
    
   
   if (name === "" || id === "") {
      alert("Please fill in all fields.");
      return;
    }

  });

});