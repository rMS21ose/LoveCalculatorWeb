document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("calculateBtn");
  const name1El = document.getElementById("name1");
  const name2El = document.getElementById("name2");
  const scoreEl = document.getElementById("score");
  const messageEl = document.getElementById("message");
  const loader = document.getElementById("loader");

  btn.addEventListener("click", async function () {
    const name1 = name1El.value.trim();
    const name2 = name2El.value.trim();

    // Basic validation
    if (!name1 || !name2) {
      messageEl.textContent = "Please enter both names.";
      return;
    }

    // show loader animation
    loader.classList.add("active");
    scoreEl.textContent = "--";
    messageEl.textContent = "Calculating...";

    try {
      const response = await fetch("/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name1: name1, name2: name2 })
      });

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();

      // small delay so the loading boxes are visible (for UX)
      await new Promise(resolve => setTimeout(resolve, 700));

      scoreEl.textContent = data.score;
      messageEl.textContent = data.message;
    } catch (err) {
      messageEl.textContent = "Something went wrong. Try again.";
      console.error(err);
    } finally {
      // hide loader
      loader.classList.remove("active");
    }
  });
});
