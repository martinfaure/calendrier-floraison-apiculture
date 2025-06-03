const startD = document.querySelector("#startd");
const endD = document.querySelector("#endd");
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

function createCard(namee, description, nectar, pollen, propolis, image) {
	const article = document.createElement("article");
	article.appendChild(sectionn);
	main.appendChild(sectionn);
	main.appendChild(article);

	const div1 = document.createElement("div");
	article.appendChild(div1);

	const img = document.createElement("img");
	div1.appendChild(img);

	const div2 = document.createElement("div");
	article.appendChild(div2);
	div2.classList.add("div2");

	const title = document.createElement("h2");
	div2.appendChild(title);

	const div3 = document.createElement("div");
	div2.appendChild(div3);

	const imgS = document.createElement("img");
	div3.appendChild(imgS);
	imgS.classList.add("stars");

	const spanD = document.createElement("span");
	div3.appendChild(spanD);
	spanD.classList.add("date");

	const pPara = document.createElement("p");
	div2.appendChild(pPara);

	const divSPecs = document.createElement("div");
	div2.appendChild(divSPecs);
	divSPecs.classList.add("specs");

	const divSPecs1 = document.createElement("div");
	divSPecs.appendChild(divSPecs1);
	const spanPropo = document.createElement("span");
	divSPecs1.appendChild(spanPropo);
	const imgX = document.createElement("img");
	divSPecs1.appendChild(imgX);
	imgX.classList.add("x");

	const divSPecs2 = document.createElement("div");
	divSPecs.appendChild(divSPecs2);
	const spanNect = document.createElement("span");
	divSPecs2.appendChild(spanNect);
	const imgNect = document.createElement("img");
	divSPecs2.appendChild(imgNect);

	const divSPecs3 = document.createElement("div");
	divSPecs.appendChild(divSPecs3);
	const spanPoll = document.createElement("span");
	divSPecs3.appendChild(spanPoll);
	const imgPoll = document.createElement("img");
	divSPecs3.appendChild(imgPoll);

	title.textContent = namee;
	img.src = image;
	spanNect.textContent = nectar;
	pPara.textContent = description;
	spanPoll.textContent = pollen;
	spanPropo.textContent = propolis;
}
submitBtn.addEventListener("click", async (e) => {
	sectionn.innerHTML = " ";
	e.preventDefault();
	const reponse = await fetch("http://10.69.0.17:3002/v1/flowers", {
		method: "GET",
	});

	const data = await reponse.json();
	console.log(data);

	for (let i = 0; i < data.length; i++) {
		createCard(
			data[i].name,
			data[i].image,
			data[i].nectar,
			data[i].description,
			data[i].pollen,
			data[i].propolis
		);
	}
});
