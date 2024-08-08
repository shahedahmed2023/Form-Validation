//import express
const express = require('express');
// import  body-parser
const bodyParser = require('body-parser');
// creates the express application object
const app = express();
// port number
const PORT = 3000;

// express use method applies the path to the express
//express static method names the path that contains static files to be served by the server
app.use(express.static("public"));
//returns middleware that only parses HTTP request bodies
app.use(bodyParser.urlencoded({ extended: true }));
// PARSE JSON 
app.use(bodyParser.json());



// Handle form submission and validation
app.post('/validate', (req, res) => {
    const errors = validateForm(req.body.name, req.body.email, req.body.password, req.body.age);

    if (errors.length === 0) {
        res.json({ success: true });
    } else {
        res.json({ success: false, errors });

    }
});

// Start the server
app.listen(PORT, function () {
    console.log(`Server running at http://localhost:${PORT}`);
});

//validiting function
function validateForm(name, email, password, age) {
    const errors = [];

    // Validate name
    if (!name) {
        errors.push('Name is required.');
    } else if (!/^[a-zA-Z ]*$/.test(name) || name.length < 2 || name.length > 50) {
        errors.push('Name must be alphabetic and between 2 and 50 characters.');
    }

    // Validate email
    if (!email) {
        errors.push('Email is required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push('Invalid email format.');
    }

    // Validate password
    if (!password) {
        errors.push('Password is required.');
    } else if (password.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    // Validate age
    if (age) {
        const ageNumber = parseInt(age, 10);
        if (isNaN(ageNumber) || ageNumber < 1 || ageNumber > 120) {
            errors.push('Age must be a number between 1 and 120.');
        }
    }

    return errors;
}
