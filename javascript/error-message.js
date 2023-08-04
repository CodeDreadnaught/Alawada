function displayErrorMessage(message) {
    const notificationBar = document.querySelector(".notification-bar"),
    notification = document.createElement("div"),
    notificationMessage = document.createTextNode(message);

    if(notificationBar.className.includes("alert")) {
        console.warn("Notification already being displayed.");
    } else {
        notificationBar.classList.add("alert", "text-align-c");
        notificationBar.appendChild(notification);

        setTimeout(()=> {
            notification.appendChild(notificationMessage);
        }, 100);

        setTimeout(()=> {
            notification.remove();
            notificationBar.classList.remove("alert", "text-align-c");
        }, 2500);
    }
}

export { displayErrorMessage };