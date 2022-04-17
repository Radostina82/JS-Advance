function solve(arr) {
    arr.sort(twoCriteriaSort);
    function twoCriteriaSort(cur, next) {
        if (cur.length === next.length) {
          return cur.localeCompare(next);
        }
        return cur.length - next.length;
      }
    console.log(arr.join('\n'));
}

solve(['alpha', 
'beta', 
'gamma']
);