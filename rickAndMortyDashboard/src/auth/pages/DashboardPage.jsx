import { AuthContextProvider } from "../context/AuthContextProvider"
import { useForm } from "../hooks/useForm"
import { CharacterContainer } from '../components/characterContainer/CharacterContainer'
import { fetchAllChars } from '../services/APIfetched'
import { useEffect } from "react"
import './DashboardPage.css'
import { useDashboard } from "../hooks/useDashboard"

export function DashboardPage() {

    const { handleLogOut } = useForm()
    const { filtersMenu, setFiltersMenu, setInicialCharsList, characters, setCharacters, handleFilterSelected } = useDashboard()

    useEffect(() => {
        fetchAllChars().then(
            (data) => {
                setInicialCharsList(data)
                setCharacters(data)
            }
        )
    }, [])

    console.log('despues de filtrar:', characters);

    return (
        <>
         <AuthContextProvider>
            <div className='headerDiv'>
                <img className='logoHeader' src="../../src/assets/logoRickAndMorty.png" alt="" />
                <button className="logOutButton" type="submit" onClick={handleLogOut}>Log Out</button>
            </div>
            <div className='dashboardDiv'>
                <button className='filterBtn' onClick={() => setFiltersMenu(!filtersMenu)}>Filter Species</button>
                {filtersMenu && (
                    <div className='menuBtnsDiv'>
                        <button className='menuBtns' onClick={() => handleFilterSelected('All')}>All</button>
                        <button className='menuBtns' onClick={() => handleFilterSelected('Human')}>Human</button>
                        <button className='menuBtns' onClick={() => handleFilterSelected('Alien')}>Alien</button>
                    </div>
                )}
                <div className='charactersDiv'>
                    <CharacterContainer allCharacters={characters}/>
                </div>
            </div>
         </AuthContextProvider>
        </>
    )
}