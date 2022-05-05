import React, { useContext } from 'react'
import './toggle.css'
import Dark from '../../img/dark.png'
import Light from '../../img/light.png'
import { ThemeContext } from '../context'

function Toggle() {
    const theme = useContext(ThemeContext);
    const { state, dispatch } = theme

    const handleToggleClick = (e) => {
        dispatch({ type: 'TOGGLE' })
    }
    return (
        <div className='t'>
            <img src={Dark} alt="dark mode icon" className="t-icon" />
            <img src={Light} alt="light mode icon" className="t-icon" />
            <div className="t-button" onClick={handleToggleClick} style={{ left: state.darkMode ? '0' : '45px' }}></div>
        </div>
    )
}

export default Toggle