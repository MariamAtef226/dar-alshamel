// Function to add class when elements are in viewport
function handleScroll() {
    const targetElements = document.querySelectorAll('.transparent');
    if (!targetElements.length) return; // Exit if no target elements found
  
    targetElements.forEach(targetElement => {
      const bounding = targetElement.getBoundingClientRect();
  
      // Check if target element is in viewport
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      ) {
        // Add your class to the target element
        targetElement.classList.add('view-now');
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Call handleScroll once to check if any elements are already in viewport on page load
  handleScroll();
  