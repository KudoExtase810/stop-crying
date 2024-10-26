const params = new URLSearchParams(window.location.search);
const displayText = params.get("t") || "Default Text";

document.getElementById("display-text").textContent = displayText;
