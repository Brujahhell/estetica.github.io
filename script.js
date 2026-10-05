```javascript
/* =========================================================
   BELLA VITA ESTÉTICA
   SCRIPT.JS
========================================================= */


// ================= MENU MOBILE =================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Fecha o menu quando clicar em um link

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ================= HEADER AO ROLAR =================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ================= FORMULÁRIO =================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const service = document.getElementById("service").value;

    const date = document.getElementById("date").value;

    const time = document.getElementById("time").value;

    const message = document.getElementById("message").value.trim();


    if (!name || !phone || !service || !date || !time) {

        alert("Por favor, preencha todos os campos obrigatórios.");

        return;

    }


    // Converte a data para formato brasileiro

    const dateObject = new Date(date + "T00:00:00");

    const formattedDate = dateObject.toLocaleDateString("pt-BR");


    // Número do WhatsApp da empresa

    // ALTERE ESTE NÚMERO PARA O NÚMERO REAL DO CLIENTE

    const whatsappNumber = "5527999999999";


    let whatsappMessage =
        `Olá! Gostaria de solicitar um agendamento na Bella Vita Estética.%0A%0A` +

        `*Nome:* ${name}%0A` +

        `*WhatsApp:* ${phone}%0A` +

        `*Tratamento:* ${service}%0A` +

        `*Data desejada:* ${formattedDate}%0A` +

        `*Horário desejado:* ${time}`;


    if (message) {

        whatsappMessage +=
            `%0A%0A*Observação:* ${message}`;

    }


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


// ================= DATA MÍNIMA =================

// Impede selecionar uma data anterior a hoje.

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


// ================= ANIMAÇÃO AO ENTRAR NA TELA =================

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(
        ".treatment-card, .feature, .testimonial-card, .gallery-item"
    )
    .forEach(element => {

        observer.observe(element);

    });
```
