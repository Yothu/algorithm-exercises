// Answer to the hackerrank exercise "Jumping on the clouds"
// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?isFullScreen=true

function jumpingOnClouds(c, k) {
    let finish = true;
    let pos = 0;
    let e = 100;
    
    while (finish) {
        pos = (pos + k) % c.length;
        e -= 1;
        
        console.log(pos);
        
        if (c[pos] === 1) {
            e -= 2;
        }

        if (pos === 0) {
            finish = false;
        }
    }
    return e;
}
