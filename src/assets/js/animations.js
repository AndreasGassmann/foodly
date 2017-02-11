function money_rain(){
  var body = document.querySelector(".scroll-content");
  var drop = document.createElement("div");
  drop.style.left = Math.round(Math.random() * 1024) + "px";
  body.appendChild(drop);
  drop.className = "drop layer" + Math.floor(Math.random() * 3);

  }
