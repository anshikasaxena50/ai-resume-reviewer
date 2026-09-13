function reviewResume() {
    const resume = document.getElementById("resumeText").value.trim();

    if (resume === "") {
        alert("Please paste your resume first.");
        return;
    }

    let score = 50;
    let suggestions = [];

    if (resume.length > 1000) {
        score += 10;
    } else {
        suggestions.push("Add more relevant details to your resume.");
    }

    if (resume.toLowerCase().includes("skills")) {
        score += 10;
    } else {
        suggestions.push("Add a dedicated Skills section.");
    }

    if (resume.toLowerCase().includes("education")) {
        score += 10;
    } else {
        suggestions.push("Add your Education section.");
    }

    if (resume.toLowerCase().includes("project")) {
        score += 10;
    } else {
        suggestions.push("Include relevant projects.");
    }

    if (resume.toLowerCase().includes("experience")) {
        score += 10;
    } else {
        suggestions.push("Add internship or work experience if available.");
    }

    document.getElementById("score").textContent = score + "/100";

    const suggestionList = document.getElementById("suggestions");
    suggestionList.innerHTML = "";

    if (suggestions.length === 0) {
        suggestions.push("Your resume contains the main sections. Consider adding measurable achievements and relevant keywords.");
    }

    suggestions.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        suggestionList.appendChild(li);
    });

    document.getElementById("result").style.display = "block";
}
