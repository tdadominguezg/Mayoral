export const getPercentage = (price, discount) => {
    let result = 0;
    result =  (price - (price * discount)/100).toFixed(2);
    return result;
 }

