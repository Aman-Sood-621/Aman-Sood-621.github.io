// JavaScript for navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Display the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Update navigation button focus
    const buttons = document.querySelectorAll('#navbar button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    const activeButton = [...buttons].find(button => button.textContent.toLowerCase().includes(sectionId.replace('-', ' ')));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}