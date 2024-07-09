var menuContainer = document.querySelector(".nav-container");
var menuBtn = document.querySelector(".nav-header .nav-btn");

menuBtn.addEventListener("click", menuToggle);
function menuToggle() {
  menuContainer.classList.toggle("active");
}

// popup in page knowledge
document
  .getElementById("open-popup-btn")
  .addEventListener("click", function () {
    // document.getElementById("open-popup-btn").style.display = "none";
    document.getElementsByClassName("popup")[0].classList.add("active");
  });

document
  .getElementById("dismiss-popup-btn")
  .addEventListener("click", function () {
    document.getElementById("open-popup-btn").style.display = "block";
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });

// progress when upload file in page knowledge
document
  .getElementById("file-upload")
  .addEventListener("change", function (event) {
    const files = event.target.files;
    const fileList = document.getElementById("file-list");
    fileList.innerHTML = ""; // Clear previous file list

    if (files.length === 0) {
      fileList.style.display = "none";
      return;
    }

    fileList.style.display = "block";

    for (const file of files) {
      const fileWrapper = document.createElement("div");
      fileWrapper.classList.add("file-wrapper");

      // Display file name and size
      const fileInfo = document.createElement("div");
      fileInfo.innerText = `${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
      fileWrapper.appendChild(fileInfo);

      // Create a progress bar for each file
      const progressWrapper = document.createElement("div");
      progressWrapper.classList.add("progress", "mt-3");
      const progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      progressBar.style.width = "0%";
      progressBar.innerText = "0%";
      progressWrapper.appendChild(progressBar);
      fileWrapper.appendChild(progressWrapper);

      fileList.appendChild(fileWrapper);

      const reader = new FileReader();
      reader.onprogress = function (event) {
        if (event.lengthComputable) {
          const percentage = (event.loaded / event.total) * 100;
          progressBar.style.width = percentage + "%";
          progressBar.innerText = Math.round(percentage) + "%";
        }
      };
      reader.onloadend = function () {
        progressBar.style.width = "100%";
        progressBar.innerText = "100%";
      };
      reader.readAsArrayBuffer(file);
    }
  });
