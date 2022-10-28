
// This function will start first and then the other functions will follow suit
function init () {

    // This will create the timeslots in the schedule for the user to see
    generateTimeslots();

    // This will make sure the timeslots in the planner are the correct colour depending on what time of the day it is
    updateTimeslots();

    // Set the day using moment.js script
    var currentday = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(currentday);

    // Set so that the timer keeps checking the time of the day every 10 seconds
    setInterval(function () {

        updateTimeslots();

    }, 10000);
}

init();