const test = require('tape');
const find = require('./');

const exampleStr =
`1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0`;

const exampleArr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];


test('parseStringToArrays', (t) => {
    t.plan(1);
    const input = exampleStr;
    const output = exampleArr;
    t.deepEqual(find.parseStringToArrays(input), output);
});

test('getHourGlass', (t) => {
    t.plan(1);
    t.deepEqual(find.getHourGlass([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ], 0, 0), [
        1, 2, 3,
        5,
        7, 8, 9
    ]);
});


test('sum', (t) => {
    t.plan(1);
    t.equal(find.sum([1,2,3]), 6);
});

test('findLargest', (t) => {
    t.plan(1);
    t.equal(
        find.findLargest(exampleArr),
        19
    );
});


test
