import { useContext, useState } from "react";
import { createContext } from "react";

export const FavoritosContext = createContext()
FavoritosContext.displayName = 'Favoritos'

export  const FavoritosProvider = ({children}) => {
  const [favorito, setFavorito] = useState([])
  return (
    <FavoritosContext.Provider value={{favorito, setFavorito}}>
      {children}
    </FavoritosContext.Provider>
  )
}

export const useFavoritoContect = () => {
  const {favorito, setFavorito} = useContext(FavoritosContext)

  const addFavorito = (novoFavorito) = {
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

    let novaLista = [...favorito]

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito)
      return setFavorito(novaLista)
    }

    novalista.splice(novaLista.indexOf(novoFavorito), 1)
    return setFavotito(novaLista)
  } 
  
}

// Para compartilhar alguns contestos ou valores com outros componentenets 