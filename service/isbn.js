function generateISBN13() {
  const prefix = "978";
  let group = "";
  let publisher = "";
  let sum = 0;

  // Generate the next 3 digits (group)
  for (let i = 0; i < 3; i++) {
    const digit = Math.floor(Math.random() * 10);
    group += digit;
    sum += digit * (i % 2 === 0 ? 1 : 3);
  }

  // Generate the next 5 digits (publisher)
  for (let i = 0; i < 5; i++) {
    const digit = Math.floor(Math.random() * 10);
    publisher += digit;
    sum += digit * ((i + 3) % 2 === 0 ? 1 : 3);
  }

  // Add weighting of the prefix "978"
  sum += 9 * 1 + 7 * 3 + 8 * 1;

  // Calculate the check digit
  const remainder = sum % 10;
  const checkDigit = remainder === 0 ? 0 : 10 - remainder;

  // Format the ISBN
  return `${prefix}-${group}-${publisher}-${checkDigit}`;
}

module.exports = {
  generateISBN13
};
