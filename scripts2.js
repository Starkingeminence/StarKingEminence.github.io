window.onload = function() {
  const videoContainer = document.getElementById('videoContainer');
  const popup = document.getElementById('popup');

  const videoPath = "confetti-video.mp4"; // Replace "your_video.mp4" with the correct path or filename of your video

  function closeVideoPopup() {
    videoContainer.style.display = 'none';
  }

  videoContainer.innerHTML = `<video id="confettiVideo" autoplay loop muted>
      <source src="${videoPath}" type="video/mp4">
    </video>`;

  setTimeout(closeVideoPopup, 10000); // Adjust the time in milliseconds (5000ms = 5 seconds) for how long the popup stays open
};
