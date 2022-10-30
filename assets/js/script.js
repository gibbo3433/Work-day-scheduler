// These variables decide what time my calendar will start and end at
var timeChoices = {
    startHour: 8,
    endHour: 21,
}

// This will update the calender to show the correct colours for the current time
function updateCalendar () {

    //This will check the current hour and log it into the console
    var currentHour = moment().hour();

    $('.row').each(function (index, element) {

        var hour = $(element).attr('data-hour');

        // Add the past class to my hours that are less than the current hout
        if (hour < currentHour) {
            $(element).find('.description').addClass('past');
        }
        // Add the present class to my hours that equal to the current hour
        else if (hour == currentHour) {
            $(element).find('.description').addClass('present')
        }
        // Add the future class to my hours that are more than current hour
        else {
            $(element).find('.description').addClass('future')
        }
    })};

    // This function allows the textarea to be saved to the local storage in the correct area
function saveNotes (event) {

    // Saves the correct hour to the local storage
    var hour = $(this).parent().parent().attr('data-hour');
    // Saves the text area associated with the hour
    var notes = $(this).parent().prev().children(0).val();

    // Used this console log to see where my DOM traverse was talking to
    console.log($(this).parent().parent().attr('data-hour'))
    console.log($(this).parent().prev().children(0).val())

    // adds the hour and notes into the local storage
    localStorage.setItem(hour, notes)
}

function generateCalendar () {
    // start at the start hour and add 1 hour until the hour gets less than or equal to the end hour
    for (var hour = timeChoices.startHour; hour <= timeChoices.endHour; hour++) {

    // Find any saved data from the local storage, depending on the hour
    var savedTask = localStorage.getItem(hour);

    // Adds a new div for each new row that we will need
    var newTime = $('<div>');
    newTime.addClass('row');
    newTime.attr('data-hour' , hour);

    // Adds a new hour column div which will show each hour
    var hourColumn = $('<div>');
    hourColumn.addClass('col-sm-2 hour')
    hourColumn.text(moment(hour, 'h').format('h A'));

    // Adds a new column that includes a text area
    var notesForDesc = $('<div>');
    notesForDesc.addClass('col-md-8 Notes');
    var textArea = $('<textarea>');
    textArea.addClass('col-12 description');
    textArea.val(savedTask);
    // this will be where i grab it from the local storage

    // Adds a new  column which includes a save button 
    var saveArea = $('<div>');
    saveArea.addClass('btn btn-success btn-lg saveButton');
    var saveButton = $('<button>');
    saveButton.addClass('btn btn-success btn-lg saveButton');
    saveButton.on("click", saveNotes).text('Save-Notes')

    // adds all of these new divs the 'newTime' div and then into '.container' div
    newTime.append(hourColumn);
    newTime.append(notesForDesc)
    notesForDesc.append(textArea);
    newTime.append(saveArea);
    saveArea.append(saveButton);
    $('.container').append(newTime)

    }};

// This function will start first and then the other functions will follow suit
function init () {

    // This will create the timeslots in the schedule for the user to see
    generateCalendar();

    // This will make sure the timeslots in the planner are the correct colour depending on what time of the day it is
    updateCalendar();

    // Set the day using moment.js script in the header
    var currentday = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(currentday);

    // Set so that the timer keeps checking the time of the day every 10 seconds
    setInterval(function () {

        updateCalendar();

    }, 10000);
}

init();