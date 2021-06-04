
export default function getNthItem(a, n) {
    if ( n <= 0 ) return 0;
    let result = 0
    for (let i = 1; i < n + 1; i++) {
        result = a - 2 * result;
    }
    return result;
}
