// FEED HIM EGGS message at top of screen
var feedHimEggsMessage = document.getElementById("feedHimEggsMessage");
feedHimEggsMessage.style.fontSize = "24px";
feedHimEggsMessage.style.color = "red";

// Image of egg man
var characterImage = document.createElement("img");
characterImage.src = "eggMan.png";

var characterContainer = document.getElementById("characterContainer");
characterContainer.appendChild(characterImage);

// Image of egg basket
var basketImage = document.createElement("img");
basketImage.src = "eggBasket.jpeg";

var basketContainer = document.getElementById("basketContainer");
basketContainer.appendChild(basketImage);

// Egg to be moved
var eggImage = null;
var isDragging = false;

// ...

// Mouse down event
basketContainer.addEventListener("mousedown", function (event) {
    // Create egg element
    var newEggImage = document.createElement("img");
    newEggImage.src = "egg.jpeg";
    newEggImage.className = "egg";
    newEggImage.style.left = event.clientX + "px";
    newEggImage.style.top = event.clientY + "px";
    document.body.appendChild(newEggImage);
    eggImage = newEggImage;
  
    // Prevent default drag behavior
    newEggImage.addEventListener("dragstart", function (event) {
      event.preventDefault();
    });
  
    // Set isDragging to true
    isDragging = true;
  });
  
  // Mouse move event
  window.addEventListener("mousemove", function (event) {
    if (isDragging && eggImage) {
        // Update the position of the dragged egg
        eggImage.style.left = event.clientX + "px";
        eggImage.style.top = event.clientY + "px";
        // Check for collision with egg man
        //var eggManBounds = eggMan.getBoundingClientRect();
    }
  });
  
// Mouse up event
window.addEventListener("mouseup", function (event) {
  
    // Set isDragging to false
    isDragging = false;
    var eggManBounds = characterImage.getBoundingClientRect();
    var eggBounds = eggImage.getBoundingClientRect();

    if (
        eggBounds.left < eggManBounds.right &&
        eggBounds.right > eggManBounds.left &&
        eggBounds.top < eggManBounds.bottom &&
        eggBounds.bottom > eggManBounds.top
      ) {
        // Remove the dragged egg when it reaches the egg man
        eggImage.remove();
        eggImage = null;
      }
    });
    