var timeChoices = {
    startHour: 8,
    endHour: 23,
}

var calendarColumm = $('container');

function generateTimeslots () {
    // start at the start hour and add 1 hour until the hour gets less than or equal to the end hour
    for (var hour = timeChoices.startHour; hour <= timeChoices.endHour; hour++) {

    // Find any saved data from the local storage, depending on the hour
    var savedTask = localStorage.getItem(hour);

    // Adds a new div for each new hour that we need to add
    var newTime = $('<div>');
    newTime.addClass('row');
    newTime.attr('data-hour' , hour);

    var hourColumn = $('<div>');
    hourColumn.addClass('col-sm-2 hour')
    hourColumn.text(moment(hour, 'h').format('h A'));

    var notesForDesc = $('<div>');
    notesForDesc.addClass('col-md-8 Notes');
    var textArea = $('<text-area>');
    textArea.addClass('col-md-8 Notes');

    var saveArea = $('<div>');
    saveArea.addClass('btn btn-success btn-lg saveButton');
    var saveButton = $('<button>');
    saveButton.addClass('btn btn-success btn-lg saveButton');
    saveButton.on("click", ).text('Save-Work')



    //saveButton.text(Save);
    //saveButton.on("click", saveNotes);
    // add its own class so the button looks nice?

    newTime.append(hourColumn);
    newTime.append(notesForDesc)
    notesForDesc.append(textArea);
    newTime.append(saveArea);
    saveArea.append(saveButton);
    $('.container').append(newTime)

    }

}





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