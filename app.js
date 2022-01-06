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

    let page1Btn = document.getElementById("page-1-btn");
    page1Btn.addEventListener("click", async function(event) {
        event.preventDefault();
        await loadPage("./detailed-page-template.html");
        console.log("Page 1");
    }); // End-page1Btn listener

    let page2Btn = document.getElementById("page-2-btn");
    page2Btn.addEventListener("click", async function(event) {
        event.preventDefault();
        await loadPage("./detailed-page-template.html");
        console.log("Page 2");
    }); // End-page2Btn listener

    let page3Btn = document.getElementById("page-3-btn");
    page3Btn.addEventListener("click", async function(event) {
        event.preventDefault();
        await loadPage("./detailed-page-template.html");
        console.log("Page 3");
    }); // End-page3Btn listener

    let page4Btn = document.getElementById("page-4-btn");
    page4Btn.addEventListener("click", async function(event) {
        event.preventDefault();
        await loadPage("./detailed-page-template.html");
        console.log("Page 4");
    }); // End-page4Btn listener
}; // End-window.onload
