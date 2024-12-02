export async function parseInput() {
	const input = await Bun.file('input.txt').text();
	const lines = input.trim().split('\n');

	const left: number[] = [];
	const right: number[] = [];

	for (const line of lines) {
		const [num1, num2] = line.split(/\s+/).map(Number);
		left.push(num1);
		right.push(num2);
	}
	return { left, right };
}
