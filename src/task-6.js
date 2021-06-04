export default function getStats(data) {
    if (data.length === 0)
        return {
            min: null,
            max: null,
            avg: null,
        };

    return {
        min: Math.min(...data),
        max: Math.max(...data),
        avg: data.reduce((sum, i) => sum + i, 0) / data.length,
    };
}
