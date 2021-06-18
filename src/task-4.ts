
export default function formatTime(seconds: number): string {
    const s: number = seconds % 60;
    const m: number = (seconds - s)/60 % 60;
    let h: number = (((seconds - s)/60)-m)/60;
    if(h === 0) h = 12
    if(h > 12) h -= 12;
    
    const format: 'PM' | 'AM' = seconds >= 43200 ? 'PM' : 'AM'

    return `${formatNumber(h)}:${formatNumber(m)}:${formatNumber(s)} ${format}`;
}

function formatNumber (num: number): number | string {
    return num >= 10 ? num : `0${num}`
}