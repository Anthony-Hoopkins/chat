import React from 'react';
import styles from './ThemeToggle.module.css';

const DARK_THEME_CLASS = 'dark-theme';

const ThemeToggle = () => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (active) {
      document.body.classList.add(DARK_THEME_CLASS);
    } else {
      document.body.classList.remove(DARK_THEME_CLASS);
    }
  }, [active]);

  return (
    <>
      <div className={styles.toggle} onClick={() => setActive(!active)}>
        <div className={`${styles.switcher} ${active ? styles.active : ''}`} />
      </div>
    </>
  );
};

export default ThemeToggle;
