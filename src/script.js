// function darkLight() {
    document.addEventListener("DOMContentLoaded", function () {
        // Obter referência para o botão e o elemento alvo
        var toggleButton = document.getElementById("toggleButton");
        const targetElement = document.getElementById("bodyCg");



        // Adicionar um ouvinte de evento ao botão
        toggleButton.addEventListener("click", function () {
            function black() {
                targetElement.classList.remove("bg-gray-800");
                targetElement.classList.add("bg-white");
                toggleButton.textContent = "Escuro";
                toggleButton.classList.add("bg-white");
                toggleButton.classList.add("bg-gray-800");
                toggleButton.classList.add("text-white");

            }

            function light() {
                targetElement.classList.remove("bg-white");
                targetElement.classList.add("bg-gray-800");
                toggleButton.textContent = "Claro";
                toggleButton.classList.remove("bg-gray-800");
                toggleButton.classList.remove("text-white");
                toggleButton.classList.add("bg-white");

            }
            // Alternar entre as classes e o texto do botão
            if (targetElement.classList.contains("bg-white")) {
                light();
            } else {
                black();
            }
        });
    });

//}

//darkLight();


