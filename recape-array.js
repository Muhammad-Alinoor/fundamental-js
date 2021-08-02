var items = ["bottle", "Water", "Pen", "Pencil", "Router"];
console.log(items);
var itemsArraySize = items.length;
console.log(("Array size of items ="), itemsArraySize);
// how to know index number 
var indexOfLastItem = items.indexOf("Router");
console.log(("Index number of last item of items array"), indexOfLastItem)
// which element is in the first index number 
var firstIndexElementOfItemsArray = items[1];
console.log(("First element of index 1 in items array ="), firstIndexElementOfItemsArray);
// if any item is unavaile in an array the index will be follown
var unavaileArrayElementsIndex = items.indexOf("Keyboard");
console.log(("Unavalable Array elements index number ="), unavaileArrayElementsIndex);
// change Index content
console.log("Changed value of Index")
items[4] = "Glass";
console.log(items);
// Add new element to the array items 
console.log("new item added as the last element");
items.push("Soda");
console.log(items);
// remove last two element of the array index 
items.pop();
var keepLast = items.pop(); // last element keep in keepLast house
console.log("After remove last two item");
console.log(items);
console.log("stored last item");
console.log(keepLast);
// now remove the first element of the array 
console.log("After remove first item of the array");
console.log(items);
// store the element to firstItem house
console.log(" First item live now in firstItems house");
var firstItem = items.shift();
console.log(firstItem);