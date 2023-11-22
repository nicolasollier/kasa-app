import React, { useState } from "react";
import styles from "./Dropdown.module.sass";
import ArrowIcon from "../icons/arrow_back";

const Dropdown = ({ principle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <div className={styles.dropdown__header} onClick={toggleDropdown}>
          <p value={principle.name}>{principle.name}</p>
          <div
            className={`${styles.dropdown__header__icon} ${
              isOpen ? styles.open : ""
            }`}
          >
            <ArrowIcon />
          </div>
        </div>
        {isOpen && (
          <div className={styles.dropdown__content}>{principle.content}</div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
