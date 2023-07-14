function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeWords(string) {
  return string.replace(/\b\w/g, (match) => match.toUpperCase());
}

export { capitalizeFirstLetter, capitalizeWords };
