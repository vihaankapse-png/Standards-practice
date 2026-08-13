function selectClass(className) {
    window.location.href = "standards.html?class=" +
        encodeURIComponent(className);
}

function chooseStandard(standard) {
    document.getElementById("message").textContent =
        "You selected " + standard;
}
