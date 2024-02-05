import { useEffect, useState } from "react";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Distinguish from "./components/Distinguish";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Stats from "./components/Stats";

export default function App() {
  let [ctr, setCtr] = useState(false);

  // Function to add class when elements are in viewport
  function handleScroll() {
    scrollFunction();
    const targetElements = document.querySelectorAll(
      ".transparent, .counter-mode"
    );

    if (!targetElements.length) return; // Exit if no target elements found

    targetElements.forEach((targetElement) => {
      const bounding = targetElement.getBoundingClientRect();

      // Check if target element is in viewport
      if (
        bounding.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.bottom >= 0 &&
        bounding.left <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.right >= 0
      ) {
        // Add your class to the target element

        if (targetElement.classList.contains("counter-mode") && !ctr) {
          setCtr(true);
        } else {
          targetElement.classList.add("view-now");
        }
      }
    });
  }

  function counter(target, id, inc) {
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

  function scrollFunction() {
    let mybutton = document.getElementById("goToTop");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [ctr]);

  useEffect(() => {
    if (ctr) {
      counter(7000, "c1", 175);
      counter(1000, "c2", 25);
      counter(200, "c3", 5);
    }
  }, [ctr]);

  return (
    <>
      <NavBar />
      <Landing />
      <About />
      <Services />
      <Stats />
      <Clients />
      <Distinguish />
      <Contact />
      <Footer />
    </>
  );
}
