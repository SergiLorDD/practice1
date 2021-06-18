
export default function sumDigits(n: number): number {
    return (n).toString().split('').reduce((sum, digit) => sum + Number(digit), 0)
}
