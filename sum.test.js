const sum = require('./sum');

test('test case' , ()=>{
    expect(sum(1,2)).not.toBe(5);
    expect(sum(12,8)).toBe(20);
});

test('test case' , ()=>{
    expect(sum(2,3)).not.toBe(4);
    expect(sum(3,2)).toBe(5);
});


test('test case' , ()=>{
    expect(sum("Abir", "Nabir")).not.toBe(4);
    expect(sum("Abir","Nabir")).toBe("AbirNabir");
});
