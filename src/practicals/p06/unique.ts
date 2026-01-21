export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const combined = [...arr1, ...arr2];
  const countMap = new Map<number, number>();
  for (const num of combined) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  const result: number[] = [];
  const seen = new Set<number>();
  for (const num of combined) {
      if (countMap.get(num) === 1 && !seen.has(num)) {
          result.push(num);
          seen.add(num);
      }
  } return result;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(getUniqueNumbers(arr1, arr2)); 

const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3];
console.log(getUniqueNumbers(arr3, arr4)); 

const arr5 = [1, 1, 2, 3];
const arr6 = [4, 5];
console.log(getUniqueNumbers(arr5, arr6)); 

const arr7 = [5, 1, 3];
const arr8 = [2, 4];
console.log(getUniqueNumbers(arr7, arr8)); 