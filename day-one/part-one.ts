import { parseInput } from './utils';

const { left, right } = await parseInput();

let total = 0;
while (left.length > 0) {
	const leftMin = Math.min(...left);
	const rightMin = Math.min(...right);

	const leftIndex = left.indexOf(leftMin);
	const rightIndex = right.indexOf(rightMin);

	left.splice(leftIndex, 1);
	right.splice(rightIndex, 1);

	const difference = Math.abs(leftMin - rightMin);
	total += difference;
}

console.log(total);
