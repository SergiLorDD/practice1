
export default function getTopLetter(str: string): string {
    const letterCounter = new Map()
    for (const letter of str.split('')) {
        if(letterCounter.has(letter)) {
            letterCounter.set(letter, letterCounter.get(letter) + 1)
        } else {
            letterCounter.set(letter, 1)
        }
    }
    const sortedLetterCounter = [...letterCounter].sort((a, b) => b[1] - a[1]);
    return sortedLetterCounter[0][0];
}
