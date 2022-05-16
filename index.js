/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrOfArrays) {
    let employeeRecords = [];
    for (let arr of arrOfArrays) {
        employeeRecords.push(createEmployeeRecord(arr));
    };
    return employeeRecords;
}

function createTimeInEvent(employee, dateStamp) {
    let newTimeInEvent = {
        type: 'TimeIn',
        hour: parseInt(dateStamp.substring(11,15)), //number
        date: dateStamp.substring(0,10) //string
    };
    employee.timeInEvents.push(newTimeInEvent);
    return employee;
}




