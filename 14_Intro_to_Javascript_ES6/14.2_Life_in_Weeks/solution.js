function lifeInWeek(age) {
	var remainingYears = 90 - age;
	var remainingMonths = remainingYears * 12;
	var remainingWeeks = remainingYears * 52;
	var remainingDays = remainingYears * 365;
	return "You left " + remainingDays + " days, " + remainingWeeks + " weeks " + remainingMonths + " months.";
}

