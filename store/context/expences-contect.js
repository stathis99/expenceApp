import { createContext, useState } from 'react';

export const ItemContext = createContext({
  ids: [],
  addItem: (id) => {},
  removeItem: (id) => {},
});

function ItemContextProvider({ children }) {
  const [ItemIds, setItemIds] = useState([]);

  function addItem(id) {
    setItemIds((currentIds) => [...currentIds, id]);
  }

  function removeItem(id) {
    setItemIds((currentIds) =>
      currentIds.filter((Id) => Id !== id)
    );
  }

  const value = {
    ids: ItemIds,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <ItemContext.Provider value={value}>
      {children}
    </ItemContext.Provider>
  );
}

export default ItemContextProvider;