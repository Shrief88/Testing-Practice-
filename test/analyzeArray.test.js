
import analyzeArray from '../code/analyzeArray'

test.skip("test the function",()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})

test.skip("empty arrays",()=>{
    expect(analyzeArray([])).toStrictEqual({})
})




