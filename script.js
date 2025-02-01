// Project Data
const projects = [
    {
        title: "   Ebook website",
        description: "A Frontend website where user has registrations,login,select the books",
        image: "/ebook.jpg",
        github: "#",
        
    },
    {
        title: "hospital management system",
        description: " Where we can manage the details of the patients and other ddetails{html,css,javascript,java,php }",
        image: "/hospital-management-system.webp",
        github: "#",
       
    },
    {
        title: "Network Intrusion Detection System",
        description: "Its an AIML project where we can upload a data set and protect from data lekage",
        image: "/net.jpg",
        github: "#",
        demo: "#"
    }
];

// Certification Data
const certifications = [
    {
        title: "Python 3 Programming Certificate",
        issuer: "UNOVERSITY OF MICHIGAN (COURSERA)",
        link: "https://www.coursera.org/account/accomplishments/specialization/553ZD9HBDWMN"
        
    },
    {
        title: "Software Engineering Basics for Everyone Certificate",
        issuer: " IBM",
        link: "https://courses.edx.org/certificates/65f66ebbdd0847b4979a305415b8acd7"
    },
    {
        title: "PYTHON FULL STACK DEVELOPER VIRTUAL INTERNSHIP",
        issuer: "Edu Skills Academy",
        link: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=10fa1c55bd7cd1770dd767501897c6ec",
        
    },
    {
        title: "NETWORKING CLOUD VIRTUAL INTERNSHIP CERTIFICATE",
        issuer: "Edu Skills Academy",
        link: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=10fa1c55bd7cd1770dd767501897c6ec"
    },
    {
        title: "SQL and Relational Databases 101 CERTIFICATE",
        issuer: " IBM",
        link: "https://courses.cognitiveclass.ai/certificates/b11aef354eec4d0cb3bee61e0a65539f"
    }
];

// Social Links Data
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/Ranjith0860",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ranjith-kumar-112483282/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/u/ranjithkumar5817/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`
    }
];

// Populate Projects
function populateProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" class="project-link github">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        Code
                    </a>
                    <a href="${project.demo}" class="project-link demo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                        Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Populate Certifications
function populateCertifications() {
    const certificationsContainer = document.getElementById('certifications-container');
    
    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certification-card';
        
        certCard.innerHTML = `
            <svg class="certification-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            <h3 class="certification-title">${cert.title}</h3>
            <p class="certification-issuer">${cert.issuer}</p>
            <a href="${cert.link}" class="certification-link">
                View Certificate
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
        `;
        
        certificationsContainer.appendChild(certCard);
    });
}

// Populate Social Links
function populateSocialLinks() {
    const socialContainer = document.getElementById('social-container');
    
    socialLinks.forEach(link => {
        const socialLink = document.createElement('a');
        socialLink.className = 'social-link';
        socialLink.href = link.url;
        
        socialLink.innerHTML = `
            ${link.icon}
            <span>${link.name}</span>
        `;
        
        socialContainer.appendChild(socialLink);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateCertifications();
    populateSocialLinks();
});

    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

