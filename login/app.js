function toggleForm() {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
    const switchButton = document.querySelector('.switch-button');
    if (container.classList.contains('active')) {
        switchButton.textContent = 'Switch to Login';
    } else {
        switchButton.textContent = 'Switch to Signup';
    }
}
