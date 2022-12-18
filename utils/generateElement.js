const generateElement = (tagName, attributes, innerText) => {
  const element = document.createElement(tagName);

  for (const attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute]);
  }

  if (innerText) {
    element.innerHTML = innerText;
  }

  return element;
};

export default generateElement;
