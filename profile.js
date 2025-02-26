let currentStep = 1;

function startProgress() {
    document.getElementById('profile-container').style.display = 'block';
    document.getElementById('start-btn').style.display = 'none';
    updateProgress(25);
}

function goToStep2() {
    document.getElementById('volunteering-container').style.display = 'block';
    document.getElementById('step2-btn').style.display = 'none';
    updateProgress(50);
}

function goToStep3() {
    document.getElementById('step3-container').style.display = 'block';
    document.getElementById('step3-btn').style.display = 'none';
    updateProgress(75);
}

function goToStep4() {
    document.getElementById('step4-container').style.display = 'block';
    document.getElementById('step4-btn').style.display = 'none';
    updateProgress(100);
}

function updateProgress(progress) {
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('progress-text').textContent = progress + '%';
}
    let skippedSteps = []; // Array to store skipped steps

function startProgress() {
    document.getElementById("start-btn").style.display = "none"; // Hide the start button
    document.getElementById("profile-container").style.display = "block"; // Show the profile container
}

function nextPrompt() {
    let promptArea = document.getElementById("prompt-area");
    let profileOutput = document.getElementById("profile-output");
    let nextBtn = document.getElementById("next-btn");
    let skipBtn = document.getElementById("skip-btn");
    updateProgress(25);

    switch (currentStep) {
        case 1: // Name prompt
            let nameInput = document.getElementById("name-input");
            let name = nameInput.value;
            if (name.trim() === "") {
                alert("Please enter your name.");
                return;
            }
            profileOutput.innerHTML = "Your name is: " + name;
            promptArea.innerHTML = "Enter your surname: <input type='text' id='surname-input'>";
            break;
        case 2: // Surname prompt
            let surnameInput = document.getElementById("surname-input");
            let surname = surnameInput.value;
            if (surname.trim() === "") {
                alert("Please enter your surname.");
                return;
            }
            profileOutput.innerHTML += "<br>Your surname is: " + surname;
            promptArea.innerHTML = "Select your gender: <br> <input type='radio' name='gender' value='male'> Male<br> <input type='radio' name='gender' value='female'> Female<br> <input type='radio' name='gender' value='other'> Other";
            break;
        case 3: // Gender prompt
            let genderInputs = document.getElementsByName("gender");
            let gender;
            genderInputs.forEach(input => {
                if (input.checked) {
                    gender = input.value;
                }
            });
            if (!gender) {
                alert("Please select your gender.");
                return;
            }
            profileOutput.innerHTML += "<br>Your gender is: " + gender;
            promptArea.innerHTML = "Agree with privacy terms? <br> <input type='checkbox' name='privacy' value='yes'> yes<br> <input type='checkbox' name='privacy' value='no'> no<br>";
            break;
        case 4: // Privacy terms prompt
            let privacyInputs = document.getElementsByName("privacy");
            let privacy;
            privacyInputs.forEach(input => {
                if (input.checked) {
                    privacy = input.value;
                }
            });
            if (!privacy) {
                alert("Please select.");
                return;
            }
            profileOutput.innerHTML += "<br>Agree with privacy terms: " + privacy;
            // After completing the last step of Step 1, show Step 2 button
            document.getElementById("step2-btn").style.display = "block";
            break;
    }

    // Update step count
    currentStep++;
    document.getElementById("question-number").textContent = currentStep;
}

function skipPrompt() {
    let promptArea = document.getElementById("prompt-area");
    let profileOutput = document.getElementById("profile-output");
    

    switch (currentStep) {
        case 1: // Name prompt
            profileOutput.innerHTML = "<br>Your name is: ";
            promptArea.innerHTML = "Enter your surname: <input type='text' id='surname-input'>";
            break;
        case 2: // Surname prompt
            profileOutput.innerHTML += "<br>Your surname is: ";
            promptArea.innerHTML = "Select your gender: <br> <input type='radio' name='gender' value='male'> Male<br> <input type='radio' name='gender' value='female'> Female<br> <input type='radio' name='gender' value='other'> Other";
            break;
        case 3: // Gender prompt
            profileOutput.innerHTML += "<br>Your gender is: ";
            promptArea.innerHTML = "Agree with privacy terms? <br> <input type='checkbox' name='privacy' value='yes'> yes<br> <input type='checkbox' name='privacy' value='no'> no<br>";
            break;
        case 4: // Privacy terms prompt
            profileOutput.innerHTML += "<br>Agree with privacy terms: ";
            break;
    }

    // Update step count
    currentStep++;
    document.getElementById("question-number").textContent = currentStep;
}

