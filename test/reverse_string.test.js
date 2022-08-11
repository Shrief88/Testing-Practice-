import reverseString from '../code/reverse_string'

test('reverse string',()=>{
    expect(reverseString("shrief")).toBe("feirhs");
})

test('dealing with empty strings',()=>{
    expect(reverseString("")).toBe("");
})

test('palindrome words',()=>{
    expect(reverseString("rotator")).toBe("rotator");
})



