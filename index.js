const totalCases = document.getElementById('totalCases');
const totalDeaths = document.getElementById('totalDeaths');
const totalVacinated = document.getElementById('totalVacinated');
const totalPartialVacinated = document.getElementById('totalPartialVacinated');

async function showData() {
  const response_cases = await fetch('https://covid-api.mmediagroup.fr/v1/cases?country=India');
  const response_vaccines = await fetch('https://covid-api.mmediagroup.fr/v1/vaccines?country=India');
  const data_cases = await response_cases.json();
  const data_vaccines = await response_vaccines.json();

  totalCases.innerText = data_cases.All.confirmed;
  totalDeaths.innerText = data_cases.All.deaths;
  totalVacinated.innerText = data_vaccines.All.people_vaccinated;
  totalPartialVacinated.innerText = data_vaccines.All.people_partially_vaccinated;

}

showData();