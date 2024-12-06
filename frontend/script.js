document.getElementById('submitBtn').addEventListener('click', async () => {
    const name = document.getElementById('name').value || "Anonymous";
    const message = document.getElementById('message').value;

    if (!message.trim()) {
        alert('Please write a confession!');
        return;
    }

    const response = await fetch("https://send-message-5iko.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
    });

    if (response.ok) {
        alert("Confession sent successfully!");
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    } else {
        alert("Failed to send confession!");
    }
});
