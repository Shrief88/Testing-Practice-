import capitalize from '../code/capitalize'

test.skip('capitalize first letter',()=>{
    expect(capitalize("shrief")).toBe("Shrief");
})

test.skip('dealing with empty strings',()=>{
    expect(capitalize("")).toBe("");
})

test.skip('dealing if the first letter is already capitalzed',()=>{
    expect(capitalize("Shrief")).toBe("Shrief");
})

test.skip('dealing with capitalzed letters',()=>{
    expect(capitalize("sHRIef")).toBe("Shrief");
})



