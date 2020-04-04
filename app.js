// select DOM elements
const countryInput = document.querySelector("input");
const searchButton = document.querySelector("button");
const casesCard = document.querySelector(".cases-card");
const deathCard = document.querySelector(".death-card");
// newCases, active, critical, recovered, total;
let c;
searchButton.addEventListener("click", (e) => {
	// e.preventDefault;
	casesCard.style.visibility = "visible";
	const country = countryInput.value;
	// const country = "Kenya";
	fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
		method: "GET",
		headers: {
			"x-rapidapi-host": "covid-193.p.rapidapi.com",
			"x-rapidapi-key":
				"441614529bmsh8c807c34709f5d2p165d8bjsnc13e4abebbe3",
		},
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			const dataResponse = data.response[0].cases;
			casesCard.innerHTML = `					
                        <h2>Cases</h2>
                        <h3>New</h3>
                        <p>${dataResponse.new}</p>
						<h3>Active</h3>
						<p> ${dataResponse.active}</p>
						<h3>Critical</h3>
						<p>${dataResponse.critical}</p>
						<h3>Recovered</h3>
						<p>${dataResponse.recovered}</p>
						<h3><b>Total</b></h3>
						<p>${dataResponse.total}</p>
                    `;
			console.log(data.response[0].deaths);

			deathCard.innerHTML = `						
                       <h2>Deaths</h2>
						<h3>New</h3>
						<p >${data.response[0].deaths.new}</p>
						<h3><b>Total</b></h3>
						<p>${data.response[0].deaths.total}</p>`;

			return data;
		})
		.catch((err) => {
			console.log(err);
		});
});
