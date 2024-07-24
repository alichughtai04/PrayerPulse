const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



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



const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".tabs-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabs.forEach(tab => tab.classList.remove("active"));

        tab.classList.add("active");

        contents.forEach(c => c.classList.remove("active"));
        contents[index].classList.add("active");
    });
});

tabs[0].click();

