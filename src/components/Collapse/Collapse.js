import { useState, useRef } from "react";
import { AiOutlineRight } from "react-icons/ai";

import styles from "./Collapse.module.css";

const Collapse = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  return (
    <div className={styles.collapse}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineRight className={isOpen ? styles["icon-open"] : styles["icon-close"]} />
        <h6>{header}</h6>
      </div>
      <div
        className={styles["content-parent"]}
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + "px",
              }
            : {
                height: "0px",
              }
        }>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
