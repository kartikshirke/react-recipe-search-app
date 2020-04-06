export const increment =(num)=>{
    return {
        type: 'INCREMENT',
        payLoad: num
    };
}
export const decrement =(num)=>{
    return {
        type: 'DECREMENT',
        payLoad: num
    };
}
