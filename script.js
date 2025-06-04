const startD = document.querySelector("#startd");
const submitBtn = document.querySelector("#btnsub");
const sectionn = document.querySelector("#sec");

// const cardImg = document.querySelector("#img");
// const cardStars = document.querySelector(".stars");
// const cardTitle = document.querySelector("#title");
// const cardDate = document.querySelector("#date");
// const cardPara = document.querySelector("#para");
// const cardPropolis = document.querySelector(".x");
// const cardNectar = document.querySelector("#nectar");
// const cardPollen = document.querySelector("#pollen");
const main = document.querySelector("main");

function createCard(
	namee,
	description,
	nectar,
	pollen,
	propolis,
	image,
	stars,
	date,
	dateE,
	propo
) {
	const article = document.createElement("article");
	article.appendChild(sectionn);
	main.appendChild(sectionn);
	sectionn.appendChild(article);

	const div1 = document.createElement("div");
	article.appendChild(div1);

	const img = document.createElement("img");
	div1.appendChild(img);
	img.classList.add("imgres");

	const div2 = document.createElement("div");
	article.appendChild(div2);
	div2.classList.add("div2");

	const div2Starts = document.createElement("div");
	article.appendChild(div2Starts);
	div2Starts.classList.add("startscontent");
	div2.appendChild(div2Starts);

	for (let i = 0; i < stars; i++) {
		if (stars == 1) {
			const imgStars = document.createElement("img");
			imgStars.src = "./assets/stars.svg";
			imgStars.classList.add("stars");
			div2Starts.appendChild(imgStars);
			div2Starts.classList.add("startscontent1");
		}
		if (stars == 2) {
			const imgStars = document.createElement("img");
			imgStars.src = "./assets/stars.svg";
			imgStars.classList.add("stars");
			div2Starts.appendChild(imgStars);
		}
		if (stars == 3) {
			const imgStars = document.createElement("img");
			imgStars.src = "./assets/stars.svg";
			imgStars.classList.add("stars");
			div2Starts.appendChild(imgStars);
			div2Starts.classList.add("startscontent3");
		}
	}

	const title = document.createElement("h2");
	div2.appendChild(title);

	const div3 = document.createElement("div");
	div2.appendChild(div3);

	const div3d = document.createElement("div");
	div3.appendChild(div3d);

	const imgF = document.createElement("img");
	div3d.appendChild(imgF);
	imgF.src = "./assets/bee.svg";

	const spanFLo = document.createElement("span");
	div3d.appendChild(spanFLo);
	spanFLo.textContent = " Floraison ";
	spanFLo.classList.add("flo");

	const spanD = document.createElement("span");
	div3d.appendChild(spanD);
	spanD.classList.add("date");

	const spanA = document.createElement("span");
	div3d.appendChild(spanA);
	spanA.textContent = " - ";

	const spanE = document.createElement("span");
	div3d.appendChild(spanE);
	spanE.classList.add("date");

	const pPara = document.createElement("p");
	div2.appendChild(pPara);

	const divSPecs = document.createElement("div");
	div2.appendChild(divSPecs);
	divSPecs.classList.add("specs");

	const divSPecs1 = document.createElement("div");
	divSPecs.appendChild(divSPecs1);
	const spanPropo = document.createElement("span");
	divSPecs1.appendChild(spanPropo);

	if (propolis == 0) {
		const imgX = document.createElement("img");
		imgX.src = "./assets/X.svg";
		imgX.classList.add("x");
		divSPecs1.appendChild(imgX);
	}
	if (propolis >= 1) {
		const imgX = document.createElement("img");
		imgX.src = "./assets/yes.svg";
		imgX.classList.add("x");
		divSPecs1.appendChild(imgX);
	}

	const divSPecs2 = document.createElement("div");
	divSPecs.appendChild(divSPecs2);
	divSPecs2.style.width = "25%";
	const spanNect = document.createElement("span");
	divSPecs2.appendChild(spanNect);

	if (nectar == 0) {
		const imgXN = document.createElement("img");
		imgXN.src = "./assets/X.svg";
		imgXN.classList.add("x");
		divSPecs2.style.width = "7%";

		divSPecs2.appendChild(imgXN);
	}

	if (nectar == 1) {
		const progress1 = document.createElement("progress");
		progress1.max = 3;
		progress1.value = 1;
		progress1.classList.add("progress1");
		divSPecs2.appendChild(progress1);
	}
	if (nectar == 2) {
		const progress1 = document.createElement("progress");
		progress1.max = 3;
		progress1.value = 2;
		progress1.classList.add("progress2");
		divSPecs2.appendChild(progress1);
	}
	if (nectar == 3) {
		const progress1 = document.createElement("progress");
		progress1.max = 3;
		progress1.value = 3;
		progress1.classList.add("progress3");
		divSPecs2.appendChild(progress1);
	}

	const divSPecs3 = document.createElement("div");
	divSPecs.appendChild(divSPecs3);
	divSPecs3.style.width = "25%";
	const spanPoll = document.createElement("span");
	divSPecs3.appendChild(spanPoll);
	const imgPoll = document.createElement("img");
	divSPecs3.appendChild(imgPoll);

	if (pollen == 0) {
		const imgXN = document.createElement("img");
		imgXN.src = "./assets/X.svg";
		imgXN.classList.add("x");
		divSPecs3.style.width = "7%";

		divSPecs3.appendChild(imgXN);
	}
	if (pollen == 1) {
		const progress1 = document.createElement("progress");
		progress1.max = 3;
		progress1.value = 1;
		progress1.classList.add("progress1");
		divSPecs3.appendChild(progress1);
	}
	if (pollen == 2) {
		const progress1 = document.createElement("progress");
		progress1.max = 3;
		progress1.value = 2;
		progress1.classList.add("progress2");
		divSPecs3.appendChild(progress1);
	}
	if (pollen == 3) {
		const progress1 = document.createElement("progress");
		progress1.max = 3;
		progress1.value = 3;
		progress1.classList.add("progress3");
		divSPecs3.appendChild(progress1);
	}

	title.textContent = namee;
	img.src = image;
	spanNect.textContent = nectar;
	pPara.textContent = description;
	spanPoll.textContent = pollen;
	spanPropo.textContent = propolis;
	spanD.textContent = date;
	spanE.textContent = dateE;
}
submitBtn.addEventListener("click", async (e) => {
	let start = startD.value;
	sectionn.innerHTML = " ";
	e.preventDefault();
	const reponse = await fetch(
		`http://10.69.0.17:3002/v1/flowers?date=${start}`,
		{
			method: "GET",
		}
	);

	const data = await reponse.json();
	console.log(data);

	for (let i = 0; i < data.length; i++) {
		createCard(
			data[i].name,
			data[i].description,
			data[i].nectar,
			data[i].pollen,
			data[i].propolis,
			data[i].image,
			data[i].melliferous,
			data[i].startBloom,
			data[i].endBloom
		);
	}
});
