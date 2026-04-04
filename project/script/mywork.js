//  Notes for myself throughout the code
const projects = [
    {
        id: 1,
        title: "Meta Tags",
        image: "images/meta-tags.png",
        link: "../week1/ponder/meta.html",
        tags: ["meta tags", "html", "css", "ponder"]
    },
    {
        id: 2,
        title: "Mission Statement Pt. 1",
        image: "images/mission-statement.png",
        link: "../week1/prove/mission1.html",
        tags: ["mission statement", "html", "css", "prove"]
    },
    {
        id: 3,
        title: "DOM Basics",
        image: "images/DOM-and-CSS.png",
        link: "../week2/ponder/dombasics.html",
        tags: ["DOM", "DOM Basics", "dom", "css", "html", "ponder"]
    },
    {
        id: 4,
        title: "Computational Thinking",
        image: "images/comp-thinking.png",
        link: "../week2/ponder/compthink.html",
        tags: ["Computational thinking", "html", "css", "ponder"]
    },
    {
        id: 5,
        title: "Mission Statement Pt. 2",
        image: "images/mission-statment2.png",
        link: "../week2/prove/mission2.html",
        tags: ["Mission Statement", "2", "html", "css", "prove"]
    },
    {
        id: 6,
        title: "Responsive Design",
        image: "images/responsive design.png",
        link: "../week3/ponder/responsive.html",
        tags: ["Responsive Deisgn", "responsive", "html", "css", "ponder"]
        
    },
    {
        id: 7,
        title: "Cool Pics",
        image: "images/cool-pics1.png",
        link: "../week3/prove/coolpics.html",
        tags: ["Cool Pics", "cool", "prove", "html", "css"]

    },
    {
        id: 8,
        title: "Modals",
        image: "images/modals.png",
        link: "../week4/ponder/modals.html",
        tags: ["Modals", "modals", "ponder", "html", "css"]
    },
    {
        id: 9,
        title: "Accessibility and Design",
        image: "images/accessibility ponder.png",
        link: "../week5/ponder/access.html",
        tags: ["Accessibility and Design", "Accessibility", "Design", "ponder", "html", "css"]
    },
    {
        id: 10,
        title: "Dynamic Content",
        image: "images/accessibility ponder.png",
        link: "../week6/ponder/dymaiccontent.html",
        tags: ["Dynamic Content", "dynamic", "content", "ponder", "css", "html"]
    },
    {
        id: 11,
        title: "Build a Blog Pt. 2",
        image: "images/blogpt1.png",
        link: "../week6/prove/blog2.html",
        tags: ["Blog", "Build a Blog", "build", "prove", "html", "css"]
    },
    {
        id: 12,
        title: "Forms",
        image: "images/checkout.png",
        link: "../week7/ponder/forms.html",
        tags: ["forms", "ponder", "html", "css",]
    },
    {
        id: 13,
        title: "Credit Card Form",
        image: "images/creditcardform.png",
        link: "../week7/creditcard/index.html",
        tags: ["Credit Card", "form", "credit", "card", "html", "css", "prove"]
    },
    {
        id: 14,
        title: "Objects",
        image: "images/object.png",
        link: "../week8/objects.html",
        tags: ["Objects", "object", "ponder", "html", "css"]
    },
    {
        id: 15,
        title: "Character Card",
        image: "images/charactercard.png",
        link: "../week8/prove/card.html",
        tags: ["Character Card", "character", "card", "html", "css", "prove"]
    },
    {
        id: 16,
        title: "Filtering and Sorting",
        image: "images/filter.png",
        link: "../week10/ponder/filtersort.html",
        tags: ["Filtering and Sorting", "filter", "sort", "html", "css", "ponder"]
    },
    {
        id: 17,
        title: "Recipe Pt. 2",
        image: "images/recipebook.png",
        link: "../week10/prove/recipe2.html",
        tags: ["Recipe", "recipes", "html", "css", "prove"]
    }
    
];

// Get DOM elements
const searchBar = document.getElementById('searchBar');
const projectsGrid = document.getElementById('projectsGrid');

// Function to display projects
function displayProjects(projectsToDisplay){
    projectsGrid.innerHTML = '';

    // Check if there are projects to display
    if (projectsToDisplay.length === 0){
        projectsGrid.innerHTML = '<p class="no-results">No projects found. Try a different search!</p>';
        return;
    }

    // Create project cards
    projectsToDisplay.forEach (project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Function to create a project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description || 'Click to view this project'}</p>
            <a href="${project.link}" class="project-link" target="_blank">View Project →</a>
        </div>
    `;
    return card;
}

// Function to filter projects based on search
function filterProjects(searchTerm){
    const filtered = projects.filter(project => {
        const titleMatch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
        const tagMatch = project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        return titleMatch || tagMatch;
    });

    displayProjects(filtered);
}

// Event listener for search bar
searchBar.addEventListener('input', function(){
    const searchTerm = this.ariaValueMax;
    filterProjects(searchTerm);
});

// Display all projects on page load
displayProjects(projects.slice(0, 3));