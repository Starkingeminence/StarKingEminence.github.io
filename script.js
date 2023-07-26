function login() {
  var password = document.getElementById("password").value;
  var errorMsg = document.getElementById("error-msg");
  var button = document.querySelector("button");
  
  if (password === "I love you") {
    // Redirect to the next page or show a success message
    window.location.href = "next_page.html";
    button.style.backgroundColor = "green";
    errorMsg.textContent = ""; // Clear any previous error messages
    errorMsg.classList.remove("error");
    errorMsg.classList.add("success");
    errorMsg.textContent = "Login successful!";
  } else {
    // Show error message and revert button color
    errorMsg.classList.remove("success");
    errorMsg.classList.add("error");
    errorMsg.textContent = "Incorrect password";
    button.style.backgroundColor = "#4CAF50";
  }
}