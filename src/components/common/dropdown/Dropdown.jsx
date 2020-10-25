import React, { useState, useRef, useEffect } from "react";
import style from './Dropdown.module.css';

import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'

const Dropdown = ({ elements, selectedValue, onChange, title }) => {
   const [isOpen, setIsOpen] = useState(false);
   const dropdownElements = [{ key: 'ANY', value: `Any ${title.toLowerCase()}` }, ...elements]

   const toggling = () => setIsOpen(!isOpen);

   const onOptionClicked = value => () => {
      onChange(value);
      setIsOpen(false);
   };

   const Header = () => <div className={`${style.header} ${isOpen ? style.headerClicked : null}`} onClick={toggling}>
      {header} {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
   </div>

   const header = !selectedValue || selectedValue === null ? (title || 'Please select value ...') : selectedValue.value;

   const useOutsideAlerter = (ref) => {
      useEffect(() => {
         function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && isOpen) {
               setIsOpen(false);
            }
         }

         document.addEventListener("mousedown", handleClickOutside);
         return () => {
            document.removeEventListener("mousedown", handleClickOutside);
         };
      }, [ref, isOpen]);
   }

   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef);

   return (
      <div ref={wrapperRef} className={style.container}>
         <Header />
         {isOpen && (
            <div>
               <div className={style.list}>
                  {dropdownElements.map(option => {
                     return (
                        < div className={style.listItem} onClick={onOptionClicked(option)} key={option.key} >
                           { option.value}
                        </div>
                     )
                  })}
               </div>
            </div>
         )
         }
      </div >
   );
}

export default Dropdown;