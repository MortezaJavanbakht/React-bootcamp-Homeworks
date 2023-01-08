const url = "https://reqres.in/api/users?page=";
const allData = [];

for (let i = 1; i <= 2; i++) {
  $.getJSON(url + i, function (result) {
    render(result.data);
  });
}

function render(allData) {
  $.map(allData, (person) => {
    const divElement = document.createElement("div");
    divElement.className = "card";
    const avatarImg = document.createElement("img");
    avatarImg.setAttribute("src", person.avatar);
    divElement.append(avatarImg);
    const specDiv = document.createElement("div");
    specDiv.className = "spec";
    specDiv.innerHTML = `<p class='firstname'>${person.first_name}</p>
        <p class='lastname'>${person.last_name}</p>
        <p class='email'>${person.email}</p>`;
    divElement.append(specDiv);
    $("#mainContent").append(divElement);
  });
}
