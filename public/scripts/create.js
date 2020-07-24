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

    fetch("/account/create/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.statusCode === 409) {
                alert(data.msg);
            } else if (data.statusCode === 500) {
                alert(data.msg);
            } else {
                alert(data.msg);
                window.location.replace("/");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
