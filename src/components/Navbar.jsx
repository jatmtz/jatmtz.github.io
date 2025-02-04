import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Navbar = () => {
    const styles = {
        navbar: {
            backgroundColor: '#4b2e2e', // Brown
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#d4af37', // Gold
        },
        logo: {
            height: '80px',
            width: 'auto',
            marginLeft: '3%'
        },
        navList: {
            display: 'flex',
            gap: '3rem',
            listStyle: 'none',
            marginRight: '10%',
            padding: 0,
        },
        navLink: {
            color: '#d4af37',
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'color 0.3s',
        },
        navLinkHover: {
            color: '#8b5e3b', // Light Brown
        },
    };

    return (
        <nav style={styles.navbar}>
            <img src={logo} alt="Estelar" style={styles.logo} />
            <ul style={styles.navList}>
                <li>
                    <Link
                        to="/"
                        style={styles.navLink}
                        onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                        onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        style={styles.navLink}
                        onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                        onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
                    >
                        Nosotros
                    </Link>
                </li>
                <li>
                    <Link
                        to="/coffee-types"
                        style={styles.navLink}
                        onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                        onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
                    >
                        Tipos de Café
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        style={styles.navLink}
                        onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                        onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
