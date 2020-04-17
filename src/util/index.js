export function sum (arr) {
	let s = 0;
    for (var i = arr.length-1; i>=0; i--) {
        s += arr[i];
    }
    return s;
}