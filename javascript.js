document.addEventListener("DOMContentLoaded", function () {
    console.log("Gallery script loaded successfully!");

    const galleryContainer = document.getElementById("galleryContainer");

    for (let i = 1; i <= 67; i++) {
        const img = document.createElement("img");
        img.src = `${i}.jpg`;  // Loads images directly from the root directory
        img.alt = `Modeling Shot ${i}`;
        img.classList.add("gallery-image");

        // Error handling in case an image is missing
        img.onerror = function () {
            console.warn(`Image ${i}.jpg not found.`);
            this.style.display = "none";  // Hides missing images instead of breaking the layout
        };

        // Click event for lightbox effect
        img.addEventListener("click", () => {
            openLightbox(img.src, img.alt);
        });

        galleryContainer.appendChild(img);
    }
});

// Lightbox functionality (click image to view full size)
function openLightbox(src, alt) {
    let lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    let lightboxImage = document.createElement("img");
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.appendChild(lightboxImage);

    let closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("lightbox-close");
    closeBtn.addEventListener("click", () => {
        document.body.removeChild(lightbox);
    });

    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
}
