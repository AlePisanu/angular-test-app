export function parseISOtoString(dateVal: Date): string {
    const date = new Date(dateVal);
    return `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`;
}