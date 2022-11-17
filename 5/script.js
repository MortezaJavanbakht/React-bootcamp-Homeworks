const clear = targetId => {
    const targetElement = document.getElementById(targetId);
    targetElement.innerHTML = "";
}

clear('elem');