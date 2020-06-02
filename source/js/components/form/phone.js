function activatePhoneField(input) {
  if (input.type !== `tel`) {
    return;
  }

  let maskedValue = ``;

  const RE = /\D/g;

  const phonePattern = input.title.replace(/[a-z]/gi, `1`);
  const maskedPhoneLength = phonePattern.replace(RE, ``).length;
  const matches = [];

  const countryCode = /\d+/.exec(phonePattern)[0];

  let match;
  let parenthesesIndex = 0;
  while ((match = RE.exec(phonePattern)) !== null) {
    const {0: value, index} = match;

    if (!parenthesesIndex && value === `(`) {
      parenthesesIndex = index;
    }

    matches.push({value, index});
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
      while (newValue[cursorPosition].match(RE)) {
        cursorPosition++;
      }
    }

    if (cursorPosition <= parenthesesIndex) {
      cursorPosition = parenthesesIndex + 1;
    }

    maskedValue = newMaskedValue;

    input.value = newValue;
    input.setSelectionRange(cursorPosition, cursorPosition);
  });

  input.addEventListener(`blur`, () => {
    if (maskedValue === countryCode) {
      input.value = ``;
    }
  });

  function getMaskedValue(value) {
    let res = value.replace(RE, ``);

    if (res.substr(0, countryCode.length) !== countryCode) {
      res = countryCode + res;
    }

    return res.substr(0, maskedPhoneLength);
  }

  function getFullValue(str) {
    const arr = str.split(``);
    for (let i = 0; i < matches.length; i++) {
      const {index, value} = matches[i];

      if (index > parenthesesIndex && index >= arr.length) {
        break;
      }

      arr.splice(index, 0, value);
    }

    return arr.join(``);
  }
}

export default activatePhoneField;
