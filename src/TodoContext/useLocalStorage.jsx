import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
  
        if (!localStorageItem) {
          // Si no hay un item en localStorage, establece el valor inicial
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [itemName, initialValue]); // Agregar itemName e initialValue como dependencias

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

const defaultTodos = [
  { text: 'Cut onions', completed: true },
  { text: 'Take the introductory course to React.js', completed: false },
  { text: 'Cry with the crier', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Use this fantastic app', completed: true },
];

export { useLocalStorage, defaultTodos };
