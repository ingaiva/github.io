var isOriginal = true;

function initJsLoader() {
    var elt = document.getElementById("loaderJs");            
    elt.onclick = changeApparence;
     console.log("-------------")
};
initJsLoader() ;

function changeApparence(e) {
    e.preventDefault();
  if (isOriginal) {
    isOriginal = false;
    let eltLogo = document.querySelector(".logoLink>img");
    eltLogo.src = "./images/alternative/logo.png";

    let eltsToChange = document.getElementsByClassName("border-b-brown");
    for (let index = 0; index < eltsToChange.length; index++) {
      const element = eltsToChange[index];
      element.style.borderColor = "darkblue";
    }

    eltsToChange = document.getElementsByClassName("btn-boutique");
    for (let index = 0; index < eltsToChange.length; index++) {
      const element = eltsToChange[index];
      element.style.borderColor = "darkblue";
      element.style.color = "darkblue";
    }

    eltsToChange = document.getElementsByClassName("nav-font");
    for (let index = 0; index < eltsToChange.length; index++) {
      const element = eltsToChange[index];
      if (element.innerText == "L'esprit R'Guitar")
        element.innerText = "L'esprit de la ville";
      else if (element.innerText == "Nos grattes")
        element.innerText = "Nos artistes";
    }

    eltsToChange = document.getElementsByClassName("bloc-esprit");
    for (let index = 0; index < eltsToChange.length; index++) {
      const element = eltsToChange[index].querySelector(
        ".header-flex .txt-titre-medium"
      );
      if (index == 0) element.innerText = "SEULE COMPTE L'ART";
      else if (index == 1) element.innerText = "DE PICASSO A Nicolas de Staël";
      else if (index == 2)
        element.innerText = "L'art de vivre, NOTRE savoir-faire";
    }

    let intro1 = document.querySelector(".intro-text>p");
    intro1.innerText = "Votre famille mérite";
    let intro2 = document.querySelector(".intro-text-2>p");
    intro2.innerText = "la meilleure ville";

    eltsToChange = document.getElementsByClassName("header-brown");
    for (let index = 0; index < eltsToChange.length; index++) {
      const element = eltsToChange[index];
      element.style.backgroundColor = "darkblue";
      let eltTxt = element.querySelector("p");
      if (index == 0) eltTxt.innerText = "L'ESPRIT DE LA VILLE";
      // L'ESPRIT R'GUITAR
      else if (index == 1) eltTxt.innerText = "NOS FLEURS"; //NOS GRATTES
    }

    eltsToChange = document.getElementsByClassName("hr-brown-inline");
    for (let index = 0; index < eltsToChange.length; index++) {
      const element = eltsToChange[index];
      element.style.backgroundColor = "darkblue";
    }
    eltsToChange = document.getElementsByClassName("btn-Acheter");
    for (let index = 0; index < eltsToChange.length; index++) {
      const element = eltsToChange[index];
      element.style.backgroundColor = "darkblue";
    }

    let bgIntro = document.querySelector(".intro");
    bgIntro.style.backgroundImage =
      "url('./images/alternative/antibesVue.jpg')";

    let divArtistes = document.querySelector(".img-artist-container");
    for (let index = 0; index < divArtistes.children.length; index++) {
      const element = divArtistes.children[index];
      const eltImg = element.querySelector("img");
      if (index == 0) eltImg.src = "./images/alternative/img2.jpg";
      else if (index % 2 > 0) eltImg.src = "./images/alternative/img1.jpg";
      else if (index % 2 == 0) eltImg.src = "./images/alternative/img4.jpg";
    }

    let txtGuitares = document.querySelector(".presenation-guitares p");
    txtGuitares.innerText = "Les fleurs en stock";

    let divGuitares = document.querySelector(".guitares-container");
    for (let index = 0; index < divGuitares.children.length; index++) {
      const element = divGuitares.children[index];
      const eltImg = element.querySelector("img");
      if (index == 0) eltImg.src = "./images/alternative/f1.jpg";
      else if (index == 1) eltImg.src = "./images/alternative/f2.jpg";
      else if (index == 2) eltImg.src = "./images/alternative/f3.jpg";
      else if (index == 3) eltImg.src = "./images/alternative/f4.jpg";
      else eltImg.src = "./images/alternative/f1.jpg";

      let eltPrix = element.querySelector(".txt-p-standard");
      eltPrix.innerText = genererPrix() + "€";
    }

    function genererPrix() {
      return (Math.random() * 10).toFixed(2);
    }
  }
  else{
    isOriginal = true;
    document.location.reload();}
}
