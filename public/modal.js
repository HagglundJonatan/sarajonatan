// Get the modal
var modal = document.getElementById("osa-modal");

// Get the button that opens the modal
var btn = document.getElementById("osa-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  console.log("onClick!")
  modal.style.display = "flex";
} 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

var body = document.getElementsByTagName("body");

modal.on('shown', function(){
  body.css('overflow', 'hidden');
}).on('hidden', function(){
  body.css('overflow', 'auto');
})