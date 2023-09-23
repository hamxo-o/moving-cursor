let name = document.querySelector(".main");
let csr = document.querySelector(".cursor");
name.addEventListener("mousemove", function (dets) {
  csr.style.left = dets.x + "px";
  csr.style.top = dets.y + "px";
  csr.style.backgroundColor= "pink"
});
