// JavaScript for Sidebar Toggle (Optional for responsiveness)
const menuIcon = document.querySelector('.bx-menu');
const sidebar = document.querySelector('#sidebar');

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // Toggle icon to 'X' when sidebar is open
});

// Close the sidebar if a link is clicked (for better UX)
const sideMenuItems = document.querySelectorAll('.side-menu li a');
sideMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// JavaScript for notification click (simulated)
const notificationIcon = document.querySelector('.notification');

notificationIcon.addEventListener('click', () => {
    alert('You have clicked the notification icon!');
});