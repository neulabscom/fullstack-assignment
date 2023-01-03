export function highlightPosts(titles: string[]) {
  let currentLength: number = Number.MAX_VALUE;
  let result: number;

  for (let i = 0; i < titles.length - 2; i++) {
    let charTotal = 0;
    for (let j = 0; j < 3; j++) {
      charTotal += titles[j + i].length;
    }
    if (charTotal < currentLength) {
      currentLength = charTotal;
      result = i;
    }
  }
  
  return [result, result + 1, result + 2];
}