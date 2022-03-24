// Algorithm exercise found in HackerRank, link:
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
// My solution for this problem:

function breakingRecords(scores) {
    let records = [scores[0], scores[0]];
    let brokenRecordsCount = [0, 0];
    
    for(let i = 0; i < scores.length ; i += 1) {
        if(scores[i] > records[0]) {
            records[0] = scores[i];
            brokenRecordsCount[0] += 1;
        }
        if(scores[i] < records[1]) {
            records[1] = scores[i];
            brokenRecordsCount[1] += 1;
        }
    }
    return brokenRecordsCount;
}
