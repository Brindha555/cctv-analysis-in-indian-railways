function showDescription(cameraName) {
    document.getElementById('description-text').innerHTML = "Description for " + cameraName;
    document.getElementById('description-popup').style.display = 'block';
}

function closeDescription() {
    document.getElementById('description-popup').style.display = 'none';
}
