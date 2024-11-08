export const SaveinStorage = (key, item) => {
    //COnseguir elementos del localStorage
    let items = JSON.parse(localStorage.getItem(key));
  
    // Comprobar si es un array
    if (Array.isArray(items)){
      // si es array añado un elemento nuevo
      items.push(item)
    } else {
      // si no es la creo
      items = [item]
    }
    // guardar en localStorage 
    localStorage.setItem(key, JSON.stringify(items));
  
    return items
    
  }