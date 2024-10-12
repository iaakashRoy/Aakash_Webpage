// Copy code to clipboard
document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-button');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const code = button.nextElementSibling.innerText;
            navigator.clipboard.writeText(code).then(() => {
                alert('Code copied to clipboard!');
            });
        });
    });
});