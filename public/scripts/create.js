$("document").ready(() => {
    // Handles Submit for new account info
    $("#create-submit").on("click", (event) => {
        event.preventDefault();
        let newUser = getAccountInfo();
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
        location: $("#location").val().trim(),
    };
}
