function showVideo() {
  const video = document.createElement("video");

  video.src = browser.runtime.getURL("foxy.webm");
  video.autoplay = true;
  video.muted = false; 
  video.style.position = "fixed";
  video.style.top = "0";
  video.style.left = "0";
  video.style.width = "100vw";
  video.style.height = "100vh";
  video.style.objectFit = "cover";
  video.style.zIndex = "999999";

  document.body.appendChild(video);
  
  setTimeout(() => {
    video.remove();
  }, 1200);
}

//0.01% cada segundo
if (!window.foxyInterval) {
  window.foxyInterval = setInterval(() => {
    if (Math.random() < 0.0001) {
      showVideo();
    }
  }, 1000); 
}
