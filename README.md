# Security with bcrypt 🔒🔑

This assignment will allow you to play around with the `bcrypt` package by building a CLI application

## What you will be doing

In this assignment you will be expected to write a small authentication function. There is no need to build a server or link to a database; we will be saving our data to the file system.

For this assignment you will have to;

- Use bcrypt to create a hash for a password (`register.js`), and save that to a file
- Compare a password with the hashed password (`login.js`) 

## Tasks

### Task 1 - Getting bcrypt

1. Initialise `npm` with `npm init`

2. Install the [bcrypt](https://www.npmjs.com/package/bcrypt) npm package

3. Import `bcrypt` into `register.js`

### Task 2 - Writing a hashing helper function (register.js)

1. Write a function which takes a **string** as an argument, and uses `bcrypt.hash()` to hash the result and return the result

   > Hint: For now, use `10` as the number of salt rounds

   > Hint: This method returns a promise, so you might want to use `async / await` or use `.then()`
   
2. Run your function with the `userInput` variable, which you can populate from your terminal by including an additional argument, for example: `node register.js kittens`

3. Test your function by using `console.log()` to display the output

### Task 3 - Playing with salt

Play around with the salt rounds value. Use small and large numbers.

- How long does the program take to run?
- What would an ideal salt rounds number be?

### Task 4 - Saving the hashed output to file

We would like to store the hash we generated in the previous function into a file, so we can read it again

1. In the file `register.js`, import the node.js file system library

    > Hint: `import { promises as fs } from 'fs';` for the promise version of the library

2. Use the `fs.writeFile()` method to write the hash to a file

### Task 5 - Writing a compare helper function (login.js)

1. Open the file `login.js`

2. Import `bcrypt` and the node js file system library (we will use it to read the file)

3. Write a function which takes a **string** as an argument

4. Use the `fs.readFile()` method to read the hash you stored in the file you created when you ran `register.js`
   
5. Use `bcrypt.compare()` to compare the `userInput` variable with the hash from the file you just read
   
6. `bcrypt.compare()` returns either `true` or `false`
    - If `true`, display a message to the user stating that the passwords match
    - If `false`, display a message to the user stating that the passwords do not match

7. Test your code by running `node login.js {password}` - where `{password}` is the password you wish to test against the hash