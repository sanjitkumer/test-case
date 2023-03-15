const promise = require('./promise')


test('async function',async()=>{
const data = await promise();
expect(data).toBe('done')
})