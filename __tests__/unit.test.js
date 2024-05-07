// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber tests
test('checks (890) 123-4567 to be true', () => {
  expect(isPhoneNumber('(890) 123-4567')).toBe(true);
});

test('checks 123-4567 to be true', () => {
  expect(isPhoneNumber('123-4567')).toBe(true);
});

test('checks 3d3-3d3d to be false', () => {
  expect(isPhoneNumber('3d3-3d3d')).toBe(false);
});

test('checks 1234-123 to be false', () => {
  expect(isPhoneNumber('1234-123')).toBe(false);
});

//isEmail tests
test('checks bob1234@ucsd.edu to be true', () => {
  expect(isEmail('bob1234@ucsd.edu')).toBe(true);
});

test('checks bob1234@gmail.com to be true', () => {
  expect(isEmail('bob1234@gmail.com')).toBe(true);
});

test('checks yahoo_lover@ to be false', () => {
  expect(isEmail('yahoo_lover@')).toBe(false);
});

test('checks yahoo_lover@gmail to be false', () => {
  expect(isEmail('yahoo_lover@gmail')).toBe(false);
});

//isStrongPassword tests
test('checks pass_word to be true', () => {
  expect(isStrongPassword('pass_word')).toBe(true);
});

test('checks iamstr0ngp4ss to be true', () => {
  expect(isStrongPassword('iamstr0ngp4ss')).toBe(true);
});

test('checks passwordOfHumongousLength to be false', () => {
  expect(isStrongPassword('passwordOfHumongousLength')).toBe(false);
});

test('checks badCharacter$ to be false', () => {
  expect(isStrongPassword('badCharacter$')).toBe(false);
});

//isDate tests
test('checks 03/12/2000 to be true', () => {
  expect(isDate('03/12/2000')).toBe(true);
});

test('checks 3/1/2000 to be true', () => {
  expect(isDate('3/1/2000')).toBe(true);
});

test('checks 3/1/99 to be false', () => {
  expect(isDate('3/1/99')).toBe(false);
});

test('checks 3/111/2000 to be false', () => {
  expect(isDate('3/111/2000')).toBe(false);
});

//isHexColor tests
test('checks #FF5733 to be true', () => {
  expect(isHexColor('#FF5733')).toBe(true);
});

test('checks #FF5 to be true', () => {
  expect(isHexColor('#FF5')).toBe(true);
});

test('checks FF to be false', () => {
  expect(isHexColor('FF')).toBe(false);
});

test('checks #FF57331 to be false', () => {
  expect(isHexColor('#FF57331')).toBe(false);
});