const reverseString = (word)=>{
    let answer = "";
    for(let i = (word.length)-1 ; i>=0; i--){
        answer += word[i];
    }
    return answer;
}

export default reverseString