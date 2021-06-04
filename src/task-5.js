
export default function trim(text, maxLength) {
    if(maxLength <= 0) throw new RangeError;
    if(text.length > maxLength) return text.slice(0, maxLength - 1) + '\u2026'

    return text;
}
