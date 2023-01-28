/* Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
 You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]
*/

function printMatrixInSpiralForm(matrix) {
  var startRow = 0;
  var endRow = matrix.length;
  var startColumn = 0;
  var endColumn = matrix[0].length;
  var i;

  while (startRow < endRow && startColumn < endColumn) {
    for (i = startColumn; i < endColumn; i++) {
      console.log(matrix[startRow][i]);
    }
    startRow++;

    for (i = startRow; i < endRow; i++) {
      console.log(matrix[i][endColumn - 1]);
    }
    endColumn--;

    if (startRow < endRow) {
      for (i = endColumn - 1; i >= startColumn; i--) {
        console.log(matrix[endRow - 1][i]);
      }
      endRow--;
    }
    if (startColumn < endColumn) {
      for (i = endRow - 1; i >= startRow; i--) {
        console.log(matrix[i][startColumn]);
      }
      startColumn++;
    }
  }
}

var matrix = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 10, 11],
  [13, 14, 15],
];

printMatrixInSpiralForm(matrix);

//Time complexity : O(n^2)
//Space complexity : O(1)
