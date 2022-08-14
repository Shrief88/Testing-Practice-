const analyzeArray = (array)=>{
    if(array.length === 0){
        return {};
    }
    const average = array.reduce((x,y)=> x+y,0)/array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const len = array.length;
    return{
        'average':average,
        'min':min,
        'max':max,
        'length':len,
    }
}

// analyzeArray([1,8,3,4,2,6]);

export default analyzeArray;