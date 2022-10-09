function showNotification({ top = 0, right = 0, html, className }) {
  const notification = document.createElement("div");
  notification.style.position = "absolute";
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;
  notification.innerText = html;
  if (className) notification.className = className;
  document.body.append(notification);
}

showNotification({
  top: 100,
  right: 100,
  html: "Hello!",
});
