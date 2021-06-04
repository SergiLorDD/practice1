
export default function isTriangle(a, b, c) {
    if ( a<=0 || b<=0 || c<=0 ) return false
    if ( (a+b+c) - Math.max(a, b, c) * 2 <= 0 ) return false
    return true;
}
