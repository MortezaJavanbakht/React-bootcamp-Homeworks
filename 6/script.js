const clearElem = targetElem => document.body.removeChild(targetElem)

const showNotification = option => {
    let {top = 0, right = 0, html, className} = option
    const divNotification = document.createElement('div')
    divNotification.style.position = 'absolute';
    divNotification.style.top = `${top}px`;
    divNotification.style.right = `${right}px`;
    divNotification.innerText = html;
    if(className) divNotification.className = className;
    document.body.append(divNotification)
    console.log(divNotification)
    setTimeout(() => document.body.removeChild(divNotification), 1500)
}

showNotification({top:100, right:200, html:"hello", className:"border"})