import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/Menu.module.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.Menu}>
      <button className={styles.Button} onClick={handleButtonClick}>
        <Link to="/">메뉴</Link>
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <Link to="/">
            <li>일자리 찾기</li>
          </Link>
          <Link to="/">
            <li>회사홍보</li>
          </Link>
          <button className={styles.Button} onClick={handleButtonClick}>
            <Link to="/">메뉴</Link>
          </button>
          <Link to="/manual/useMethod">
            <li>
              사용방법 <br /> & <br /> 공지사항
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Menu;
