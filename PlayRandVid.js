  const videos = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "video4.mp4",
    "video5.mp4",
    "video6.mp4",
    "video7.mp4",
    "video8.mp4"
  ];

  const video = document.getElementById("creativeVideo");
  let currentIndex = 0;

  function playVideo(index) {
    video.src = "Image/" + videos[index];
    video.load();
    video.play();
  }

  // Play first video
  playVideo(currentIndex);

  // When video ends → play the next one
  video.addEventListener("ended", () => {
    currentIndex++;
    if (currentIndex >= videos.length) {
      currentIndex = 0; // loop back to first video
    }
    playVideo(currentIndex);
  });

