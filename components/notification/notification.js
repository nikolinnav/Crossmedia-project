function showNotification({ title = "Notification", message = "This is a message.", onClick }) {
    // Create notification element
    const notification = document.createElement("div");
    notification.classList.add("notification");

    notification.innerHTML = `
        <div class="notificationIcon"></div>
        <div class="content">
            <div class="notificationTitle">${title}</div>
            <div class="notificationMessage">${message}</div>
        </div>
    `;

    // Append to body
    document.body.appendChild(notification);

    // Show the notification
    setTimeout(() => {
        notification.classList.add("show");
    }, 100);

    // Click event to trigger the provided function
    notification.addEventListener("click", () => {
        if (onClick) onClick();
        hideNotification(notification);
    });

    // Auto-hide after 5 seconds (optional)
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

function hideNotification(notification) {
    notification.classList.remove("show");
    setTimeout(() => {
        notification.remove();
    }, 500);
}
