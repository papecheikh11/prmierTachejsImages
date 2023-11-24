const mesImages = document.getElementById("mes-images");
const voirPlus = document.getElementById("seeMore");
console.log(voirPlus);

voirPlus.addEventListener("click", () => {
  let nImg = 6;
  for (let n = 0; n < nImg; n++) {
    let imageUrl = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
    let img = document.createElement("img");
    img.src = imageUrl;
    mesImages.appendChild(img).innerHTML = `${imageUrl}`;
  }
});
