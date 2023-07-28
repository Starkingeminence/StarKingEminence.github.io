window.onload = function() {
  const videoContainer = document.getElementById('videoContainer');
  const popup = document.getElementById('popup');

  function closeVideoPopup() {
    videoContainer.style.display = 'none';
  }

  popup.onclick = function() {
    videoContainer.style.display = 'block';
    setTimeout(closeVideoPopup, 5000); // Adjust the time in milliseconds (5000ms = 5 seconds) for how long the popup stays open
  };
};
