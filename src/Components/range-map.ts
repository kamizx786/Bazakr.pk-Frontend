export default function jsxRangeMap(n, fn) {
  const arr: any[] = [];
  while (n > arr.length) {
    arr.push(fn(arr.length));
  }
  return arr;
}
