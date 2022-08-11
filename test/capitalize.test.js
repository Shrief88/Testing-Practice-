import capitalize from '../code/capitalize'

test('capitalize first letter',()=>{
    expect(capitalize("shrief")).toBe("Shrief");
})

test('dealing with empty strings',()=>{
    expect(capitalize("")).toBe("");
})

test('dealing if the first letter is already capitalzed',()=>{
    expect(capitalize("Shrief")).toBe("Shrief");
})

test('dealing with capitalzed letters',()=>{
    expect(capitalize("sHRIef")).toBe("Shrief");
})

