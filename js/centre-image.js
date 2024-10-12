document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('article img');
    
    images.forEach(image => {
        image.style.display = 'block';
        image.style.margin = '0 auto';
    });
});