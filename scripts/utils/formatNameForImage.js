const formatNameForImage = (name) => {
  const nameSplit = name.split(" ");
  return `${nameSplit[0]} ${nameSplit[nameSplit.length - 1]}`;
};

export default formatNameForImage;
