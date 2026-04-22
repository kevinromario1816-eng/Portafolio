const btnWelcome = document.getElementById("btn-welcome");
const welcomeMessage = document.getElementById("welcome-msg");

btnWelcome.onclick = function() {
    if (welcomeMessage.style.display === "block") {
        welcomeMessage.style.display = "none";
        btnWelcome.textContent = "Saludar";
    } else {
        welcomeMessage.style.display = "block";
        btnWelcome.textContent = "Ocultar saludo";
    }
};



const btnAbout = document.getElementById("btn-toggle-about");
const paragraph = document.getElementById("about-text");
let isChanged = false;

btnAbout.onclick = function() {
    if (isChanged === false) {
        paragraph.textContent = "Me llamo Kevin. Estoy aprendiendo desarrollo web con HTML, CSS y JavaScript.";
        btnAbout.textContent = "Texto original";
        isChanged = true;
    } else {
        paragraph.textContent = "Soy estudiante de desarrollo web. Me interesa crear sitios funcionales y bien estructurados.";
        btnAbout.textContent = "Actualizar texto";
        isChanged = false;
    }
};



const btnContact = document.getElementById("btn-toggle-contact");
const contactForm = document.getElementById("contact-form");

btnContact.onclick = function() {
    if (contactForm.style.display === "none") {
        contactForm.style.display = "flex";
        btnContact.textContent = "Ocultar formulario";
    } else {
        contactForm.style.display = "none";
        btnContact.textContent = "Mostrar formulario";
    }
};
