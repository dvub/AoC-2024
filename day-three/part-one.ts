const text = await Bun.file('test.txt').text();
//const text =
//	'mul(1,2)mul(2,4)mul(?$,412),FUCKYOUmul(())mul((((()))))))mul(mul()))mul(1,50)mul(mul(1,5),50))mul(%f10,259)i8(*QU@@)U JKAN SDHSmuL(Tao; sldkj,taoij)mul(102,198)';
let sum = 0;
// text.replace('/\f', '/');
text.split('mul(').map((x) => {
	const splitTerms = x.split(',');

	if (splitTerms.length < 2) {
		return;
	}
	if (splitTerms.length > 2) {
		console.log('HUH');
	}

	const a = Number(splitTerms[0]);
	const b = Number(splitTerms[1].split(')')[0]);
	console.log(splitTerms, x, a, b);

	if (isNaN(b) || isNaN(a)) {
		return;
	}

	const result = a * b;
	sum += result;
});
console.log('TOTAL: ', sum);

// NOT MINE
const mul = (sum: number, matches: RegExpExecArray) =>
	sum + parseInt(matches[1]) * parseInt(matches[2]);

const part1 = (rawInput: string) =>
	[...rawInput.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/gs)].reduce(mul, 0);

console.log('XPECT: ', part1(text));
