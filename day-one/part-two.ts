import { parseInput } from './utils';

const { left, right } = await parseInput();

let total = 0;
for (let i = 0; i < left.length; i++) {
	let occurrences = 0;
	for (let j = 0; j < right.length; j++) {
		if (right[j] === left[i]) {
			occurrences += 1;
		}
	}
	let s = (left[i] *= occurrences);
	total += s;
}

console.log(total);
