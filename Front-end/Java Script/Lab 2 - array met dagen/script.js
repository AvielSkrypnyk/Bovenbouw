const AllDays = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
const WorkDays = AllDays.slice(0, 5);
const WeekendDays = AllDays.slice(5);

document.getElementById("allDays").innerText = AllDays.join(", ");
document.getElementById("workDays").innerText = WorkDays.join(", ");
document.getElementById("weekendDays").innerText = WeekendDays.join(", ");
document.getElementById("allDaysReverse").innerText = AllDays.reverse().join(", ");
document.getElementById("workDaysReverse").innerText = WorkDays.reverse().join(", ");
document.getElementById("weekendDaysReverse").innerText = WeekendDays.reverse().join(", ");