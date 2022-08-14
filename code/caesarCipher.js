function isLetter(str) {
    return /[a-z]/g.test(str);
}

function isCapitalLetter(str){
    return /[A-Z]/g.test(str);
}

const caesarCipher  = (string,shift)=>{
    let arr = [];
    for(let i=0;i<string.length;i++){
        if(isLetter(string[i])){
            if(string[i].charCodeAt()+shift<=122){
                arr.push(String.fromCharCode(string[i].charCodeAt()+shift));
            }else{
                let index = (string[i].charCodeAt()+shift)%'z'.charCodeAt();
                arr.push(String.fromCharCode('a'.charCodeAt()+index-1));

            }
        }else if(isCapitalLetter(string[i])){
            if(string[i].charCodeAt()+shift<=90){
                arr.push(String.fromCharCode(string[i].charCodeAt()+shift));
            }else{
                let index = (string[i].charCodeAt()+shift)%'Z'.charCodeAt();
                arr.push(String.fromCharCode('A'.charCodeAt()+index-1));

            }
        }else{
            arr.push(string[i]);
            
        }
       
    }
    const shiftedString = arr.join('');
    return shiftedString;
}


export default caesarCipher;