// About
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    const tabLinks = document.querySelectorAll(".tab-link");
  
    tabContents.forEach(tab => tab.classList.remove("active-tab"));
    tabLinks.forEach(link => link.classList.remove("active"));
  
    document.getElementById(tabName).classList.add("active-tab");
    evt.currentTarget.classList.add("active");
}

// Projects
const projects = [
    {
        title: "Task Tracker",
        image: "img/task.png",
        description: "A simple task tracker for productivity.",
        link: "https://pelacaktugas.netlify.app/"
    },
    {
        title: "Concert Ticket",
        image: "img/konser.png",
        description: "Ticket management web with CRUD.",
        link: "https://github.com/XXXTASY/prokhir-web"
    },
    {
        title: "Unique Clock",
        image: "img/jam.png",
        description: "A simple digital analog clock.",
        link: "https://xxxtasy.github.io/jam-unik/"
    }
];

const projectGrid = document.getElementById('project-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    projectCard.innerHTML = `
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">
            <img src="${project.image}" alt="${project.title}">
        </a>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    projectGrid.appendChild(projectCard);
});

// Animasi section
document.querySelectorAll('.animate-section').forEach((section, index) => {
    section.style.animationDelay = `${0.5 + index * 0.5}s`;
});

//Scroll atas
window.onscroll = function () {
    let button = document.getElementById("scrollToTop");
    if (document.documentElement.scrollTop > 80) {
      button.style.display = "flex";
    } else {
      button.style.display = "none";
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  