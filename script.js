
async function submitQuestion() {
  const question = document.getElementById("questionInput").value;
  document.getElementById("arisResponse").textContent = "Thinking...";
  document.getElementById("eliraResponse").textContent = "Thinking...";

  try {
    const res = await fetch("/api/dualmind", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    document.getElementById("arisResponse").textContent = data.aris || "No response.";
    document.getElementById("eliraResponse").textContent = data.elira || "No response.";
  } catch (err) {
    document.getElementById("arisResponse").textContent = "Error.";
    document.getElementById("eliraResponse").textContent = "Error.";
  }
}
