const correctUsername = "LeNaru"
const correctPassword = "LEONGHGLOL"

function login() {
    const username =
    document.getElementById('name').value;

    const password =
    document.getElementById('passwort').value;
    if (
        username == correctUsername &&
        password == correctPassword
    ) {
        document.getElementById("message").textContent =
        "Login erfolgreich ich muss noch was einstellen xD"
        //richtige website muss noch dahin :D
    } else {
        document.getElementById("message").textContent =
        "muss noch was einstellen aber falsch :D"
    }
}