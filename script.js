// add an event listener for loading the page
document.addEventListener("DOMContentLoaded", () => {
    storeOriginalCoords();  // store the original area coords onload
    updateAllImageMaps();   // update all area coords onload too
    window.addEventListener("resize", updateAllImageMaps);  // make sure resizing triggers the update code
});

function updateAllImageMaps() {
    // get all images on the page with a usemap attribute
    document.querySelectorAll("img[usemap]").forEach(resizeImageMap);
}

function resizeImageMap(image) {
    if (!image.useMap) return; // Skip images without a usemap

    const origWidth = image.naturalWidth || image.width;
    const origHeight = image.naturalHeight || image.height;
    if (!origWidth || !origHeight) return; // Ensure we have valid dimensions

    const scaleX = image.clientWidth / origWidth;
    const scaleY = image.clientHeight / origHeight;

    const mapName = image.useMap.replace("#", ""); // Remove '#' from usemap
    const map = document.querySelector(`map[name="${mapName}"]`);
    if (!map) return; // Skip if no corresponding map found

    map.querySelectorAll("area").forEach(area => {
        if (!area.dataset.originalCoords) return;
        const originalCoords = area.dataset.originalCoords.split(',').map(Number);
        area.coords = originalCoords.map((value, index) =>
            Math.round(value * (index % 2 === 0 ? scaleX : scaleY))
        ).join(',');
    });
}

function storeOriginalCoords() {
    document.querySelectorAll("map area").forEach(area => {
        area.dataset.originalCoords = area.coords; // Store original coords
    });
}

