
export default function isTriangle(a: number, b: number, c: number): boolean {
    if ( a<=0 || b<=0 || c<=0 ) return false
    if ( (a+b+c) - Math.max(a, b, c) * 2 <= 0 ) return false
    return true;
}
