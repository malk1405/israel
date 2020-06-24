function activatePhoneField(input) {
  if (input.type !== `tel`) {
    return;
  }

  let maskedValue = ``;

  const phonePattern = input.title;

  const nonDigits = {length: 0};

  for (let i = 0; i < phonePattern.length; i++) {
    const char = phonePattern.charAt(i);
    if (!isDigit(char) && char !== `X`) {
      nonDigits[i] = char;
      nonDigits.length++;

      if (!nonDigits.parenthesesIndex && char === `(`) {
        nonDigits.parenthesesIndex = i;
      }
    }
  }

  let countryCode = ``;
  for (let i = 0; i < phonePattern.length; i++) {
    const char = phonePattern.charAt(i);

    if (isDigit(char)) {
      countryCode += char;
    } else if (countryCode) {
      break;
    }
  }

  let keyCode;
  input.addEventListener(`keydown`, (e) => {
    keyCode = e.keyCode;
  });

  input.addEventListener(`input`, (e) => {
    const value = e.target.value;
    const newMaskedValue = getMaskedValue(value);
    const newValue = getFullValue(newMaskedValue);
    let cursorPosition = event.target.selectionEnd;

    const shortValue = value.substr(0, cursorPosition);
    const shortMaskedValue = getMaskedValue(shortValue);
    const newShortValue = getFullValue(shortMaskedValue);
    cursorPosition = newShortValue.length;

    const deleteCode = 46;

    if (keyCode === deleteCode && cursorPosition < newValue.length) {
      while (!isDigit(newValue[cursorPosition])) {
        cursorPosition++;
      }
    }

    if (cursorPosition <= nonDigits.parenthesesIndex) {
      cursorPosition = nonDigits.parenthesesIndex + 1;
    }

    maskedValue = newMaskedValue;
    input.dataset.maskedValue = maskedValue;

    input.value = newValue;
    input.setSelectionRange(cursorPosition, cursorPosition);
  });

  input.addEventListener(`blur`, () => {
    if (maskedValue === countryCode) {
      input.value = ``;
    }
  });

  function getMaskedValue(value) {
    let res = ``;

    for (let i = 0; i < value.length; i++) {
      const char = value.charAt(i);
      if (isDigit(char)) {
        res += char;
      }
    }

    if (res.substr(0, countryCode.length) !== countryCode) {
      res = countryCode + res;
    }

    const maskedPhoneLength = phonePattern.length - nonDigits.length;
    return res.substr(0, maskedPhoneLength);
  }

  function getFullValue(str) {
    let res = ``;

    for (let i = 0; i < str.length; i++) {
      while (nonDigits[res.length]) {
        res += nonDigits[res.length];
      }

      res += str[i];
    }

    while (res.length <= nonDigits.parenthesesIndex) {
      res += nonDigits[res.length];
    }

    return res;
  }

  function isDigit(c) {
    return !isNaN(parseInt(c, 10));
  }
}

export default activatePhoneField;
