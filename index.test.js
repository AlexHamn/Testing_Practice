const stringLength = require('./index');
const reverseString = require('./index');

it('CorrectLength', () => {
    expect(stringLength('string')).toBe(6);
})

it('Greater than 0', () => {
    expect(stringLength('string')).not.toBeNull();
})

it('Max length of 10', () => {
    expect(stringLength('string')).toBeLessThan(11);
})

it('Successfull flip', () => {
    expect(reverseString('string')).toBeDefined();
})