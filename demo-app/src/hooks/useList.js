import { useState } from 'react';

export const useList = (initialItems) => {

  const [ items, setItems ] = useState([ ...initialItems ]);

  const addItem = newItem => {
    setItems([
      ...items,
      {
        ...newItem,
        id: Math.max(...items.map(c => c.id), 0) + 1,
      },
    ]);
  };

  const saveItem = item => {
    const itemIndex = items.findIndex(c => c.id === item.id);
    const newItems = [...items];
    newItems[itemIndex] = item;
    setItems(newItems);
  };

  const deleteItem = itemId => {
    setItems(items.filter(c => c.id !== itemId));
  };

  return [ items, addItem, saveItem, deleteItem ];

};