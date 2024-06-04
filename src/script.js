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
	if (
		navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {
		headerHeight = 210;
	} else {
        headerHeight = 70;
	}
	const elementPosition = element.offsetTop - headerHeight;
	window.scrollTo({
		top: elementPosition,
		behavior: "smooth", // Para animar o scroll
	});
}

// Adiciona um event listener para os links de navegação
document.addEventListener("DOMContentLoaded", () => {
	const links = document.querySelectorAll(".menu-link");

    for (const link of links) {
        link.addEventListener("click", function (event) {
			event.preventDefault(); // Evita o comportamento padrão do link
			const targetId = this.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);
			scrollWithOffset(targetElement);
		});
    }
});

document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.getElementById("menuToggle");
	const menu = document.getElementById("menu");
	const icons = document.querySelectorAll(".icon");

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
});

document.addEventListener("DOMContentLoaded", () => {
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
});

function topFunction() {
	document.body.scrollTop = 0; // Para navegadores da web
	document.documentElement.scrollTop = 0; // Para navegadores móveis
}

// Mostrar o botão quando o usuário rolar para baixo 20 pixels da parte superior da página
window.onscroll = () => {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("btnVoltarAoTopo").style.display = "block";
	} else {
		document.getElementById("btnVoltarAoTopo").style.display = "none";
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const toggleHeadings = document.querySelectorAll(".toggle-heading");
	const contents = document.querySelectorAll(".content");
	const dropdownIcons = document.querySelectorAll(".dropdown-icon");

	toggleHeadings.forEach((toggleHeading, index) => {
		toggleHeading.addEventListener("click", () => {
			const content = contents[index];
			const dropdownIcon = dropdownIcons[index];
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
		});
	});
});

async function fetchData(ghLogin) {
	const response = await fetch(
		`https://lengthylyova.pythonanywhere.com/api/gh-contrib-graph/fetch-data/?githubLogin=${ghLogin}`,
		{ method: "GET" },
	);
	const data = await response.json();
	return data.data.user;
}

function init_table() {
	const table = document.createElement("table");
	table.className = "ghCalendarTable";
	const thead = table.createTHead();
	const tbody = table.createTBody();
	const row = thead.insertRow();
	cell = row.insertCell();
	cell.style.width = "28px";
	for (let i = 0; i < 7; i++) {
		const row = tbody.insertRow();
		const cell = row.insertCell();
		switch (i) {
			case 1:
				cell.innerHTML = '<span class="ghCalendarLabel">Mon</span>';
				break;
			case 3:
				cell.innerHTML = '<span class="ghCalendarLabel">Wed</span>';
				break;
			case 5:
				cell.innerHTML = '<span class="ghCalendarLabel">Fri</span>';
				break;
		}
	}
	return [table, thead, tbody];
}

function addMonths(thead, months) {
	for (let i = 0; i < months.length; i++) {
		const total_weeks = months[i].totalWeeks;
		if (total_weeks >= 2) {
			const cell = thead.rows[0].insertCell();
			const label = document.createElement("span");
			label.textContent = months[i].name;
			label.className = "ghCalendarLabel";
			cell.appendChild(label);
			cell.colSpan = months[i].totalWeeks;
		}
	}
}

function addWeeks(tbody, weeks, colors) {
	for (let i = 0; i < weeks.length; i++) {
		const days = weeks[i].contributionDays;
		for (let j = 0; j < days.length; j++) {
			const day = days[j];
			const data = document.createElement("span");
			date = new Date(day.date);
			data.textContent = `${
				day.contributionCount
			} contributions on ${date.toDateString()}`;
			const cell = tbody.rows[day.weekday].insertCell();
			cell.appendChild(data);
			cell.className = "ghCalendarDayCell";
			cell.dataset.date = day.date;
			cell.dataset.count = day.contributionCount;
			cell.dataset.level = day.contributionLevel;
		}
	}
}

function init_card() {
	const card = document.createElement("div");
	card.className = "ghCalendarCard";
	return card;
}

function init_card_footer() {
	const footer = document.createElement("div");
	const link = document.createElement("a");
	const colors = document.createElement("div");
	footer.className = "ghCalendarCardFooter";
	link.className = "ghCalendarCardFooterLink";
	link.innerHTML = `<a href="https://github.com/lengthylyova/gh-contrib-graph">Module source</a>`;
	colors.className = "ghCalendarCardFooterColors";
	const less = document.createElement("span");
	less.textContent = "Less";
	const more = document.createElement("span");
	more.textContent = "More";
	colors.appendChild(less);
	const levels = [
		"NONE",
		"FIRST_QUARTILE",
		"SECOND_QUARTILE",
		"THIRD_QUARTILE",
		"FOURTH_QUARTILE",
	];
	for (let i = 0; i < 5; i++) {
		const cell = document.createElement("div");
		cell.className = "ghCalendarDayCell";
		cell.dataset.level = levels[i];
		colors.appendChild(cell);
	}
	colors.appendChild(more);
	footer.appendChild(link);
	footer.appendChild(colors);
	return footer;
}

function init_canvas() {
	const canvas = document.createElement("div");
	canvas.className = "ghCalendarCanvas";
	return canvas;
}

function init_header(total_contribs, ghLogin, avatarUrl) {
	const header = document.createElement("div");
	const total = document.createElement("span");
	const profile = document.createElement("div");
	profile.innerHTML = `<a href="https://github.com/${ghLogin}" target="_blank">${ghLogin}</a><img src="${avatarUrl}">`;
	header.className = "ghCalendarHeader";
	total.textContent = `${total_contribs} contributions in the last year`;
	header.appendChild(total);
	header.appendChild(profile);
	return header;
}

async function main() {
	const container = document.getElementById("gh");
	const ghLogin = container.dataset.login;
	const data = await fetchData(ghLogin);
	const calendar = data.contributionsCollection.contributionCalendar;
	const [table, thead, tbody] = init_table();
	const card = init_card();
	const canvas = init_canvas();
	const header = init_header(
		calendar.totalContributions,
		ghLogin,
		data.avatarUrl,
	);
	const footer = init_card_footer();

	addWeeks(tbody, calendar.weeks, calendar.colors);
	addMonths(thead, calendar.months);
	canvas.appendChild(table);
	canvas.appendChild(footer);
	card.appendChild(canvas);
	container.appendChild(header);
	container.appendChild(card);
}

main();
