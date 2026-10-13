const titleElement = document.getElementById("schulejs")

titleElement.addEventListener("input", function() {
    const text = this.innerText.trim().toLowerCase();

    if (text === "key_word") {
        window.location.href = "file";
       
    }
});
