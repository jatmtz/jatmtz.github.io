import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        // Precarga la imagen del logo
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = logo;
        link.type = 'image/webp';
        document.head.appendChild(link);
    }, []);

    const styles = {
        navbar: {
            backgroundColor: '#4b2e2e', // Brown
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#d4af37', // Gold
            padding: '10px 3%',
        },
        logo: {
            height: '80px',
            width: 'auto',
        },
        navList: {
            display: 'flex',
            gap: '3rem',
            listStyle: 'none',
            padding: 0,
        },
        navLink: {
            color: '#d4af37',
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease-in-out',
        },
        navLinkHover: {
            color: '#8b5e3b', // Light Brown
        },
    };

    return (
        <nav style={styles.navbar} aria-label="Menú de navegación principal">
            {/* Imagen del logo optimizada con prioridad alta */}
            <img src={logo} alt="Estelar" style={{ height: '80px', width: 'auto', marginLeft: '3%' }} width="150" height="80" />
            <ul style={styles.navList}>
                {['Inicio', 'Nosotros', 'Tipos de Café', 'Contacto'].map((text, index) => (
                    <li key={index}>
                        <Link
                            to={text === 'Inicio' ? '/' : `/${text.toLowerCase().replace(/\s+/g, '-')}`}
                            style={styles.navLink}
                            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                            onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
                        >
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
