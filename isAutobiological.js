function isAutobiographical(number) {
  const numStr = number.toString();
  let currentDigit = 0;

  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr.charAt(i);
    const count = numStr.split(currentDigit).length - 1;

    if (count !== parseInt(digit, 10)) {
      return false;
    }

    currentDigit++;
  }

  return true;
}

// Test case

const number = 42101000;

const result = isAutobiographical(number);
console.log(result);
