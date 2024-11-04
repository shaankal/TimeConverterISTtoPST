function convertTime() {

    const istInput = document.getElementById("ist-time").value;
    if (!istInput) {
        document.getElementById("result").innerText = "Please enter a valid IST time.";
        return;
    }

    const istDate = new Date(istInput);


    if (isNaN(istDate.getTime())) {
        document.getElementById("result").innerText = "Invalid date. Please use the format YYYY-MM-DD HH:MM.";
        return;
    }


    const pstDate = new Date(istDate.getTime() - (13 * 60 + 30) * 60000);

  
    const pstDateStr = pstDate.toLocaleString("en-US", { 
        timeZone: "America/Los_Angeles",
        weekday: 'long',      
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });

    document.getElementById("result").innerText = `PST Time: ${pstDateStr}`;
}
