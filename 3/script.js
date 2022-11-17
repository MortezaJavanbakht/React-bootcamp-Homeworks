const ulElement = document.createElement('ul');
document.body.append(ulElement);
while (true) {
    const inputString = prompt("Please enter list item: ");
    if (!inputString) break;
    const liElement = document.createElement('li');
    liElement.innerText = inputString;
    ulElement.append(liElement);
}