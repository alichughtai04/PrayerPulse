
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[action="/subscribe"]');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Simulate form submission success (you can replace this with actual form submission logic)
        setTimeout(() => {
            modal.style.display = 'block';
        }, 400); // Delay for demo purposes
        
        // Clear the form
        form.reset();
    });
    
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});