export function changeValue(e){
    console.log("in changeValue");
    return {
        type:'CHANGE_VALUE',
        value:e.target.value
    }
}