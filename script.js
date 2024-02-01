const button = document.querySelector(".button"),
  progressBar = document.querySelector(".progress-bar"),
  percentNum = document.querySelector(".num");

let percent = 0;
let percentInterval = null;
let btnTxt = document.getElementById("text");

button.addEventListener("click", () => {
  percentInterval = setInterval(() => {
    percent++;
    percentNum.innerText = percent;
  }, 60);

  progressBar.classList.add("active");
  btnTxt.style.display = 'none';
  setTimeout(() => {
    progressBar.classList.remove("active");
    button
      .querySelector("i")
      .classList.replace("bx-cloud-download", "bx-check-circle");
    button.querySelector("span").innerText = "";
    clearInterval(percentInterval);
    percent = 0;

  }, 6000);
});

