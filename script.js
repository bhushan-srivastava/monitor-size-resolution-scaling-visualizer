const ids = [
  "m1","m2","m3"
];

function ppi(w,h,size){
  return Math.sqrt(w*w + h*h) / size;
}

function update(){

  ids.forEach(id => {

    const size = +document.getElementById(id+"size").value;
    const width = +document.getElementById(id+"width").value;
    const height = +document.getElementById(id+"height").value;
    const scale = +document.getElementById(id+"scale").value;

    const density = ppi(width,height,size);

    const workW = Math.round(width / (scale/100));
    const workH = Math.round(height / (scale/100));

    const uiIndex = ((density/110) / (scale/100)).toFixed(2);

    document.getElementById(id+"ppi").innerText =
      Math.round(density);

    document.getElementById(id+"work").innerText =
      `${workW}x${workH}`;

    document.getElementById(id+"ui").innerText =
      uiIndex;

    document.getElementById(id+"scaleText").innerText =
      scale;

    document.getElementById(id+"sizeLabel").innerText =
      `${size}"`;

    const monitor = document.getElementById(
      id === "m1" ? "monitor1" :
      id === "m2" ? "monitor2" :
      "monitor3"
    );

    const visualScale = size / 24;

    monitor.style.transform =
      `scale(${visualScale})`;

  });

}

document.querySelectorAll("input")
.forEach(input => {
  input.addEventListener("input", update);
});

update();
