var newNumber = document.getElementById("button");
var displayNumber = document.getElementById("displayNumber");

newNumber.addEventListener('click', function(evt) {
  // console.log( Math.floor(Math.random() * 100000));
  displayNumber.innerHTML = Math.floor(Math.random() * 100000);
});

if(newNumber.click) {
  
}
