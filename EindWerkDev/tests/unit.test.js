const { isUUID } = require('../database/util.js');
//unit test
describe('Check isUUID function', () => {
    it('check on bad uuid format', () => {
        expect(isUUID(1)).toBe(false);
        expect(isUUID(null)).toBe(false);
        expect(isUUID("")).toBe(false);
    });

    it('check a valid uuid', () => {
        expect(isUUID("97cde2cc-d1b4-42ea-bd85-3c5cb64821f8")).toBeTruthy()
    });
});