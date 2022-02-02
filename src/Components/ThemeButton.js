import React from 'react'

const ThemeButton = ({ toggleMode }) => {

  return (
    <div className="button">
		<input
        className="switch-checkbox"
        id={`switch-new`}
        onChange={toggleMode}
        type="checkbox"
      />
      <label
        className="switch-label"
        htmlFor={`switch-new`}
      >
        <span className={`switch-button`}></span>
      </label>
	  </div>
  )}

export default ThemeButton;


  {/* <button 
    className="theme-btn"
    onClick={toggleMode}
    >
      ,fsafsa
    </button> */}