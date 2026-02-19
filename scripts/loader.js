document.addEventListener("DOMContentLoaded", function () {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (!footerPlaceholder) return;

    // Determine path to footer.html based on current location
    // If we are in 'posts/', we need to go up one level
    const isPostPage = window.location.pathname.includes("/posts/");
    const footerPath = isPostPage ? "../footer.html" : "footer.html";

    fetch(footerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer");
            }
            return response.text();
        })
        .then(html => {
            footerPlaceholder.innerHTML = html;

            // Re-initialize Lucide icons because new DOM elements were added
            if (window.lucide) {
                window.lucide.createIcons();
            }
        })
        .catch(error => {
            console.error("Error loading footer:", error);
        });
});
