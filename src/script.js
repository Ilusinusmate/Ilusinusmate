
function socialMedia(name) {
    const id = name;
    if (id === "instagram") {
        window.open("https://www.instagram.com/joaogabrielsalvador/");
    } else if (id === "linkedin") {
        window.open("https://br.linkedin.com/in/joao-gabriel-salvador-paiva-805283286");
    } else if (id === "whatsapp") {
        window.open("https://wa.me/5583988636734");
    } else if (id === "github") {
        window.open("https://github.com/Ilusinusmate");
    }
}

function abrir(link) {
    window.open(link);
}

function scrollWithOffset(element) {
    const headerHeight = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)
        ? 210
        : 70;
    const elementPosition = element.offsetTop - headerHeight;
    window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
    });
}

// Adiciona um event listener para os links de navegação
document.addEventListener("DOMContentLoaded", (() => {
    let alreadyLoaded = false;
    return function () {
        if (alreadyLoaded) return;
        alreadyLoaded = true;

        const links = document.querySelectorAll(".menu-link");
        for (const link of links) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    scrollWithOffset(targetElement);
                }
            });
        }
    };
})());

document.addEventListener("DOMContentLoaded", (() => {
    let alreadyLoaded = false;
    return function () {
        if (alreadyLoaded) return;
        alreadyLoaded = true;

        const menuToggle = document.getElementById("menuToggle");
        const menu = document.getElementById("menu");
        const icons = document.querySelectorAll(".icon");

        if (menuToggle && menu) {
            menuToggle.addEventListener("click", (event) => {
                menu.classList.toggle("active");

                if (menu.classList.contains("active")) {
                    setTimeout(() => {
                        for (const icon of icons) {
                            icon.style.opacity = "1";
                        }
                    }, 50);
                } else {
                    for (const icon of icons) {
                        icon.style.opacity = "0";
                    }
                }
            });
        }
    };
})());

document.addEventListener("DOMContentLoaded", (() => {
    let alreadyLoaded = false;
    return function () {
        if (alreadyLoaded) return;
        alreadyLoaded = true;

        function checkVisibility(entries, observer) {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("triggered");
                    observer.unobserve(entry.target);
                }
            }
        }
        const observer = new IntersectionObserver(checkVisibility);

        const boxes = document.querySelectorAll(".sec1");
        for (const box of boxes) {
            observer.observe(box);
        }

        const myCertificates = document.querySelectorAll(".myCertificates");
        for (const certificate of myCertificates) {
            observer.observe(certificate);
        }

        const myCompletedProjects = document.querySelectorAll(".myCompletedProjects");
        for (const project of myCompletedProjects) {
            observer.observe(project);
        }

        const myOnGoingProjects = document.querySelectorAll(".myOnGoingProjects");
        for (const project of myOnGoingProjects) {
            observer.observe(project);
        }
    };
})());

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Mostrar o botão quando o usuário rolar para baixo 20 pixels da parte superior da página
window.onscroll = (() => {
    let isScrolling = false;

    return () => {
        if (!isScrolling) {
            isScrolling = true;
            setTimeout(() => {
                scrollFunction();
                isScrolling = false;
            }, 100);
        }
    };
})();

function scrollFunction() {
    const btnVoltarAoTopo = document.getElementById("btnVoltarAoTopo");
    if (!btnVoltarAoTopo) return;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnVoltarAoTopo.style.display = "block";
    } else {
        btnVoltarAoTopo.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", (() => {
    let alreadyLoaded = false;
    return function () {
        if (alreadyLoaded) return;
        alreadyLoaded = true;

        const toggleHeadings = document.querySelectorAll(".toggle-heading");
        const contents = document.querySelectorAll(".content");
        const dropdownIcons = document.querySelectorAll(".dropdown-icon");

        toggleHeadings.forEach((toggleHeading, index) => {
            toggleHeading.addEventListener("click", () => {
                const content = contents[index];
                const dropdownIcon = dropdownIcons[index];
                if (content && dropdownIcon) {
                    const computedStyle = window.getComputedStyle(content);
                    if (computedStyle.getPropertyValue("display") === "none") {
                        content.style.display = "block";
                        dropdownIcon.setAttribute("src", "src/img/updropdown.png");
                        dropdownIcon.style.width = "20px";
                        dropdownIcon.style.transform = "translateX(16px)";
                        dropdownIcon.style.marginRight = "30px";
                    } else {
                        content.style.display = "none";
                        dropdownIcon.setAttribute("src", "src/img/dropdown.png");
                        dropdownIcon.style.width = "50px";
                        dropdownIcon.style.marginRight = "0px";
                        dropdownIcon.style.transform = "translateX(0px)";
                    }
                }
            });
        });
    };
})());
