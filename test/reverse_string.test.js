import reverseString from '../code/reverse_string'

test.skip('reverse string',()=>{
    expect(reverseString("shrief")).toBe("feirhs");
})

test.skip('dealing with empty strings',()=>{
    expect(reverseString("")).toBe("");
})

test.skip('palindrome words',()=>{
    expect(reverseString("rotator")).toBe("rotator");
})

test.skip('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
})


