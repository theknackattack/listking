// ADD NEW ITEM TO END OF LIST
var ul = document.querySelector('ul');
var newItemEnd = document.createElement('li');
newItemEnd.textContent = 'cream';
ul.appendChild(newItemEnd);

// ADD NEW ITEM START OF LIST
var newItemStart = document.createElement('li');
newItemStart.textContent = 'kale';
ul.insertBefore(newItemStart, ul.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('li');
listItems.forEach(function(item) {
  item.classList.add('cool');
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var itemCount = listItems.length;
var span = document.createElement('span');
span.textContent = itemCount;
heading.appendChild(span);
