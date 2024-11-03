// Get references to HTML elements
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const clearListButton = document.getElementById("clearListButton");
const shoppingList = document.getElementById("shoppingList");

// Function to add a new item
function addItem() {
  const itemName = itemInput.value.trim();
  if (itemName) {
    const listItem = document.createElement("li");
    listItem.textContent = itemName;
    listItem.classList.add("list-item");

    // Mark item as purchased when clicked
    listItem.addEventListener("click", () => {
      listItem.classList.toggle("purchased");
    });

    shoppingList.appendChild(listItem);
    itemInput.value = ""; // Clear input field
  }
}

// Add item when pressing Enter key
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

// Add item when clicking the "Add Item" button
addItemButton.addEventListener("click", addItem);

// Function to clear the list
clearListButton.addEventListener("click", () => {
  shoppingList.innerHTML = ""; // Remove all list items
});
