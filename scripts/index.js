import generateElement from "./utils/generateElement.js";
import formatNameForImage from "./utils/formatNameForImage.js";
import members from "../data/members.js";
import appendChildren from "./utils/appendChildren.js";

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

  // Assemble front
  const imgWrapperChildren = [img];
  appendChildren(imgWrapper, imgWrapperChildren);
  const cardFrontChildren = [imgWrapper, cardName, cardCourse, cardEmail];
  appendChildren(cardFront, cardFrontChildren);

  // Assemble back
  const cardInformationChildren = [cardDescription, cardSkills];
  appendChildren(cardInformation, cardInformationChildren);
  const cardBackChildren = [cardInformation, cardMotto];
  appendChildren(cardBack, cardBackChildren);

  // Assemble card
  const cardContentChildren = [cardFront, cardBack];
  appendChildren(cardContent, cardContentChildren);
  card.appendChild(cardContent);

  const cardContainer = document.querySelector(".cards");
  cardContainer.appendChild(card);
});
