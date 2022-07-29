// https://leetcode.com/problems/01-matrix/

function updateMatrix(mat: number[][]): number[][] {
  const m:number = mat.length;
  const n:number = mat[0].length;
  const arr: number[][] = mat;
  const op: number = m * n;
  
  for (let i:number = 0; i < m ; i += 1) {
    for (let j:number = 0; j < n ; j += 1) {
      if (mat[i][j] == 0) {
        arr[i][j] = 0;
        continue;
      }
      for (let distance: number = 1; distance < op; distance += 1) {
        if (blocksInDistance(i, j, distance, mat)) continue;
        arr[i][j] = distance;
        break;
      }
      
    }
  }
  
  return arr;
};
