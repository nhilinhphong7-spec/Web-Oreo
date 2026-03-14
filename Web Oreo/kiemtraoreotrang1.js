window.onscroll = function () {
  let btn = document.getElementById("topBtn");
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function topBack() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}