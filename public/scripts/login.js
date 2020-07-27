$("document").ready(() => {
  $("#login-submit").on("click", (event) => {
    event.preventDefault();

    let user = getUserInfo();

    fetch("/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

function getUserInfo() {
  return {
    username: $("#username").val(),
    password: $("#password").val(),
  };
}
