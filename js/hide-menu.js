document.addEventListener("DOMContentLoaded", function () {
    function toggleBottomMenu() {
        let bottomMenu = document.querySelector(".whatever");

        if (window.innerWidth > 640) {
            // Hide menu on desktops
            bottomMenu.style.display = "none";
        } else {
            // Show menu on mobile
            bottomMenu.style.display = "block";
        }
    }

    // Run on page load
    toggleBottomMenu();

    // Run when window resizes
    window.addEventListener("resize", toggleBottomMenu);
});
