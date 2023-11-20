import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function useDashboard() {

    const [filtersMenu, setFiltersMenu] = useState(false)
    const [inicialCharsList, setInicialCharsList] = useState([])
    const [characters, setCharacters] = useState([])
    const [filterSelected, setFilterSelected] = useState('All')

    const navigate = useNavigate()

    const handleBackBtn = () => {
        navigate('/dashboard')
    }

    const handleFilterSelected = (menuOption) => {
        setFilterSelected(menuOption)
        setFiltersMenu(false)

        if (menuOption === 'Human') {
            const filterCharacter = inicialCharsList.filter(
                (char) => char.species === 'Human'
            )
            setCharacters(filterCharacter)
        } else if(menuOption === 'Alien') {
            const filterCharacter = inicialCharsList.filter(
                (char) => char.species === 'Alien'
            )
            setCharacters(filterCharacter)
        } else {
            setCharacters(inicialCharsList)
        }
    }

    return {
        handleBackBtn,
        filtersMenu, setFiltersMenu,
        inicialCharsList, setInicialCharsList,
        characters, setCharacters,
        filterSelected, setFilterSelected,
        handleFilterSelected
    }
}