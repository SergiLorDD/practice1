
export default function sumDigits(n) {
    return (n).toString().split('').reduce((sum, digit) => sum + Number(digit), 0)
}
