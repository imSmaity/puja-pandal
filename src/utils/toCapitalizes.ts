const toCapitalizes = (text: string) => {
  const words = text.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back together with a space
  return capitalizedWords.join(" ");
};

export default toCapitalizes;
