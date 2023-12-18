import React, { useState } from "react";
import styles from "./Dropdown.module.sass";
import ArrowIcon from "../icons/arrow_back";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <div className={styles.dropdown__header} onClick={toggleDropdown}>
          <h3 className={styles.dropdown__title}>{title}</h3>
          <div
            className={`${styles.dropdown__header__icon} ${
              isOpen ? styles.open : ""
            }`}
          >
            <ArrowIcon />
          </div>
        </div>
        {isOpen && (
          <div className={styles.dropdown__content}>{content}</div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
