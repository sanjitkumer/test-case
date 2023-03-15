const promiseData = require('./promiseData')

test('promise testing',() =>{
    return promiseData().then((data)=>{
        expect(data).toBe('Hello')
    })
})