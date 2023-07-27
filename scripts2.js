window.onload = function() {
  const videoContainer = document.getElementById('videoContainer');
  const video = document.getElementById('confettiVideo');
  const popup = document.querySelector('.popup');

  video.onended = function() {
    video.currentTime = 0;
    video.play();
  };

  popup.onclick = function() {
    videoContainer.style.display = 'block';
    video.play();
  };
};
