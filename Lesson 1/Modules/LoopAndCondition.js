const print2DArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

const findLargestNumbers = (array) => {
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

const printPatternWithRange = (range) => {
    let output = '';
    for (let i = 1; i <= range; i++) {

        for (let j = 1; j <= range - i; j++) {
            output += ' ';
        }

        for (let j = 1; j <= i; j++) {
            output += `${j} `;
        }
        output += '\n';
    }
    return output;
}



export { print2DArray, findLargestNumbers, printPatternWithRange };



