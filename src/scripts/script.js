// Function to add class when elements are in viewport
var ctr = false;
function handleScroll() {
  const targetElements = document.querySelectorAll('.transparent, .counter-mode');

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

      if (targetElement.classList.contains("counter-mode") && !ctr){
        counter(7000,"c1",175);
        counter(1000,"c2",25);
        counter(200,"c3",5);
        ctr =true;
      }
      else{
        targetElement.classList.add('view-now');
      }

    }
  });
}

window.addEventListener('scroll', handleScroll);

function counter(target, id,inc) {
  const incrementAmount = inc; // Set the amount by which the number increases
  let currentNumber = 0;

  function updateCounter() {
    const counterElement = document.getElementById(id);
    if (currentNumber < target) {
      currentNumber += incrementAmount;
      counterElement.textContent = currentNumber;
    } else {
      clearInterval(intervalId); // Stop the interval once target number is reached
    }
  }
  const intervalId = setInterval(updateCounter, 20);
}




