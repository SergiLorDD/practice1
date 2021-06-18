
export default function unique(data: Array<number>): Array<number> {
    const uniqueData = new Set(data)
    return [...uniqueData];
}
