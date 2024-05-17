function calculateTimeSince(startDate) {
    const start = new Date(startDate);
    const today = new Date();

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();
    let days = today.getDate() - start.getDate();

    // Adjust for negative days and months
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

const { years, months, days } = calculateTimeSince('2015-05-26');
document.getElementById('year-number').innerText = years
document.getElementById('month-number').innerText = months
document.getElementById('day-number').innerText = days
