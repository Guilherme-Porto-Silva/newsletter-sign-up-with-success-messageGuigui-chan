const sections = Array.from(document.querySelectorAll("section"));    
    
    const formConst = sections[0].querySelector("form");

    const inputConst = formConst.querySelector("input");

    const errorDisplayer = sections[0].querySelector("b");

    const emailDisplayer = sections[1].querySelector("p b");

    let hasAlreadyErrored = false;

function validation() {

    const email = inputConst.value.trim();// input's core

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// Regular Expression (RegExp) used to validate an email address

if (!emailPattern.test(email)) return email;

    inputConst.classList.add("error");

    errorDisplayer.textContent = "Valid email required.";

    hasAlreadyErrored = true;

    return null;

}

function errorCleaner() {

    hasAlreadyErrored = false;

    inputConst.classList.remove("error");

    errorDisplayer.textContent = "";
}

function currentChanger() {

        sections.forEach(section => {

            section.classList.toggle("current");
        });
}

function subscribe(event) {

    event.preventDefault();

    const email = validation();

    if(email == null) return null;

        if(hasAlreadyErrored) errorCleaner();

        emailDisplayer.textContent = email;

        currentChanger();

        return email;
}

 formConst.addEventListener("submit", subscribe);