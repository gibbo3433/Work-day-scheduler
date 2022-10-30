# Week-3-password-generator

# Challenge 3: Password Generator

## Creating a password generator

As I have now created my portfolio, it is time for me to create some working appilcations to add to my page!

### User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

### Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Issues identified and corrected

Main issues I came across whislt making this application was making sure that the password contained all of the characters needed.
I made sure that the code had 'confirmupper' instead of 'upper' in line 75 as I was realised this was not taking into consideration the users choice.
Additionally, adding 'isNaN' into line 42 was useful as it then needed the user to enter a number to match the 'PassLength' attribute which helped

## Future work

- Add in additional password criteria (different special characters)

I have added HTML alt: notes, CSS /*notes*/ and Javascript //notes to help any future edits by making it easier to see what the different elements are in the code and if any collaboration work will be done in the future. 

## Screenshot of completed webpage + Inspect

![Screenshot 2022-10-16 194408](https://user-images.githubusercontent.com/113479774/196054165-fe2f7ca1-f1d1-4659-bbda-38b1744152fe.jpg)

## Link to deployed application



## Authors and acknowledgment

Jordan Gibbs - Novice Coder

## License
N/A
