const urlAPI = 'https://rickandmortyapi.com/api/character'

export const fetchAllChars = async () => {
    const response = await fetch(urlAPI)
    if (!response.ok) {
        throw new Error('Error al traer el API completo')
    }
    const data = await response.json()
    const allApi = data.results

    return allApi
}