function goToStep2() {
    // Hide the step 2 button and show the volunteering container
    document.getElementById("step2-btn").style.display = "none";
    document.getElementById("volunteering-container").style.display = "block";
}

function nextVolunteerPrompt() {
    let volunteerPromptArea = document.getElementById("volunteer-prompt-area");
    let volunteerOutput = document.getElementById("volunteer-output");
    updateProgress(50);

    switch (currentStep) {
        case 5: // Volunteer experience prompt 1
            let volunteerRationalInput = document.getElementById("volunteer-input");
            let volunteerRational = volunteerRationalInput.value;
            if (volunteerRational.trim() === "") {
                alert("Please enter your volunteer experience.");
                return;
            }
            volunteerOutput.innerHTML = "Rational: " + volunteerRational + "<br>";
            volunteerPromptArea.innerHTML = "DoA <input type='text' id='volunteer-DoA'><br>";
            break;
        case 6: // Volunteer accomplishment prompt
            let volunteerDoAInput = document.getElementById("volunteer-DoA");
            let volunteerDoA = volunteerDoAInput.value;
            if (volunteerDoA.trim() === "") {
                alert("Please describe your accomplishment.");
                return;
            }
            volunteerOutput.innerHTML += "DoA: " + volunteerDoA + "<br>";
            volunteerPromptArea.innerHTML = "task: <input type='text' id='volunteer-task'><br>";
            break;
        case 7: // Volunteer task prompt
            let volunteerTaskInput = document.getElementById("volunteer-task");
            let volunteerTask = volunteerTaskInput.value;
            if (volunteerTask.trim() === "") {
                alert("Please describe your task.");
                return;
            }
            volunteerOutput.innerHTML += "task: " + volunteerTask + "<br>";
            volunteerPromptArea.innerHTML = "place: <input type='text' id='volunteer-place'><br>";
            break;
        case 8:
            let volunteerplaceInput = document.getElementById("volunteer-place");
            let volunteerplace = volunteerplaceInput.value;
            if (volunteerplace.trim() === "") {
                alert("Please enter the place of your volunteer activity.");
                return;
            }
            volunteerOutput.innerHTML += "Place: " + volunteerplace + "<br>";
            volunteerPromptArea.innerHTML = "Assignment type: <input type='text' id='volunteer-Assignment'><br>";
            break;
        case 9:
            let volunteerAssignmentInput = document.getElementById("volunteer-Assignment");
            let volunteerAssignment = volunteerAssignmentInput.value;
            if (volunteerAssignment.trim() === "") {
                alert("Please enter your Assignment type.");
                return;
            }
            volunteerOutput.innerHTML += "Assignment: " + volunteerAssignment + "<br>";
            document.getElementById("step3-btn").style.display = "block"; // Show step 3 button
            break;
    }

    // Update step count
    currentStep++;
    document.getElementById("volunteer-question-number").textContent = currentStep - 4;
}

