function convertTime() {
    // Get the input value from the user
    const istInput = document.getElementById("ist-time").value;
    if (!istInput) {
        document.getElementById("result").innerText = "Please enter a valid IST time.";
        return;
    }

    // Create a Date object from the input IST time
    const istDate = new Date(istInput);

    // Check if the input date is valid
    if (isNaN(istDate.getTime())) {
        document.getElementById("result").innerText = "Invalid date. Please use the format YYYY-MM-DD HH:MM.";
        return;
    }

    // Calculate PST by subtracting 13 hours and 30 minutes
    const pstDate = new Date(istDate.getTime() - (13 * 60 + 30) * 60000);

    // Format PST time in a readable format
    const pstDateStr = pstDate.toLocaleString("en-US", { 
        timeZone: "America/Los_Angeles",
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });

    // Display the result
    document.getElementById("result").innerText = `PST Time: ${pstDateStr}`;
}
