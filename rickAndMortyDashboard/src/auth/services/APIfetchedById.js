const urlAPI = 'https://rickandmortyapi.com/api/character'

export const APIfetchedById = async (id) => {
    const response = await fetch(`${urlAPI}/`+id)
    if (!response.ok) {
        throw new ('Error al traer API seleccionado')
    }
    const data = response.json()

    return data
}