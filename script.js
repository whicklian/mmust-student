// ==========================================================================
// QUESTION FIVE: JAVASCRIPT PROGRAMMING (7 MARKS)
// ==========================================================================

// --------------------------------------------------------------------------
// (a) Declare three variables and display values using console.log() (2 marks)
// --------------------------------------------------------------------------
const studentName = "Reagan Omondi";
const registrationNumber = "COM/B/01-00183/2025";
const academicProgramme = "Bachelor of Science in Computer Science";

console.log("Student Name:", studentName);
console.log("Registration Number:", registrationNumber);
console.log("Academic Programme:", academicProgramme);

// --------------------------------------------------------------------------
// (b) Function named calculateGrade() returning the corresponding grade (3 marks)
// --------------------------------------------------------------------------
function calculateGrade(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60 && score <= 69) {
    return "B";
  } else if (score >= 50 && score <= 59) {
    return "C";
  } else if (score >= 40 && score <= 49) {
    return "D";
  } else if (score >= 0 && score < 40) {
    return "E";
  } else {
    return "Invalid score";
  }
}

// --------------------------------------------------------------------------
// (c) Call the function with score 75 and display returned grade via alert() (2 marks)
// --------------------------------------------------------------------------
const score = 75;
const grade = calculateGrade(score);
alert("The grade for a score of " + score + " is: " + grade);

// ==========================================================================
// QUESTION SIX & SEVEN: DOM MANIPULATION, EVENT HANDLING & FORM VALIDATION
// ==========================================================================

// (a) Retrieve the student registration form using DOM manipulation (1 mark)
const registrationForm = document.getElementById("registration-form");
const confirmationContainer = document.getElementById("confirmation-message");

// --------------------------------------------------------------------------
// QUESTION SEVEN: VALIDATION FUNCTION
// --------------------------------------------------------------------------
// (a) Validates that full name and registration number are not empty (2 marks)
// (b) Validates email address format using regular expression (1 mark)
function validateRegistrationForm(name, regNumber, email) {
  if (!name || name.trim() === "") {
    return {
      isValid: false,
      message: "Student's Full Name cannot be empty.",
    };
  }

  if (!regNumber || regNumber.trim() === "") {
    return {
      isValid: false,
      message: "Registration Number cannot be empty.",
    };
  }

  // Regex pattern: user@domain.tld
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return {
      isValid: false,
      message: "Please enter a valid email address (e.g., student@mmust.ac.ke).",
    };
  }

  return {
    isValid: true,
    message: "Validation successful.",
  };
}

// (b) Event listener that responds when user submits registration form (2 marks)
if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // (c) Retrieve student's name, registration number and email from form (2 marks)
    const name = document.getElementById("full-name").value;
    const regNumber = document.getElementById("reg-number").value;
    const email = document.getElementById("email").value;

    // Run Question Seven validation
    const validationResult = validateRegistrationForm(name, regNumber, email);

    if (!validationResult.isValid) {
      // Display validation error message on the webpage
      confirmationContainer.innerHTML = `
        <div class="error-box">
          <h3>Validation Error</h3>
          <p>${validationResult.message}</p>
        </div>
      `;
      return;
    }

    // (d) Display success message after form is successfully submitted (1 mark)
    confirmationContainer.innerHTML = `
      <div class="success-box">
        <h3>Registration Successful!</h3>
        <p><strong>Student Name:</strong> ${name.trim()}</p>
        <p><strong>Registration Number:</strong> ${regNumber.trim()}</p>
        <p><strong>Email Address:</strong> ${email.trim()}</p>
      </div>
    `;

    // Reset form inputs after successful submission
    registrationForm.reset();
  });
}

// --------------------------------------------------------------------------
// (c) Test the application using sample student info (1 mark)
// --------------------------------------------------------------------------
function runValidationTests() {
  console.log("\n--- Running Form Validation Tests ---");

  const testCases = [
    {
      name: "",
      regNumber: "COM/B/01-00183/2025",
      email: "reagan@mmust.ac.ke",
      expected: false,
      description: "Test 1: Empty Student Name",
    },
    {
      name: "Reagan Omondi",
      regNumber: "",
      email: "reagan@mmust.ac.ke",
      expected: false,
      description: "Test 2: Empty Registration Number",
    },
    {
      name: "Reagan Omondi",
      regNumber: "COM/B/01-00183/2025",
      email: "invalid-email-format",
      expected: false,
      description: "Test 3: Invalid Email Format",
    },
    {
      name: "Reagan Omondi",
      regNumber: "COM/B/01-00183/2025",
      email: "reagan@mmust.ac.ke",
      expected: true,
      description: "Test 4: Valid Student Details",
    },
  ];

  testCases.forEach((tc) => {
    const result = validateRegistrationForm(tc.name, tc.regNumber, tc.email);
    const passed = result.isValid === tc.expected;
    console.log(
      `${tc.description} -> Passed: ${passed} (Output: "${result.message}")`
    );
  });
}

// Run test cases in console
runValidationTests();


