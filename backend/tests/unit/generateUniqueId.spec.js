const generateUniqueId = require('../../src/utils/generateUnitedId');
describe('Generate Unique Id', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});