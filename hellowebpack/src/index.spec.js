const test = require('./index');

// function test() {
//     return 12;
// }

describe('Function test', () => {
    beforeEach(() => {
        
    });

    it('test a is 12', () => {
        expect(test()).toBe(12);
    });

    it('test a is not 0', () => {
        expect(test()).not.toBe(0);
    });
});

describe('Function test 2', () => {
    it('test a is 12', () => {
        expect(test()).toBe(12);
    });
});