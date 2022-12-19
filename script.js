import generateElement from "./utils/generateElement.js";
import formatNameForImage from "./utils/formatNameForImage.js";
import members from "./data/members.js";

members.forEach((member) => {
  const card = generateElement("div", { class: "card" });
  const cardContent = generateElement("div", { class: "card__content" });

  // Card front generation
  const cardFront = generateElement("div", {
    class: `card__front ${member.cardClassConfig.bgColor} ${member.cardClassConfig.textColor}`,
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
  const cardEmail = generateElement(
    "p",
    { class: "card__email" },
    `✉  ${member.email}`
  );

  // Card back generation
  const cardBack = generateElement("div", {
    class: `card__back ${member.cardClassConfig.bgColor} ${member.cardClassConfig.textColor}`,
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
    `<b>Skills:</b> ${member.skills}`
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
  cardFront.appendChild(cardEmail);

  cardContent.appendChild(cardFront);
  cardContent.appendChild(cardBack);
  card.appendChild(cardContent);

  const cardContainer = document.querySelector(".cards");
  cardContainer.appendChild(card);
});
