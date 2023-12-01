import React, { useState } from 'react';
import './DropdownMenu.css'

export function DropdownMenu(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
        toggleDropdown()
    }

    return (
        <>
            <button className='dropdown-btn' onClick={toggleDropdown}>Menu</button>
            {isOpen && (
                <div className="dropdown-menu-div">
                    <ul className="dropdown-menu">
                        <div>
                            <li><button onClick={() => scrollToSection(props.nowMe)}>About us</button></li>
                            <li><button onClick={() => scrollToSection(props.projects)}>Projects</button></li>
                        </div>
                        <div>
                            <li><button onClick={() => scrollToSection(props.services)}>Services</button></li>
                            <li><button onClick={() => scrollToSection(props.contact)}>Contact</button></li>
                        </div>
                    </ul>
                </div>
            )}
        </>
    )
}
