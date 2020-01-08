const MASK_LENGTH = 8;

const assertSubjectIsString = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Subject is not a string');
  }
};

const assertMaskIsString = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Mask is not a string');
  }
};

const string = (str, mask = '*') => {
  assertSubjectIsString(str);
  assertMaskIsString(mask);

  const mid = mask.repeat(MASK_LENGTH);

  if (str.length === 0) {
    return mid;
  }

  if (str.length === 1) {
    return `${str}${mid}`;
  }

  const start = str[0];
  const end = str.slice(-1);

  return `${start}${mid}${end}`;
};

const domain = (str, mask = '*') => {
  assertSubjectIsString(str);

  // keeps the TLD

  const tldIndex = str.lastIndexOf('.');
  if (tldIndex === -1) {
    // not a domain name
    return string(str, mask);
  }

  const start = str.slice(0, tldIndex);
  const end = str.slice(tldIndex);

  return `${string(start, mask)}${end}`;
};

const email = (str, mask = '*') => {
  assertSubjectIsString(str);

  const parts = str.split('@');

  if (parts.length !== 2) {
    // not an email address
    return string(str, mask);
  }

  const [start, end] = parts;

  return `${string(start, mask)}@${domain(end, mask)}`;
};


module.exports = {
  string,
  domain,
  email
};
