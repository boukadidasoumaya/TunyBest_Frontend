import React, { useRef, useState } from 'react';
import './SelecOptions.css';

const SelectOptions = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Category');
  const selectRef = useRef();

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleDocumentClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div className="custom-select d-flex align-items-start" onClick={toggleOptions} ref={selectRef}>
        <div className={`selected-option ${isOpen ? 'open' : ''}`}>{selectedOption}</div>
        {isOpen && (
          <div className="options">
            {options.map((option) => (
              <div key={option} className="option" onClick={() => handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
        <div
          className="custom-arrow"
          style={{
            position: 'absolute',
            top: '52%',
            right: '15px',
            borderLeft: '9px solid transparent',
            borderRight: '9px solid transparent',
            borderTop: '11px solid rgb(15, 19, 30)',
            transform: `translateY(-50%) ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}`,
            transition: 'transform 0.2s ease-in-out',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default SelectOptions;
