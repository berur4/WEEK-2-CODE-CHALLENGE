// Get references to HTML elements
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const clearListButton = document.getElementById("clearListButton");
const shoppingList = document.getElementById("shoppingList");

// Array to store shopping list items
let itemsArray = [];

// Function to display items from the array
function displayItems() {
  shoppingList.innerHTML = ""; // Clear the current list
  itemsArray.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.name;
    listItem.classList.add("list-item");

    // Check if the item has been marked as purchased
    if (item.purchased) {
      listItem.classList.add("purchased");
    }

    // Toggle the purchased status on single click
    listItem.addEventListener("click", () => {
      item.purchased = !item.purchased;  // Update purchased status
      listItem.classList.toggle("purchased");  // Update appearance
    });

    // Allow editing the item name on double-click
    listItem.addEventListener("dblclick", () => {
      const newItemName = prompt("Edit item:", item.name); // Prompt for new name
      if (newItemName) { // Check if name is provided
        item.name = newItemName.trim();  // Update item name in the array
        displayItems();  // Refresh display to reflect changes
      }
    });

    // Append the item to the list
    shoppingList.appendChild(listItem);
  });
}

// Function to add a new item to the list
function addItem() {
  const itemName = itemInput.value.trim(); // Get and trim the input value
  if (itemName) { // Check if input is not empty
    const newItem = { name: itemName, purchased: false }; // Create a new item object
    itemsArray.push(newItem);  // Add to array
    displayItems();  // Refresh display
    itemInput.value = "";  // Clear input field
  }
}

// Add item when pressing the Enter key
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

// Add item when clicking the "Add Item" button
addItemButton.addEventListener("click", addItem);

// Clear the list when the "Clear List" button is clicked
clearListButton.addEventListener("click", () => {
  itemsArray = [];  // Reset the array
  displayItems();  // Refresh displayed list
});

// Initial display of items on page load
displayItems();
