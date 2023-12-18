// Get the card container element
const cardContainer = document.getElementById("cardContainer");

// Array of card data
const cardData = [
   {
     href: "/pages/productos/trooper.html",
     imageSrc: "/img/cards/trooper-1.png",
     imageAlt: "Stormtrooper",
     isNew: true,
     collection: "STAR WARS",
     title: "STORMTROOPER LIGHTSABER",
     price: "$ 1799,99",
     installment: "3 CUOTAS SIN INTERES"
   },
   {
     href: "/pages/productos/pidgeotto.html",
     imageSrc: "/img/cards/pidgeotto-1.png",
     imageAlt: "Pidgeotto",
     isNew: true,
     collection: "POKEMON",
     title: "PIDGEOTTO",
     price: "$ 1799,99",
     installment: "3 CUOTAS SIN INTERES"
   },
   {
     href: "/pages/productos/trooper.html",
     imageSrc: "/img/cards/luna-1.png",
     imageAlt: "Luna Lovegood",
     isNew: true,
     collection: "STAR WARS",
     title: "LUNA LOVEGOOD LION MASK",
     price: "$ 1799,99",
     installment: "3 CUOTAS SIN INTERES"
   },
  // más tarjetas}
];

for (let i = 0; i < cardData.length; i++) {
  // lista
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("glide__slide");

  // anchor
  const anchorElement = document.createElement("a");
  anchorElement.href = cardData[i].href;
  anchorElement.classList.add("tarjeton");

  // picture
  const pictureElement = document.createElement("picture");
  pictureElement.classList.add("tarj-pict");

  // imagen dentro del picture
  const imageElement = document.createElement("img");
  imageElement.src = cardData[i].imageSrc;
  imageElement.alt = cardData[i].imageAlt;
  pictureElement.appendChild(imageElement);

  // parte superior
  const upWrapper = document.createElement("div");
  upWrapper.classList.add("tarj-up");

  // agrego picture
  upWrapper.appendChild(pictureElement);

  // creo elemento NUEVO y lo agrego a la parte superior
  if (cardData[i].isNew) {
    const nuevoElement = document.createElement("p");
    nuevoElement.classList.add("tarj-epic");
    nuevoElement.textContent = "NUEVO";
    upWrapper.appendChild(nuevoElement);
  }

  // creo parte inferior
  const dnWrapper = document.createElement("div");
  dnWrapper.classList.add("tarj-dn");

  // agrego los textos a la parte inferior
  // coleccion
  const coleElement = document.createElement("p");
  coleElement.classList.add("tarj-cole");
  coleElement.textContent = cardData[i].collection;
  dnWrapper.appendChild(coleElement);

  // titulo
  const tituElement = document.createElement("h4");
  tituElement.classList.add("tarj-titu");
  tituElement.textContent = cardData[i].title;
  dnWrapper.appendChild(tituElement);

  // precio
  const priceElement = document.createElement("p");
  priceElement.classList.add("tarj-prec");
  priceElement.textContent = cardData[i].price;
  dnWrapper.appendChild(priceElement);

  // 3 cuotas
  const cuotaElement = document.createElement("p");
  cuotaElement.classList.add("tarj-cuot");
  cuotaElement.textContent = cardData[i].installment;
  dnWrapper.appendChild(cuotaElement);

  // agrego las dos partes al anchor
  anchorElement.appendChild(upWrapper);
  anchorElement.appendChild(dnWrapper);

  // agrego el anchor a la tarjeta
  listItemElement.appendChild(anchorElement);

  // agrego la tarjeta a la lista 
  cardContainer.appendChild(listItemElement);
}

new Glide(".glide", {
   type: "carousel",
   perView: 3,
   gap: 30,
   // autoplay: 2000,
 }).mount();
 
 