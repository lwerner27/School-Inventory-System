$("document").ready(() => {
    // Handles Submit for new account info
    $("#create-submit").on("click", (event) => {
        event.preventDefault();
        let newUser = getAccountInfo();
        attemptCreation(newUser);
    });
});

// Fucntion that gather infomation from inputs
function getAccountInfo() {
    return {
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
        username: $("#username").val().trim(),
        password: $("#password").val().trim(),
        confirmPassword: $("#confirmPassword").val().trim(),
        location: $("#location").val(),
    };
}

function attemptCreation(newUser) {
    // Checks to make sure that passwords match
    if (newUser.password !== newUser.confirmPassword) {
        alert("Your Passwords do not match please check your spelling.");
        return;
    }

    // Checks to make sure user has selected a location.
    if (newUser.location === null) {
        alert("Please select a location before submitting.");
        return;
    }

    console.log(newUser);
    fetch("/account/create/", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
