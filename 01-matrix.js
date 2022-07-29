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

const blocksInDistance = (x: number, y: number, dis: number, arr: number[][]): boolean => {
  let limit: number = (dis * 2) + 1;
  let xSearch:number = x - dis;
  let ySearch:number = 0;
  const xMax = arr.length;
  const yMax = arr[0].length;
  
  
  if (xSearch < 0) {
    ySearch = -xSearch;
    limit -= ySearch;
    xSearch = 0;
  }
  
  while (limit > 0 && xSearch < xMax) {
    let top = y + ySearch;
    if (top >= 0) {
      if (arr[xSearch][top] === 0) return false;
    }
    
    let bottom = y - ySearch;
    if (bottom < yMax) {
      if (arr[xSearch][bottom] === 0) return false;
    }
    
    xSearch += 1;
    
    if (xSearch <= x) {
      ySearch += 1;
    } else {
      ySearch -= 1;
    }
    
    
    limit -= 1;
  }
  return true;
};
