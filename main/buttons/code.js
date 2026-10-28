const titleElement = document.getElementById("Loginjs")

titleElement.addEventListener("input", function() {
    const text = this.innerText.trim().toLowerCase();

    if (text === "schule") {
        window.location.href = "schule/schule.html"
    }
});
