function reviewResume() {
    const resume = document.getElementById("resumeText").value.trim();

    if (resume === "") {
        alert("Please paste your resume first.");
        return;
    }

    const text = resume.toLowerCase();

    let score = 50;
    let suggestions = [];

    // Section checks
    if (resume.length > 1000) {
        score += 10;
    } else {
        suggestions.push("Add more relevant details to your resume.");
    }

    if (text.includes("skills")) {
        score += 10;
    } else {
        suggestions.push("Add a dedicated Skills section.");
    }

    if (text.includes("education")) {
        score += 10;
    } else {
        suggestions.push("Add your Education section.");
    }

    if (text.includes("project")) {
        score += 10;
    } else {
        suggestions.push("Include relevant projects.");
    }

    if (text.includes("experience")) {
        score += 10;
    } else {
        suggestions.push("Add internship or work experience if available.");
    }

    // Skill extraction
    const skills = [
        "python",
        "java",
        "c++",
        "c",
        "javascript",
        "html",
        "css",
        "sql",
        "machine learning",
        "artificial intelligence",
        "data science",
        "git",
        "github",
        "react",
        "node.js"
    ];

    const detectedSkills = skills.filter(function(skill) {
        return text.includes(skill);
    });

    // Display score
    document.getElementById("score").textContent = score + "/100";

    // Display suggestions
    const suggestionList = document.getElementById("suggestions");
    suggestionList.innerHTML = "";

    if (suggestions.length === 0) {
        suggestions.push(
            "Your resume contains the main sections. Consider adding measurable achievements and relevant keywords."
        );
    }

    suggestions.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        suggestionList.appendChild(li);
    });

    // Display detected skills
    let skillsBox = document.getElementById("detectedSkills");

    if (!skillsBox) {
        skillsBox = document.createElement("div");
        skillsBox.id = "detectedSkills";
        skillsBox.style.marginTop = "20px";
        document.getElementById("result").appendChild(skillsBox);
    }

    if (detectedSkills.length > 0) {
        skillsBox.innerHTML =
            "<h3>Detected Skills</h3><p>" +
            detectedSkills.join(" • ") +
            "</p>";
    } else {
        skillsBox.innerHTML =
            "<h3>Detected Skills</h3><p>No common technical skills detected.</p>";
    }

    document.getElementById("result").style.display = "block";
}
