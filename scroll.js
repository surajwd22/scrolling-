 document.addEventListener("DOMContentLoaded", function () {
      const container = document.querySelector(".category-section");
      const scrollButtons = document.querySelectorAll(".scroll-btn");

      scrollButtons.forEach(button => {
        button.addEventListener("click", function () {
          const direction = this.getAttribute("data-direction");
          const scrollAmount = direction === "left" ? -300 : 300;
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });

      const updateButtonVisibility = () => {
        const scrollLeftBtn = document.querySelector(".scroll-btn.left");
        const scrollRightBtn = document.querySelector(".scroll-btn.right");
        scrollLeftBtn.style.visibility = container.scrollLeft > 0 ? "visible" : "hidden";
        scrollRightBtn.style.visibility = container.scrollLeft + container.clientWidth < container.scrollWidth ? "visible" : "hidden";
      };

      container.addEventListener("scroll", updateButtonVisibility);

      // Initial visibility check
      updateButtonVisibility();
    });