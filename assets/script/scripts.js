function toTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
let designElement = document.getElementsByClassName("design")[0];
let developmentElement = document.getElementsByClassName("development")[0];
let programmingElement = document.getElementsByClassName("programming")[0];

document.getElementById('designOption').addEventListener("click", () => {
    document.getElementById('designOption').classList.add("active");
    document.getElementById('developmentOption').classList.remove("active");
    document.getElementById('programmingOption').classList.remove("active");

    document.getElementById('projects').appendChild(designElement);

    if (document.body.contains(developmentElement)) {
        document.getElementById('projects').removeChild(developmentElement);
    }

    if (document.body.contains(programmingElement)) {
        document.getElementById('projects').removeChild(programmingElement);
    }
});
document.getElementById('developmentOption').addEventListener("click", () => {
    document.getElementById('designOption').classList.remove("active");
    document.getElementById('developmentOption').classList.add("active");
    document.getElementById('programmingOption').classList.remove("active");

    if (document.body.contains(designElement)) {
        document.getElementById('projects').removeChild(designElement);
    }

    document.getElementById('projects').appendChild(developmentElement);

    if (document.body.contains(programmingElement)) {
        document.getElementById('projects').removeChild(programmingElement);
    }
});
document.getElementById('programmingOption').addEventListener("click", () => {
    document.getElementById('designOption').classList.remove("active");
    document.getElementById('developmentOption').classList.remove("active");
    document.getElementById('programmingOption').classList.add("active");

    if (document.body.contains(designElement)) {
        document.getElementById('projects').removeChild(designElement);
    }

    if (document.body.contains(developmentElement)) {
        document.getElementById('projects').removeChild(developmentElement);
    }

    document.getElementById('projects').appendChild(programmingElement);
});