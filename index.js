exports.parseStringToArrays = (str) => str.split('\n').map((row) => row.split(' ').map(Number));

const getHourGlass = exports.getHourGlass = (arr, i, j) => [
    arr[i][j], arr[i][j + 1], arr[i][j + 2],
    arr[i + 1][j + 1],
    arr[i + 2][j], arr[i + 2][j + 1], arr[i + 2][j + 2],
];

const sum = exports.sum = (arr) => arr.reduce((sum, i) => sum + i, 0);


exports.findLargest = (arr) => {
    const hourGlasses = [];
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <=3; j++) {
            hourGlasses.push(sum(getHourGlass(arr, i, j)));
        }
    }
    return hourGlasses.sort((a, b) => b - a)[0];
}
