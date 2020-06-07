const assert = require('assert');
const messageBuilder = require('../utils/messageBuilder');

describe.only('utils - messageBuilder', () => {
    describe('when receives both an entiy and an action', () => {
        it('should return the respective message', () =>{
            const result = messageBuilder('movie', 'create');
            const expect = 'movie created';
            assert.strictEqual(result, expect);
        });
    });
    describe('when receives both an entity and an action, and method return a list', () => {
        it('should return the respective message for list of entity', () => {
            const result = messageBuilder('movie', 'list');
            const expect = 'movies listed';
            assert.strictEqual(result, expect);
        });
    });
});