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

const timeSince = calculateTimeSince('2024-01-01');
document.getElementById('days-since').innerText = `${timeSince.years} year${timeSince.years !== 1 ? 's' : ''}, ${timeSince.months} month${timeSince.months !== 1 ? 's' : ''}, and ${timeSince.days} day${timeSince.days !== 1 ? 's' : ''}`;
