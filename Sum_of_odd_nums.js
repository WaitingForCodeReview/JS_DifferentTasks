/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
 */

function rowSumOddNumbers(n) {
    let num = 1;
    let arr = [];
    for(let i = 1; i < n; i++)
    {
        for(let j = 0; j <= i; j++)
        {
            num += 2;
            if(i == n - 1) arr.push(num);
        }
    }
    return arr.reduce((sum, current) => sum + current, 0);
}

console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(6));
console.log(rowSumOddNumbers(10));