
export default function formatTime(seconds) {
    const s = seconds % 60;
    const m = (seconds - s)/60 % 60;
    let h = (((seconds - s)/60)-m)/60;
    if(h === 0) h = 12
    if(h > 12) h -= 12;
    
    const format = seconds >= 43200 ? 'PM' : 'AM'

    return `${formatNumber(h)}:${formatNumber(m)}:${formatNumber(s)} ${format}`;
}

function formatNumber (num) {
    return num >= 10 ? num : `0${num}`
}