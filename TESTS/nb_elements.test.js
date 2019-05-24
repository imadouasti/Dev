const {calcul} = require('./nb_elements.js')
let arr1;

beforeAll(()=>{
    arr1 = ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaa","aaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaa"]
})

test("test",()=>{
    expect(calcul(arr1)).toBe(0);
});