# Week-5-Work-Scheduler

# Challenge 5: 

## Creating a work scheduler

### User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

### Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


## Issues identified and corrected

- Adding to the local memory and then making sure it was saved for future uses

I needed to work on making sure I located the data I needed to save to local memoruy and then make sure I reloaded it into the calendar
once it reopened again and wasn't lost.

- Changing the correct colours for the past, present and future styles

Creating an 'if, else if, else' function linked with the moment.js was difficult as I needed to make sure each newly created div was correcrtly styled
depending on the time of the day.

## Future work

- Change text styling on page 
- Add extra buttons for check-boxes on tasks

I have added HTML alt: notes, CSS /*notes*/ and Javascript //notes to help any future edits by making it easier to see what the different elements are in the code and if any collaboration work will be done in the future. 

## Screenshot of completed webpage + Inspect

![_C__Users_jgibb_Desktop_bootcamp_student_Work-day-scheduler_index html](https://user-images.githubusercontent.com/113479774/198893790-baf5f61e-d5df-48a7-87ed-6d1d5bea203e.png)

## Link to deployed application



## Authors and acknowledgment

Jordan Gibbs - Novice Coder

## License
N/A