function skipVolunteerPrompt() {
    let volunteerPromptArea = document.getElementById("volunteer-prompt-area");
    let volunteerOutput = document.getElementById("volunteer-output");

    switch (currentStep) {
        case 5: // Volunteer experience prompt 1
            volunteerOutput.innerHTML = "<br>Rational: ";
            volunteerPromptArea.innerHTML = "DoA <input type='text' id='volunteer-DoA'><br>";
            break;
        case 6: // Volunteer accomplishment prompt
            volunteerOutput.innerHTML += "<br>DoA: ";
            volunteerPromptArea.innerHTML = "task: <input type='text' id='volunteer-task'><br>";
            break;
        case 7: // Volunteer task prompt
            volunteerOutput.innerHTML += "<br>task: ";
            volunteerPromptArea.innerHTML = "place: <input type='text' id='volunteer-place'><br>";
            break;
        case 8:
            volunteerOutput.innerHTML += "<br>Place: ";
            volunteerPromptArea.innerHTML = "Assignment type: <input type='text' id='volunteer-Assignment'><br>";
            break;
        case 9:
            volunteerOutput.innerHTML += "<br>Assignment: ";
            document.getElementById("step3-btn").style.display = "block"; // Show step 3 button
            break;
    }

    // Update step count
    currentStep++;
    document.getElementById("volunteer-question-number").textContent = currentStep - 4;
}

function goToStep3() {
    // Hide the step 3 button and show the step 3 container
    document.getElementById("step3-btn").style.display = "none";
    document.getElementById("step3-container").style.display = "block";
}

function nextStep3Prompt() {
    let step3PromptArea = document.getElementById("step3-prompt-area");
    let step3Output = document.getElementById("step3-output");
    updateProgress(75);

    switch (currentStep) {
        case 10: // Qualifications prompt 1
            let areaInput = document.getElementById("area-input");
            let area = areaInput.value;
            if (area.trim() === "") {
                alert("Please enter your area of study.");
                return;
            }
            step3Output.innerHTML = "Area of study: " + area + "<br>";
            step3PromptArea.innerHTML = "Degree: <input type='text' id='degree-input'><br>";
            break;
        case 11: // Degree prompt
            let degreeInput = document.getElementById("degree-input");
            let degree = degreeInput.value;
            if (degree.trim() === "") {
                alert("Please enter your degree.");
                return;
            }
            step3Output.innerHTML += "Degree: " + degree + "<br>";
            step3PromptArea.innerHTML = "University/Institution: <input type='text' id='university-input'><br>";
            break;
        case 12: // University prompt
            let universityInput = document.getElementById("university-input");
            let university = universityInput.value;
            if (university.trim() === "") {
                alert("Please enter your university.");
                return;
            }
            step3Output.innerHTML += "University/Institution: " + university + "<br>";
            step3PromptArea.innerHTML = "complition year: <input type='text' id='complition-input'><br>";
            break;
        case 13:
            let complitionInput = document.getElementById("complition-input");
            let complition = complitionInput.value;
            if (complition.trim() === "") {
                alert("Please enter your complition year.");
                return;
            }
            step3Output.innerHTML += "complition year: " + complition + "<br>";
            step3PromptArea.innerHTML = "country : <input type='text' id='country-input'><br>";
            break;
        case 14:
        let countryInput = document.getElementById("country-input");
            let country = countryInput.value;
            if (country.trim() === "") {
                alert("Please enter your country.");
                return;
            }
            step3Output.innerHTML += "country; " + country+ "<br>";
            document.getElementById("step4-btn").style.display = "block"; // Show step 4 button
            break;
    }

    // Update step count
    currentStep++;
    document.getElementById("step3-question-number").textContent = currentStep - 9;
}

function skipStep3Prompt() {
    let step3PromptArea = document.getElementById("step3-prompt-area");
    let step3Output = document.getElementById("step3-output");

    switch (currentStep) {
        case 10: // Qualifications prompt 1
            step3Output.innerHTML = "<br>Area of study: ";
            step3PromptArea.innerHTML = "Degree: <input type='text' id='degree-input'><br>";
            break;
        case 11: // Degree prompt
            step3Output.innerHTML += "<br>Degree: ";
            step3PromptArea.innerHTML = "University: <input type='text' id='university-input'><br>";
            break;
        case 12: // University prompt
            step3Output.innerHTML += "<br>University: ";
            step3PromptArea.innerHTML = "complition year:<input type='text' id='university-input'><br>";
            break;
        case 13:
            step3Output.innerHTML += "<br>complition year: ";
            step3PromptArea.innerHTML = "country: <input type='text' id='university-input'><br>";
            break;
        case 14:
            step3Output.innerHTML += "<br>country: ";
            document.getElementById("step4-btn").style.display = "block"; // Show step 4 button
            break;
    }

    // Update step count
    currentStep++;
    document.getElementById("step3-question-number").textContent = currentStep - 9;
}
function goToStep4() {
    // Hide the step 4 button and show the step 4 container
    document.getElementById("step4-btn").style.display = "none";
    document.getElementById("step4-container").style.display = "block";
}

