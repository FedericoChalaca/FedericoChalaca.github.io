document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("register-btn").addEventListener("click", register);
});

document.addEventListener("DOMContentLoaded", function () {
    const carouselImages = document.querySelectorAll(".carousel-image");
    const heroImage = document.querySelector(".hero-image");

    carouselImages.forEach(image => {
        image.addEventListener("click", function () {
            // Obtener la ruta de la imagen seleccionada
            let imageUrl = this.getAttribute("src");
            
            // Cambiar la imagen en el hero
            heroImage.style.backgroundImage = `url('${imageUrl}')`;
            heroImage.style.backgroundSize = "cover";
            heroImage.style.backgroundPosition = "center";
        });
    });
});

function register() {
    let username = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!username || !email || !password) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
        alert("El email ya está registrado.");
        return;
    }

    users[email] = { username, password };
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "contacto.html"; // Redirigir a otra página si es necesario
}
document.addEventListener("DOMContentLoaded", function () {
    let sendBtn = document.getElementById("send-btn");
    if (sendBtn) {
        sendBtn.addEventListener("click", sendMessage);
        console.log("Evento asignado correctamente al botón Enviar.");
    } else {
        console.error("No se encontró el botón Enviar.");
    }
});

function sendMessage() {
    console.log("Botón Enviar presionado");

    let nameField = document.getElementById("contact-name");
    let emailField = document.getElementById("contact-email");
    let messageField = document.getElementById("contact-message");

    console.log("Elemento Nombre:", nameField);
    console.log("Elemento Email:", emailField);
    console.log("Elemento Mensaje:", messageField);

    if (!nameField || !emailField || !messageField) {
        console.error("Uno o más elementos del formulario no se encontraron.");
        return;
    }

    let name = nameField.value.trim();
    let email = emailField.value.trim();
    let message = messageField.value.trim();

    if (!name || !email || !message) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push({ name, email, message });
    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Mensaje enviado correctamente.");
}
let currentIndex = 0;
    
function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const boxes = document.querySelectorAll('.image-box');
    const totalItems = boxes.length;
    const visibleItems = 3; // Cantidad de cuadros visibles a la vez

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalItems - visibleItems;
    } else if (currentIndex > totalItems - visibleItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * (boxes[0].offsetWidth + 10);
    track.style.transform = `translateX(${offset}px)`;
}