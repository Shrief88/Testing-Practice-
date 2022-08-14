import calculator from '../code/calculator'

test.skip("add two numbers",()=>{
    expect(calculator.add(1,2)).toBe(3);
})

test.skip("subtract two numbers",()=>{
    expect(calculator.subtract(1,2)).toBe(-1);
})

test.skip("multiply two numbers",()=>{
    expect(calculator.multiply(1,2)).toBe(2);
})

test.skip("devide two numbers",()=>{
    expect(calculator.divide(1,2)).toBe(0.5);
})

test.skip("devide by zero",()=>{
    expect(calculator.divide(1,0)).toBe(Infinity);
})









