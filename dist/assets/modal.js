// Modal
// window.addEventListener("load", function () {
//   setTimeout(function open(event) {
//     document.querySelector(".popup").style.display = "block";
//   }, 1000);
// });

function showModal() {
  if (!window.sessionStorage.getItem("modal")) {
    document.getElementById("modal").style.display = "block";
    window.sessionStorage.setItem("modal", true);
  }
  document.getElementById("close").onclick = function () {
    document.getElementById("modal").style.display = "none";
    sessionStorage.setItem("modal", "none");
  };
}

window.addEventListener("load", showModal);
