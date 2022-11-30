
Password generator widget refactor, developed for UCLA Web Development Boot Camp.

Upon loading the page, user is presented with a series of prompts asking whether their password should include upper case, lower case, numeric and special characters. If none of these character sets are selected, a warning pops up saying that at least one type of character must be included in the password, and the process re-starts.

Once desired character sets are chosen, user is prompted to enter a number between 8-128, corresponding to password length. If user enters a non-number string, or a number that is less than 8 or greater than 128, they get a warning and are sent back to the password length prompt.

Once password length is chosen, the function generatePassword() repeatedly chooses random characters from user's desired character sets, appending chosen characters onto the end of an empty string. This repeats until the string has length equal to desired password length.

This string is then passed to function writePassword() which actually displays it on the web page.

Once a password has been generated and displayed, user may click a button labeled "Generate Password" which will again call generatePassword() and writePassword(), using the same character sets and password length but randomly generating a new string.

Screen shot of site viewable at './deployed-keygen.png'

Deployed Site On GitHub Pages: https://aphexgil.github.io/bootcamp-keygen/