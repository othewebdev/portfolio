// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.height = "80vh";
    modalImg.style.width = "80vw";
    modalImg.style.objectFit = "contain";
    captionText.innerHTML = this.alt;
}
img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.height = "80vh";
    modalImg.style.width = "80vw";
    modalImg.style.objectFit = "contain";
    captionText.innerHTML = this.alt;
}
img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.height = "80vh";
    modalImg.style.width = "80vw";
    modalImg.style.objectFit = "contain";
    captionText.innerHTML = this.alt;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}