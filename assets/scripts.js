const sites = [
  {
    "name": "GettingToKnowEachOtherTeams",
    "url": "https://orange-cliff-0f3af1010.2.azurestaticapps.net",
    "date": "2023-02-06",
    "githuburl": "https://github.com/Scrumdiddliumptious/GettingToKnowEachOtherTeams"
  }
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

$(document).on('keypress', function (e) {
    if (e.which === 46) {
        window.open('https://github.dev/Scrumdiddliumptious/GettingToKnowEachOtherTeams');
    }
});