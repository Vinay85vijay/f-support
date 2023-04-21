const BASE_URL = 'https://example-api.com';

// Function to fetch data from the API
async function fetchData(url) {
  const response = await fetch(`${BASE_URL}/${url}`);
  const data = await response.json();
  return data;
}

// Function to create a new item
async function createItem(url, newItem) {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });
  const data = await response.json();
  return data;
}

// Function to update an existing item
async function updateItem(url, updatedItem) {
  const response = await fetch(`${BASE_URL}/${url}/${updatedItem.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedItem),
  });
  const data = await response.json();
  return data;
}

// Function to delete an item
async function deleteItem(url, itemId) {
  const response = await fetch(`${BASE_URL}/${url}/${itemId}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export { fetchData, createItem, updateItem, deleteItem };
