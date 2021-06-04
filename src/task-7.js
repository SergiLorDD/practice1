
export default function unique(data) {
    const uniqueData = new Set(data)
    return [...uniqueData];
}
