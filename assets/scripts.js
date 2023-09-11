const sites = [
  {
    "name": "GettingToKnowEachOtherTeams",
    "url": "https://orange-cliff-0f3af1010.2.azurestaticapps.net",
    "date": "2023-02-06",
    "githuburl": "https://github.com/Scrumdiddliumptious/GettingToKnowEachOtherTeams"
  },
  {
    "name": "GettingToKnowEachOtherTeams-2",
    "url": "https://polite-glacier-0ddda8210.2.azurestaticapps.net",
    "date": "2023-02-15",
    "githuburl": "https://github.com/Scrumdiddliumptious/GettingToKnowEachOtherTeams"
  }
]
const team = [
  {
    "name": "Koldoff, Collin",
    "url": "https://gentle-dune-08ef7f410.2.azurestaticapps.net",
    "githuburl": "https://github.com/collink2451"
  },
  {
    "name": "Leiteritz, Ryan",
    "url": "https://orange-sand-0fa6abe10.2.azurestaticapps.net/",
    "githuburl": "https://github.com/rleiteritz"
  },
  {
    "name": "Piwoni, Justina",
    "url": "https://red-bush-0fa21f910.2.azurestaticapps.net",
    "githuburl": "https://github.com/jpiwoni"
  },
  {
    "name": "Groppe, Katherine",
    "url": "https://ambitious-wave-0af3bdf10.2.azurestaticapps.net",
    "githuburl": "https://github.com/kgroppe"
  },
]

async function createSites() {
    outputStr = "";
    sites.forEach((element, index) => {
        outputStr += "<tr>";
        outputStr += `<td>${index + 1}</td>`;
        outputStr += `<td>${element.name}</td>`;
        outputStr += `<td><a href="${element.url}" target="_blank">${element.url}</a></td>`;
        outputStr += `<td>${element.date}</td>`;
        outputStr += `<td>
			<a class="btn btn-outline-light" href="${element.url}" target="_blank"><i class="fa-solid fa-eye"></i></a>
			<a class="btn btn-outline-light" href="${element.githuburl}" target="_blank"><i class="fa-brands fa-github"></i></a>
			</td>`;
        outputStr += "</tr>";
    });
    $("#sites").html(outputStr);
}
createSites();

async function createTeam() {
    outputStr = "";
    team.forEach((element, index) => {
        outputStr += "<tr>";
        outputStr += `<td>${element.name}</td>`;
        outputStr += `<td><a href="${element.url}" target="_blank">${element.url}</a></td>`;
        outputStr += `<td>
			<a class="btn btn-outline-light" href="${element.url}" target="_blank"><i class="fa-solid fa-eye"></i></a>
			<a class="btn btn-outline-light" href="${element.githuburl}" target="_blank"><i class="fa-brands fa-github"></i></a>
			</td>`;
        outputStr += "</tr>";
    });
    $("#team").html(outputStr);
}
createTeam();


$(document).on('keypress', function (e) {
    if (e.which === 46) {
        window.open('https://github.dev/Scrumdiddliumptious/GettingToKnowEachOtherTeams');
    }
});
