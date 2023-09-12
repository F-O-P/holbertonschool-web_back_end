export default function groceriesList() {
  const groceries = new Map();

  groceries.set('apples', 10);
  groceries.set('tomatoes', 10);
  groceries.set('pasta', 1);
  groceries.set('rice', 1);
  groceries.set('banana', 5);

  return groceries;
}
