import generateElement from "./utils/generateElement.js";
import formatNameForImage from "./utils/formatNameForImage.js";
import members from "./data/members.js";

members.forEach((member) => {
  const card = generateElement("div", { class: "card" });
  const cardContent = generateElement("div", { class: "card__content" });

  // Card front generation
  const cardFront = generateElement("div", {
    class: "card__front card--bg-violet card--text-white",
  });
  const imgWrapper = generateElement("div", { class: "card__imgWrapper" });
  const img = generateElement("img", {
    class: "card__img",
    src: member.imgUrl,
    alt: formatNameForImage(member.name),
  });
  const cardName = generateElement("p", { class: "card__name" }, member.name);
  const cardCourse = generateElement(
    "p",
    { class: "card__course" },
    member.course
  );

  // Card back generation
  const cardBack = generateElement("div", {
    class: "card__back card--bg-violet card--text-white",
  });
  const cardInformation = generateElement("div", {
    class: "card__information",
  });
  const cardDescription = generateElement(
    "p",
    {
      class: "card__description",
    },
    member.description
  );
  const cardSkills = generateElement(
    "p",
    {
      class: "card__skills",
    },
    member.skills
  );
  const cardMotto = generateElement(
    "blockquote",
    {
      class: "card__motto",
    },
    member.motto
  );

  cardInformation.appendChild(cardDescription);
  cardInformation.appendChild(cardSkills);

  cardBack.appendChild(cardInformation);
  cardBack.appendChild(cardMotto);

  // Assemble card
  imgWrapper.appendChild(img);

  cardFront.appendChild(imgWrapper);
  cardFront.appendChild(cardName);
  cardFront.appendChild(cardCourse);

  cardContent.appendChild(cardFront);
  cardContent.appendChild(cardBack);
  card.appendChild(cardContent);

  const cardContainer = document.querySelector(".cards");
  cardContainer.appendChild(card);
});

/*

1. Cards should LOOK different (have member object contain card config)
*/
