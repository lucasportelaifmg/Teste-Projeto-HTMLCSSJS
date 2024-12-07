const menuItems = document.querySelectorAll('.menu li');
const messageBox = document.getElementById('messageBox');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#bbb';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '';
    });
    item.addEventListener('click', () => {
        const message = item.getAttribute('data-message');
        messageBox.textContent = message;
        messageBox.style.opacity = '1';
        setTimeout(() => {
            messageBox.style.opacity = '0';
        }, 3000);
    });
});