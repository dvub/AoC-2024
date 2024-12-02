const input = await Bun.file('input.txt').text();

// EDGE CASE TEST
// https://www.reddit.com/r/adventofcode/comments/1h4shdu/2024_day_2_part2_edge_case_finder/

/*
const input = `48 46 47 49 51 54 56
1 1 2 3 4 5
1 2 3 4 5 5
5 1 2 3 4 5
1 4 3 2 1
1 6 7 8 9
1 2 3 4 3
9 8 7 6 7
7 10 8 10 11
29 28 27 25 26 25 22 20`;*/

// parse input
const textReports = input.split('\n');
const reports = textReports.map((report) => {
	return report.split(' ').map(Number);
});

// main iteration
let totalSafeReports = 0;
reports.map((report) => {
	totalSafeReports += checkIsReportSafe(report, true) ? 1 : 0;
});
console.log(`TOTAL: ${totalSafeReports} SAFE`);

//
function checkIsReportSafe(report: number[], shouldRecurse: boolean): boolean {
	let isReportSafe = true;
	let direction = 0;

	for (let i = 1; i < report.length; i++) {
		const diff = report[i] - report[i - 1];
		const previousDirection = direction;
		direction = Math.sign(diff);

		if (
			(previousDirection !== direction && i > 1) ||
			Math.abs(diff) < 1 ||
			Math.abs(diff) > 3
		) {
			isReportSafe = false;

			if (shouldRecurse) {
				report.forEach((_, j) => {
					let newReport = [...report];
					newReport.splice(j, 1);
					let newResult = checkIsReportSafe(newReport, false);

					if (newResult) {
						isReportSafe = true;
					}
				});
			}
		}
	}

	return isReportSafe;
}
