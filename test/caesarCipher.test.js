import  caesarCipher from '../code/caesarCipher'


test.skip('shift every alphabet letter',()=>{
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz',1)).toBe('bcdefghijklmnopqrstuvwxyza');
})

test.skip('dealing with spaces and special character', () => {
    expect(caesarCipher('hello, world!', 5)).toEqual('mjqqt, btwqi!');
})

test.skip('dealing with capital Letters', () => {
    expect(caesarCipher('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
})

