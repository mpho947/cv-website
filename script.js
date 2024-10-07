// Personal Information Form Submission
document.getElementById('personalInfoForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const bio = document.getElementById('bio').value;

    const personalInfo = { name, contact, bio };

    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));

    displayPersonalInfo();
});

function displayPersonalInfo() {
    const personalInfo = JSON.parse(localStorage.getItem('personalInfo'));
    const display = document.getElementById('personalInfoDisplay');

    display.innerHTML = personalInfo ? `
        <div class="info-card">
            <p><strong>Name:</strong> ${personalInfo.name}</p>
            <p><strong>Contact:</strong> ${personalInfo.contact}</p>
            <p><strong>Bio:</strong> ${personalInfo.bio}</p>
        </div>
    ` : '<p>No information available.</p>';
}

document.getElementById('personalInfoDisplay') && displayPersonalInfo();

// Education Form Submission
document.getElementById('educationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const education = {
        school: document.getElementById('school').value,
        degree: document.getElementById('degree').value,
        startDate: document.getElementById('start_date').value,
        endDate: document.getElementById('end_date').value
    };

    let educationList = JSON.parse(localStorage.getItem('educationList')) || [];
    educationList.push(education);

    localStorage.setItem('educationList', JSON.stringify(educationList));

    displayEducation();
});

function displayEducation() {
    const educationList = JSON.parse(localStorage.getItem('educationList')) || [];
    const display = document.getElementById('educationDisplay');

    display.innerHTML = educationList.length > 0 ? educationList.map(edu => `
        <div class="info-card">
            <p><strong>School:</strong> ${edu.school}</p>
            <p><strong>Degree:</strong> ${edu.degree}</p>
            <p><strong>Start Date:</strong> ${edu.startDate}</p>
            <p><strong>End Date:</strong> ${edu.endDate}</p>
        </div>
    `).join('') : '<p>No education information available.</p>';
}

document.getElementById('educationDisplay') && displayEducation();

// Work Experience Form Submission
document.getElementById('workExperienceForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const experience = {
        company: document.getElementById('company').value,
        role: document.getElementById('role').value,
        startDate: document.getElementById('start_date').value,
        endDate: document.getElementById('end_date').value,
        description: document.getElementById('description').value
    };

    let workExperienceList = JSON.parse(localStorage.getItem('workExperienceList')) || [];
    workExperienceList.push(experience);

    localStorage.setItem('workExperienceList', JSON.stringify(workExperienceList));

    displayWorkExperience();
});

function displayWorkExperience() {
    const workExperienceList = JSON.parse(localStorage.getItem('workExperienceList')) || [];
    const display = document.getElementById('workExperienceDisplay');

    display.innerHTML = workExperienceList.length > 0 ? workExperienceList.map(exp => `
        <div class="info-card">
            <p><strong>Company:</strong> ${exp.company}</p>
            <p><strong>Role:</strong> ${exp.role}</p>
            <p><strong>Start Date:</strong> ${exp.startDate}</p>
            <p><strong>End Date:</strong> ${exp.endDate}</p>
            <p><strong>Description:</strong> ${exp.description}</p>
        </div>
    `).join('') : '<p>No work experience available.</p>';
}

document.getElementById('workExperienceDisplay') && displayWorkExperience();

// Skills Form Submission
document.getElementById('skillsForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const skill = document.getElementById('skill').value;

    let skillsList = JSON.parse(localStorage.getItem('skillsList')) || [];
    skillsList.push(skill);

    localStorage.setItem('skillsList', JSON.stringify(skillsList));

    displaySkills();
});

function displaySkills() {
    const skillsList = JSON.parse(localStorage.getItem('skillsList')) || [];
    const display = document.getElementById('skillsDisplay');

    display.innerHTML = skillsList.length > 0 ? skillsList.map(skill => `
        <div class="info-card">
            <p><strong>Skill:</strong> ${skill}</p>
        </div>
    `).join('') : '<p>No skills available.</p>';
}

document.getElementById('skillsDisplay') && displaySkills();

// Projects Form Submission
document.getElementById('projectsForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const project = {
        project_name: document.getElementById('project_name').value,
        description: document.getElementById('description').value
    };

    let projectsList = JSON.parse(localStorage.getItem('projectsList')) || [];
    projectsList.push(project);

    localStorage.setItem('projectsList', JSON.stringify(projectsList));

    displayProjects();
});

function displayProjects() {
    const projectsList = JSON.parse(localStorage.getItem('projectsList')) || [];
    const display = document.getElementById('projectsDisplay');

    display.innerHTML = projectsList.length > 0 ? projectsList.map(proj => `
        <div class="info-card">
            <p><strong>Project Name:</strong> ${proj.project_name}</p>
            <p><strong>Description:</strong> ${proj.description}</p>
        </div>
    `).join('') : '<p>No projects available.</p>';
}

document.getElementById('projectsDisplay') && displayProjects();

