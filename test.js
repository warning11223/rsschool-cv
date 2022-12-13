


function handAngle(hour, minutes) {
    const minuteAngle = minutes * 6;
    const hourAngle = (hour * 30) + (minutes * 0.5);
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, ((360 - angle) * 0.0174533) );
}


console.log(handAngle(12, 30))