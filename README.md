The goal of this lab assignment is to understand and implement server-side validation of HTML forms using node.js. In this assignment, a template is given (here: p6-template.zip Download p6-template.zip), which includes an HTML form and JavaScript skeleton to validate the inputs before processing the form data. This lab emulates the server-side validation functionality using client-side JavaScript. I will be converting this code to work on the server-side using node.js. Node allows the use of JavaScript to be used as a server side language for validating the post requests of the form being submitted. I Modified the provided code to do the following server-side tasks that are being simulated on the client-side:

      Validate each field according to the specified rules.
      Display error messages if the validation fails.
      Create a <p> tag with your messages with class error. 
      Use the following error messages stored to display:
      "Name is required.", "Email is required.", "Password is required."
      "Name must be alphabetic and between 2 and 50 characters."
      "Password must be at least 6 characters long."
      "Invalid email format."
      "Age must be a number between 1 and 120."
      Display a success message if the validation passes.
      Create a <p> tag with your message with class success.


Validation Rules

    Name: Required, must be alphabetic and between 2 and 50 characters.
    Email: Required, must be a valid email format.
    Password: Required, must be at least 6 characters long.
    Age: Optional, if provided, must be a number between 1 and 120.



validation Successful:

![image](https://github.com/user-attachments/assets/2cdcebfa-4b50-4960-adea-a4039dd3b260)


User Forgot to type the name:

![image](https://github.com/user-attachments/assets/9738ac94-f846-494c-8cc4-6471d660ce91)


If all empty:

![image](https://github.com/user-attachments/assets/582e27da-5dd0-4a08-9036-59a6fd4064f4)


Negative age causes error:

![image](https://github.com/user-attachments/assets/61a0ef98-5be9-414c-ba80-d03e7096cdce)


https://project6-p2-shahedahmed2023.fly.dev


Explaining a scenario: When the user Enters name, password, and email click submit. after submission, the data is converted to a normal project. Using fetch to send the data as JSON string. when the server receives it. Then it validates the data and sends a json response. then fetch and read the response as json and show the context in the message-id tag. 


