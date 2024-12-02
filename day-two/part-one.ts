const input = await Bun.file('input.txt').text();

/*
const input = `7 6 4 2 1
1 2 3 4 5
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
*/
const textReports = input.split('\n');
const reports = textReports.map((report) => {
	return report.split(' ').map(Number);
});

let totalSafeReports = 0;
reports.map((report) => {
	let isReportSafe = checkIsReportSafe(report);

	if (isReportSafe) {
		totalSafeReports += 1;
	}
});
console.log(totalSafeReports);
// console.log(reports);

function checkIsReportSafe(report: number[]) {
	let isReportSafe = true;
	let direction = 0;

	for (let i = 1; i < report.length; i++) {
		const diff = report[i] - report[i - 1];
		const previousDirection = direction;
		direction = Math.sign(diff);

		if (
			diff === 0 ||
			(previousDirection !== direction && i > 1) ||
			Math.abs(diff) < 1 ||
			Math.abs(diff) > 3
		) {
			isReportSafe = false;

			break;
		}
	}
	return isReportSafe;
}
