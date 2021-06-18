export default function merge(data) {
    const combineObj = {};
    data.forEach((obj) => {
        const objEntries = Object.entries(obj);
        if (objEntries.length === 0) return;
        objEntries.forEach((paramArr) => {
            if (combineObj[paramArr[0]]) {
                combineObj[paramArr[0]] = [
                    ...combineObj[paramArr[0]],
                    paramArr[1],
                ];
            } else {
                combineObj[paramArr[0]] = [paramArr[1]];
            }
        });
    });

    return combineObj;
}
