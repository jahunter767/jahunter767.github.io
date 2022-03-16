"use strict";

async function loadPage(page){
    let main = document.getElementById("main");
    main.innerHTML = await fetch(page)
        .then(res => {
            let modDate = res.headers.get("Last-Modified");
            document.getElementById("last-modified")
                .innerText = `Last Modified: ${modDate}`;
            return res.text();
        }).then(res => res);
} // End-loadPage

window.onload = async function () {
    await loadPage("./home.html");

    let homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", async function(event) {
        event.preventDefault();
        await loadPage("./home.html");
        console.log("Home");
    }); // End-homeBtn listener

    let projectsBtn = document.getElementById("projects-btn");
    projectsBtn.addEventListener("click", async function(event) {
        event.preventDefault();
        await loadPage("./projects-page.html");
        console.log("Projects Page");
    }); // End-projectsBtn listener
}; // End-window.onload
