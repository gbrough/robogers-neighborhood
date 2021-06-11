### Mr. Roboger's Neighborhood

### Authored by:  Garrett Broughton

### Project Description: 
  -   This is a webapp to demonstrate arrays and looping.
  -   HTML, CSS, jQuery: Has html tags, CSS styling, and jQuery logic.
  -   Arrays and Loops: "Gathers number input and returns array of numbers and words"

### Technologies Used:
  -   HTML was used for creating the basic information in the header, body, and paragraphs.
  -   CSS was used to format the botton.
  -   Bootstrap was used for styling the button.
  -   jQuery was used to inputting user data and displaying it to the user.
  -   Github was used to practices saving changes.
  -   JavaScript for loops were used for logic with the include, push, and slice methods.

### Program Setup Instructions: 
  -  Clone this repository to your desktop or folder you wish to edit the project. You can download by clicking the green code button and choosing clone. Alternatively,  can also issue a git clone command from a terminal, then paste the link "https://github.com/gbrough/robogers-neighborhood.git"
  -  You can open a built-in terminal in VSCode with a keyboard shortcut (ctrl + ~). Change directory to the top folder of the project you just downloaded(i.e. cd ~/Desktop).
  -  In order to view the project, open index.html in your browser or add the Live Share extention with VSCode. You can add Live Share in the VSCode settings. Click on Live Share on the bottom right to launch once it's installed.
  -  If you want to make changes, launch your code editor to make necessary changes to index.html, scripts in the js folder, or styles.css in the CSS folder. You can enter the command (code .) to launch it in VSCode.
  - If you want to publish your changes to the repo, you can upload with a series of Git commands.
    1. git init
    2. git remote "type-nickname" "https://github.com/gbrough/robogers-neighborhood"
    2. git add .
    3. git commit -m "message to document changes"
    4. git push "type-nickname" main
  - This will create a pull request, that will be reviewed for approval. Once the code is approved, the changes will be merged.
  - Thank you for contributing!

### Link to Github Page: 
<a href="https://gbrough.github.io/robogers-neighborhood">GitHub Page</a>

### License 
[MIT license](https://opensource.org/licenses/MIT) others are allowed modify or reuse this project.

### Contact information: 
  <ol>
    <li>Call me 503-724-1002</li>
    <li><a href="mailto:gbrough@gmail.com">Email Me</a></li>
    <li><a href="https://www.linkedin.com/in/gbroughton/">Add Me on LinkedIn</a></li>
  </ol>

//design/build form
//write as many tests as possible
//build/test logic
//fix bugs
  - input has no contraints, how to we account for large numbers such as 9999 not defined in the array
  - Should array be numbers or string, if numbers, should it be converted to strings?



```
Describe: roboMessage()
Test: "It should return an array with a 0 if the number 0 is inputted"
Expect:(roboMessage(0).toEqual([0]);

Describe: roboMessage()
Test: "It should return an array with number up to the number entered"
Code: "Use push method to push loop results to new array, the output new array
Expect:(roboMessage(5).toEqual([0,1,2,3,4,5]);

Describe: roboMessage()
Test: 'If number in array is 1 return "Beep!"'
Code: "If numberinput === 1, then push to new array"
Expect:(roboMessage(1).toEqual([0,"Beep!"]);

Describe: roboMessage()
Test: 'If number in array is 2 return "Boop!"'
Code: "If numberinput === 2, then push to new array, then push to new array"
Expect:(roboMessage(1).toEqual([0,"Beep!","Boop!"]);

Describe: roboMessage()
Test: 'If number in array is 3 "Won't you be my neighbor?"'
Code: "If numberinput === 3, then push to new array, then push to new array"
Expect:(roboMessage(1).toEqual([0,"Beep!","Boop!","Won't you be my neighbor?"]);

Describe: roboMessage()
Test: 'If number has 1 and 3 return "Won't you be my neighbor?"'
Code: "Use the include method to find if loop position contains a 3, then push to new array"
Expect:(roboMessage(13).toEqual([0,"Beep!", ... ,"Won't you be my neighbor?"]);

Describe: roboMessage()
Test: 'If number has 2 and 1 later in the array"'
Code: "Use the include method to find if loop position contains a 2, then push to new array"
Expect:(roboMessage(21).toEqual([0,"Beep!", ... ,"Boop!"];

Describe: roboMessage()
Test: 'If number has 1 later in the array!"'
Code: "Use the include method to find if loop position contains a 1, then push to new array"
Expect:(roboMessage(21).toEqual([0,"Beep!", ... ,"Beep!"];

Describe: roboMessage()
Test: 'Return results up to current position"'
Code: "Use splice method to return results up to number input"
Expect:(roboMessage(13).toEqual([0,"Beep!", ... ,"Won't you be my neighbor?"]);