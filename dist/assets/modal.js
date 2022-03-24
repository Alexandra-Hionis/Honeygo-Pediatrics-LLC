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
