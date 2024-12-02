// Enlarge product card when hovering
function enlargeOnHover(element) {
    element.style.transition = "transform 0.3s ease";
    element.style.transform = "scale(1.2)";
  }
  
  function resetSize(element) {
    element.style.transform = "scale(1)";
  }
  
  
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseover', function() {
      enlargeOnHover(card); 
    });
  
    card.addEventListener('mouseout', function() {
      resetSize(card); 
    });
  });