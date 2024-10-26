document.getElementById("buy-ticket").addEventListener("click", function() {
    fetch("/buy-ticket", {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("message").innerText = data.message;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
