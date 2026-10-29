const GITHUB = "https://github.com/swrczk/"
const RAW = "https://raw.githubusercontent.com/swrczk/"

// play: link to a playable build (local submodule or external host)
// repo: GitHub repository name, used when there is no build and as a "Source" link
const categories = [
    {
        id: "games",
        title: "Games",
        subtitle: "Unity games, game jams and level design",
        projects: [
            {
                name: "Merge Garage",
                year: "2023 · revamp 2026",
                description: "A merge puzzle game: spawn everyday items, combine two of a kind into something better and fulfil customer orders before the clock runs out. Responsive blueprint-style UI, level select with unlocks, audio settings and three handcrafted levels.",
                tags: ["Unity", "C#", "Game design"],
                repo: "MergeGarage",
                image: RAW + "MergeGarage/master/Docs/screenshots/gameplay.png",
                icon: "🧰"
            },
            {
                name: "Dead Inc.",
                year: "2025",
                description: "A game made during the TSG Game Jam 2025.",
                tags: ["Unity", "C#", "Game jam"],
                repo: "dead-inc",
                icon: "💀"
            },
            {
                name: "Level Design Blockout",
                year: "2023",
                description: "A playable blockout of a hidden witch's valley: readable landmarks, colour-coded interactables and sightlines that lead the player from the witch's house to the cave entrance.",
                tags: ["Unity", "Level design"],
                repo: "LevelDesign-Blockout",
                image: RAW + "LevelDesign-Blockout/master/Screens/garden2.png",
                icon: "🗺️"
            },
            {
                name: "Dog Walk",
                year: "2022",
                description: "A 2D platformer level – my very first Unity game. Parallax scrolling, moving platforms and particles, plus my own UI, event, health and music systems.",
                tags: ["Unity", "C#", "2D"],
                repo: "UNITY-DogWalkGame",
                play: "https://play.unity.com/en/games/9f397dbc-dd0c-462a-add2-5cdb19a4d7ac/dog-walk",
                icon: "🐕"
            }
        ]
    },
    {
        id: "graphics",
        title: "Graphics & Simulation",
        subtitle: "Shaders, physics and performance experiments",
        projects: [
            {
                name: "10,000 Balls vs SDF",
                year: "2026",
                description: "10,000 balls settling against a signed distance field baked offline from the scene. Runs entirely on the C# Job System with Burst – no GameObjects or Rigidbodies per ball – and renders in a single GPU-instanced draw call.",
                tags: ["Unity 6", "Jobs", "Burst", "SDF"],
                repo: "SDF-Physics",
                image: RAW + "SDF-Physics/master/recording_demo.gif",
                icon: "⚪"
            },
            {
                name: "Shaders",
                year: "2026",
                description: "A shader playground where every effect is built twice: first in Shader Graph, then by hand in HLSL, to understand what the nodes actually compile down to.",
                tags: ["URP", "HLSL", "Shader Graph"],
                repo: "Shaders",
                icon: "🔥"
            },
            {
                name: "Godot Physics Simulations",
                year: "2023",
                description: "Hand-written real-time simulations: spring pendulum and rope, impulse-based collisions, boids, Game of Life, falling sand & water and a fire particle system.",
                tags: ["Godot", "GDScript", "Physics"],
                repo: "godot-physics-sims",
                image: RAW + "godot-physics-sims/master/docs/screenshots/boids-1.png",
                icon: "🌀"
            }
        ]
    },
    {
        id: "tools",
        title: "Tools & Research",
        subtitle: "Bigger technical projects",
        projects: [
            {
                name: "Interface Accessibility Analyzer",
                year: "2024 · master's thesis",
                description: "A desktop tool that analyses UI screenshots for accessibility. A computer vision + OCR pipeline (OpenCV, Tesseract) checks colour contrast and text readability against WCAG 2.x and generates a scored PDF report for each screen.",
                tags: ["Unity", "C#", "OpenCV", "OCR"],
                repo: "MGR---Interface-Accessibility-Analyzer",
                icon: "♿"
            }
        ]
    },
    {
        id: "web",
        title: "Web",
        subtitle: "Browser games and web apps",
        projects: [
            {
                name: "Dratewka the Shoemaker",
                year: "2017 · refactor 2020",
                description: "A browser reconstruction of the classic Polish text adventure. Active compass, full storyline, command recognition and an item system – in pure JavaScript.",
                tags: ["JavaScript", "Text adventure"],
                repo: "JS-DratewkaGame",
                play: "./projects/dratewka/dratewka.html",
                image: RAW + "JS-DratewkaGame/master/gamePreview/gameplay.gif",
                icon: "🐉"
            },
            {
                name: "Mouse Trap",
                year: "2017",
                description: "A reconstruction of the Atari game built on pixel-perfect collision detection on canvas. Two levels, enemies, lives and a time limit.",
                tags: ["JavaScript", "Canvas"],
                repo: "JS-MouseTrapGame",
                play: "./projects/mouse-trap/index.html",
                image: RAW + "JS-MouseTrapGame/master/gamePreview/gameplay.gif",
                icon: "🐭"
            },
            {
                name: "#ExpAtHome",
                year: "2020 · HackYeah",
                description: "Built during the HackYeah 2020 hackathon: an app that encourages people to stay active at home using gamification mechanics.",
                tags: ["Vue", "Hackathon"],
                repo: "VUE-ExpAtHome-HackYeah",
                image: RAW + "VUE-ExpAtHome-HackYeah/master/appPreview/app%20Demo.gif",
                icon: "🏃"
            }
        ]
    },
    {
        id: "other",
        title: "Other",
        projects: [
            {
                name: "Jewellery Creator",
                year: "2025",
                description: "A simple web app that lets users design a custom necklace by choosing metal color, gemstones, pendants, and clasps, with a live visual preview and option to copy their selection.",
                tags: ["JavaScript"],
                repo: "jewellery-creator",
                play: "./projects/jewellery-creator/index.html",
                icon: "📿"
            }
        ]
    }
]

