
const links = [
    "jewellery-creator",
]

const list = document.getElementById("linkList")

links.forEach(name => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `projects/${name}/`;
    a.textContent = name;
    li.appendChild(a);
    list.appendChild(li);
})
