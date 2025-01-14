 document.addEventListener("DOMContentLoaded", function () {
    const scrollableArea = document.getElementById("scrollable-area-4");
    const scrollLeftBtn = document.getElementById("scroll-left-btn-4");
    const scrollRightBtn = document.getElementById("scroll-right-btn-4");

    scrollLeftBtn.addEventListener("click", function () {
      scrollableArea.scrollBy({ left: -300, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", function () {
      scrollableArea.scrollBy({ left: 300, behavior: "smooth" });
    });

    const updateButtonVisibility = () => {
      scrollLeftBtn.style.visibility = scrollableArea.scrollLeft > 0 ? "visible" : "hidden";
      scrollRightBtn.style.visibility =
        scrollableArea.scrollLeft + scrollableArea.clientWidth < scrollableArea.scrollWidth
          ? "visible"
          : "hidden";
    };

    scrollableArea.addEventListener("scroll", updateButtonVisibility);
    updateButtonVisibility();
  });