function nextStep4Prompt() {
    let step4PromptArea = document.getElementById("step4-prompt-area");
    let step4Output = document.getElementById("step4-output");
    updateProgress(100);

    switch (currentStep) {
        // Add cases for each question in Step 4
        case 15: // First question in Step 4
         // Step4 availability prompt
                let step4availabilityInput = document.getElementById("step4-availability-input"); // Corrected ID name
                let step4availability = step4availabilityInput.value;
                if (step4availability.trim() === "") {
                    alert("Please enter your availability");
                    return;
                }
                step4Output.innerHTML = "Availability for volunteering (min-max): " + step4availability + "<br>";
                step4PromptArea.innerHTML = "Surname: <input type='text' id='step4-surname'><br>";
            break;
        case 16: // Second question in Step 4
        let step4surnameInput = document.getElementById("step4-surname");
                    let step4surname = step4surnameInput.value;
                    if (step4surname.trim() === "") {
                        alert("Please enter your surname");
                        return;
                    }
                    step4Output.innerHTML += "Surname: " + step4surname + "<br>";
                    step4PromptArea.innerHTML = "Tel: <input type='text' id='step4-tel'><br>";

            break;
        case 17: // Third question in Step 4
        let step4telInput = document.getElementById("step4-tel");
                    let step4tel = step4telInput.value;
                    if (step4tel.trim() === "") {
                        alert("Please enter your number");
                        return;
                    }
                    step4Output.innerHTML += "Tel: " + step4tel + "<br>";
                    step4PromptArea.innerHTML = "Email: <input type='text' id='step4-email'><br>";
                  

            break;
        case 18:
        let step4emailInput = document.getElementById("step4-email");
                    let step4email = step4emailInput.value;
                    if (step4email.trim() === "") {
                        alert("Please enter your email");
                        return;
                    }
                    step4Output.innerHTML += "Email: " + step4email + "<br>";
                    break;

        // Add more cases if there are more questions in Step 4
    }

    // Update step count
    currentStep++;
    document.getElementById("step4-question-number").textContent = currentStep - 14; // Adjust the number accordingly
}

function skipStep4Prompt() {
    let step4PromptArea = document.getElementById("step4-prompt-area");
    let step4Output = document.getElementById("step4-output");

    switch (currentStep) {
        case 14: // Step4 availability prompt
                    step4Output.innerHTML = "<br>Availability for volunteering (min-max): ";
                    step4PromptArea.innerHTML = "Surname: <input type='text' id='step4-surname'><br>";
                    break;
                case 15: // Step4 surname prompt
                    step4Output.innerHTML += "<br>Surname: ";
                    step4PromptArea.innerHTML = "Tel: <input type='text' id='step4-tel'><br>";
                    break;
                case 16: // Step4 tel prompt
                    step4Output.innerHTML += "<br>Tel: ";
                    step4PromptArea.innerHTML = "Email: <input type='text' id='step4-email'><br>";
                    break;
                case 17:
                    step4Output.innerHTML += "<br>Email: ";
                    break;
            

    }

    // Update step count
    currentStep++;
    document.getElementById("step4-question-number").textContent = currentStep - 14; // Adjust the number accordingly
}
function updateQuestionNumber() {
        let totalQuestions = 4; // Update this value according to your total number of questions
        let currentQuestion = currentStep - 1; // Adjust the current step to represent the question number
        if (currentQuestion <= totalQuestions) {
            document.getElementById("question-number").textContent = currentQuestion;
            document.getElementById("volunteer-question-number").textContent = currentQuestion;
            document.getElementById("step3-question-number").textContent = currentQuestion;
            document.getElementById("step4-question-number").textContent = currentQuestion;
        }
    }