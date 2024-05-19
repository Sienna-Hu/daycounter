const monthToDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31, 
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}


function calculateTimeSince(startDate) {
    const start = new Date(startDate);
    const today = new Date();

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();
    let days = today.getDate() - start.getDate();
    let hours = today.getHours() - start.getHours();
    let minutes = today.getMinutes() - start.getMinutes();
    let seconds = today.getSeconds() - start.getSeconds();

    // Adjust for negative values
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }
    for (let i = 0; i < months; i++) {
        let currMonth = 6 + i; 
        if (currMonth > 12) {
            currMonth -= 12;
        }
        days += monthToDays[currMonth];
        if (isLeapYear(today.getFullYear()) && currMonth == 2) {
            days += 1;
            console.log("leap year")
        }
    }

    return { years, days, hours, minutes, seconds };
}

function updateTime() {
    const { years, days, hours, minutes, seconds } = calculateTimeSince('2015-05-26');
    document.getElementById('year-number').innerText = years
    // document.getElementById('month-number').innerText = months
    document.getElementById('day-number').innerText = days
    document.getElementById('hour-number').innerText = hours
    document.getElementById('minute-number').innerText = minutes
    document.getElementById('second-number').innerText = seconds  
}

// Update the time difference every second
setInterval(updateTime, 1000);

updateTime();
