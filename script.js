const progress = document.getElementById("progressbar");
const totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};
