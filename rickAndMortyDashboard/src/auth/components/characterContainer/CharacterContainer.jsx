import { useNavigate } from "react-router-dom";
import './CharacterContainer.css'

export function CharacterContainer({ allCharacters, characterClick }) {

    const navigate = useNavigate()

    const handleCharacterClick = (id) => {
        if (characterClick) {
            characterClick(id)
        }
        navigate(`/item_detail/${id}`)
    }

    return (
        <>
            {allCharacters.map(({ id, name, image }) => {
                return (
                    <div className='divContainer' key={id}
                    onClick={() => handleCharacterClick(id)}>
                        <img className='characterIMG' src={image} alt='' />
                        <div className='infoContainer'>
                            <h1 className='characterName'>{name}</h1>
                        </div>
                    </div>
                )
            })}
        </>
    )
}