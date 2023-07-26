// Function to show the popup
function showPopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("hidden");
}

// Function to hide the popup
function cancelPopup() {
  var popup = document.getElementById("popup");
  popup.classList.add("hidden");
}

// Function to continue to the next page
function continueToNextPage() {
  window.location.href = "final_page.html";
}

// Your existing JavaScript code (from the previous code)

// Function to show/hide the video and popup
function toggleVideoPopup() {
  const video = document.querySelector('video');
  const popup = document.querySelector('.popup');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  popup.classList.toggle('show');
}

// Add event listener to toggle video and popup on click
document.querySelector('.video-container').addEventListener('click', toggleVideoPopup);
