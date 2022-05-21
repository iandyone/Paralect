/** Description of the numFormatter function. 
 ** formats the resulting value in ".k" format
 ** param {number} num - value that will be formatted
 ** returns the new value (eg: 1100 -> 1.1k)
*/

export function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'k';
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'm';
    } else if (num < 900) {
        return num;
    }
}