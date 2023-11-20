import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from "../hooks/useForm"
import { useDashboard } from '../hooks/useDashboard'
import { APIfetchedById } from '../services/APIfetchedById'
import './ItemDetailPage.css'

export function ItemDetailPage() {

    const { handleLogOut } = useForm()
    const { handleBackBtn } = useDashboard()

    const [characterSelected, setCharacterSelected] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        APIfetchedById(id).then(
            (data) => {
                setCharacterSelected(data)
            }
        )
    }, [id])

    console.log(characterSelected);

    return (
        <>
            <div className='headerItemDetail'>
                <img className="logoHeader" src="../../src/assets/logoRickAndMorty.png" alt=''/>
                <button className="logOutButton" type="submit" onClick={handleLogOut}>Log Out</button>
            </div>
            <div className='itemDetailMain'>
                <div className='backBtnDiv'>
                    <button className='backButton' onClick={handleBackBtn}>Back</button>
                </div>
                <div className='characterDetailContainer'>
                    <img className='characterDetailIMG' src={characterSelected.image} alt=''/>
                    <div className='infoCharacterDiv'>
                        <h2 className='characterDetailName'>Name: <span>{characterSelected.name}</span></h2>
                        <h2 className='characterDetailGender'>Gender: <span>{characterSelected.gender}</span></h2>
                        <h2 className='characterDetailSpecies'>Specie: <span>{characterSelected.species}</span></h2>
                        <h2 className='characterDetailStatus'>Status: <span>{characterSelected.status}</span></h2>
                    </div>
                </div>
            </div>
        </>
    )
}