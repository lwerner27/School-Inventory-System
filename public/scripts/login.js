$("document").ready(() => {
    $("#login-submit").on("click", (event) => {
        event.preventDefault();

        let user = getUserInfo();

        console.log(user.username, user.password);
    });
});

function getUserInfo() {
    return {
        username: $("#username").val(),
        password: $("#password").val(),
    };
}
