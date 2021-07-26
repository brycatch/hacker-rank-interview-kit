const orderAndSliceArray = (array, limit) => array.slice(0, limit).sort();

const getPairs = (array) => {
    let pairs = 0;
    const pairedNumbers = {};

    for (let i = 0; i < array.length; i++)
        pairedNumbers[`${array[i]}`] =
            pairedNumbers[`${array[i]}`] == undefined
                ? 1
                : pairedNumbers[`${array[i]}`] + 1;


    for (key in pairedNumbers)
        pairs += Math.floor(pairedNumbers[key] / 2);


    return pairs;
};

const sockMerchant = () => {
    const array = orderAndSliceArray([4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5], 20);
    console.log(getPairs(array));
};
sockMerchant();