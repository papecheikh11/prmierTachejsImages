const mesImages = document.getElementById("mes-images");
const voirPlus = document.getElementById("seeMore");

voirPlus.addEventListener("click", () => {
  let nombreImg = 6;
  for (let n = 0; n < nombreImg; n++) {
    let imageUrl = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 500
    )}`;
    let img = document.createElement("img");
    console.log(imageUrl);
    img.src = imageUrl;
    mesImages.appendChild(img).innerHTML = `${imageUrl}`;
  }
});
