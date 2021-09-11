const { expect, it } = require('@jest/globals')
const capitalize = require('./capitalize')

it('capitalizes', () => {
    expect(capitalize('dooDoo')).toBe('DooDoo');
})