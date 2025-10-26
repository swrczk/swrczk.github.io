
const links = [
    {
        name: "Jewellery Creator",
        description: "A simple web app that lets users design a custom necklace by choosing metal color, gemstones, pendants, and clasps, with a live visual preview and option to copy their selection.",
        link: "./projects/jewellery-creator",
        icon: "📿"
    },
    // {
    //     name: "jewellery-creator 2",
    //     description: "A stunning portfolio template with smooth animations and responsive design for showcasing your work.",
    //     link: "./projects/jewellery-creator",
    //     icon: "💼"
    // }
]

function generateProjectsGrid() {

    let prefix = ""
    if (window.location.protocol == 'file:') { prefix = "/index.html" }

    const grid = document.getElementById("projectsGrid")

    links.forEach((project, index) => {
        const card = document.createElement('a');
        card.href = project.link + prefix
        card.className = 'project-card'
        card.style.animationDelay = `${0.1 * index}s`


        card.innerHTML = `
                    <div class="project-icon">${project.icon}</div>
                    <h3 class="project-name">${project.name}</h3>
                    <p class="project-description">${project.description}</p>
                    <span class="project-link">
                        View Project
                        <span class="arrow">→</span>
                    </span>
                `

        grid.appendChild(card)
    })

}

generateProjectsGrid()