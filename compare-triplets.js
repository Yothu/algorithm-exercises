// Soution for the Hackerranks' algorithm exercise. Compare the triplets:
// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

function compareTriplets(a, b) {
  const res = [0, 0];
  for( let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) {
      res[0] += 1;
    } else if (b[i] > a[i]) {
      res[1] += 1;
    }
  }
  return res;
}
