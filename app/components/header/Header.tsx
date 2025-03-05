'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLButtonElement | null>(null);

  const displayMenu = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) 
        // &&  !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles['header-container']}>
      <h3 className={styles['logo']} onClick={() => scrollToSection('home')}>〄M&C</h3>
      <nav className={styles['nav']}>
        <div className={styles['ul-list']}>
          <div
            className={styles['a-item']}
            onClick={() => scrollToSection('home')}
          >
            Home
          </div>
          <div
            className={styles['a-item']}
            onClick={() => scrollToSection('ourbusiness')}
          >
            Our Company
          </div>
          <div
            className={styles['a-item']}
            onClick={() => scrollToSection('services')}
          >
            Services
          </div>
          <div
            className={styles['a-item']}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </div>
        </div>
      </nav>
      <div className={styles['hamburger']}>
        <i
          ref={menuRef}
          className="fa fa-bars"
          style={{ fontSize: '30px', cursor: 'pointer' }}
          onClick={displayMenu}
        ></i>
      </div>

      {open && (
        <div
          ref={drawerRef}
          className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}
        >
          <div
            className={styles['item-menu']}
            onClick={() => scrollToSection('home')}
          >
            <p className={styles['texto-mobile']}>Home</p>
          </div>
          <div
            className={styles['item-menu']}
            onClick={() => scrollToSection('ourbusiness')}
          >
            <p className={styles['texto-mobile']}>Our Company</p>
          </div>
          <div
            className={styles['item-menu']}
            onClick={() => scrollToSection('services')}
          >
            <p className={styles['texto-mobile']}>Services</p>
          </div>
          <div
            className={styles['item-menu']}
            onClick={() => scrollToSection('contact')}
          >
            <p className={styles['texto-mobile']}>Contact</p>
          </div>
        </div>
      )}

    </div>
  );
}