function createCard(project, index) {
    const card = document.createElement("article")
    card.className = "project-card"
    card.style.animationDelay = `${0.08 * index}s`

    const repoUrl = GITHUB + project.repo
    const isExternal = project.play && project.play.startsWith("http")
    const mainUrl = project.play || repoUrl
    const target = project.play && !isExternal ? "" : ` target="_blank" rel="noopener"`

    const thumb = project.image
        ? `<img src="${project.image}" alt="${project.name} preview" loading="lazy">`
        : `<span class="thumb-icon">${project.icon}</span>`

    card.innerHTML = `
        <a class="project-thumb" href="${mainUrl}"${target}>
            ${thumb}
            ${project.play ? `<span class="badge">▶ Playable</span>` : ""}
        </a>
        <div class="project-body">
            <span class="project-year">${project.year}</span>
            <h3 class="project-name">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <ul class="project-tags">${project.tags.map(t => `<li>${t}</li>`).join("")}</ul>
            <div class="project-actions">
                <a class="project-link" href="${mainUrl}"${target}>
                    ${project.play ? "Play" : "View on GitHub"}
                    <span class="arrow">→</span>
                </a>
                ${project.play ? `<a class="source-link" href="${repoUrl}" target="_blank" rel="noopener">Source</a>` : ""}
            </div>
        </div>
    `

    // Fall back to the icon when a preview image fails to load
    const img = card.querySelector(".project-thumb img")
    if (img) {
        img.addEventListener("error", () => {
            img.replaceWith(Object.assign(document.createElement("span"), {
                className: "thumb-icon",
                textContent: project.icon
            }))
        })
    }

    return card
}

function generatePortfolio() {
    const container = document.getElementById("categories")
    const nav = document.getElementById("categoryNav")

    categories.forEach(category => {
        const navLink = document.createElement("a")
        navLink.href = `#${category.id}`
        navLink.textContent = category.title
        nav.appendChild(navLink)

        const section = document.createElement("section")
        section.className = "category"
        section.id = category.id
        section.innerHTML = `
            <div class="category-header">
                <h2>${category.title}</h2>
                ${category.subtitle ? `<p>${category.subtitle}</p>` : ""}
            </div>
            <div class="projects-grid"></div>
        `

        const grid = section.querySelector(".projects-grid")
        category.projects.forEach((project, index) => grid.appendChild(createCard(project, index)))

        container.appendChild(section)
    })

    // Sections are rendered by JS, so jump to the #category from the URL once they exist
    if (location.hash) {
        document.querySelector(location.hash)?.scrollIntoView()
    }
}

generatePortfolio()
