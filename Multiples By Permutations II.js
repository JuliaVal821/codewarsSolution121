https://www.codewars.com/kata/5ba178be875de960a6000187/train/javascript

    function findLowestInt(k1) {
        let k2 = k1 + 1;
        let p1, p2;
        for(let n = 1; n > 0; n++){
            p1 = String(n * k1).split('').sort().join('');
            p2 = String(n * k2).split('').sort().join('');
            if(p1 === p2) return n;
        }
    }