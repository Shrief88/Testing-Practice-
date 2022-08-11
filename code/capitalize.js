const capitalize = (word)=>{
    if(word.length === 0){
        return word;
    }
    return word[0].toUpperCase() + (word.slice(1,word.length)).toLowerCase();
}


export default capitalize;