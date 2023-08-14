
import React, { useState } from 'react';
import "./Dropdown.css";
import{Sliders,ChevronDown} from "react-feather";

const DisplayBtn = () => {

    const [selectedOption1, setSelectedOption1] = useState(''); 
    const [selectedOption2, setSelectedOption2] = useState(''); 
  
    const handleOptionChange1 = (event) => {
      setSelectedOption1(event.target.value);
    };
  
    const handleOptionChange2 = (event) => {
      setSelectedOption2(event.target.value);
    };

  return (
    <div className="display_options">

      <div className="display_item">
        <p>Grouping</p>
        <select className='dropdown' value={selectedOption1} onChange={handleOptionChange1}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div className="display_item">
        <p>Ordering</p>
        <select className='dropdown' value={selectedOption2} onChange={handleOptionChange2}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

const DropDown = ({selectedOption2}) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div>
      <button className='display_button' onClick={toggleCardVisibility}>
      <Sliders size={16} />
        <b>Display</b>
      <ChevronDown size={16} />
      </button>
      {isCardVisible && <DisplayBtn selectedOption2={selectedOption2} />}
    </div>
  );
};

export default DropDown;

