import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo_slogan.webp';

const Home = () => {
    const styles = {
        section: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            color: '#D4AF37', // Texto dorado
            textAlign: 'center',
            padding: '16px',
        },
        container: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro semitransparente
            padding: '32px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            maxWidth: '800px',
            width: '100%',
        },
        title: {
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '16px',
        },
        slogan: {
            fontSize: '1.5rem',
            marginBottom: '20px',
        },
        logo: {
            maxWidth: '300px',
            marginBottom: '20px',
        },
        contactList: {
            marginTop: '20px',
            listStyle: 'none',
            padding: 0,
            textAlign: 'left',
        },
        contactItem: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.2rem',
            marginBottom: '12px',
        },
        icon: {
            marginRight: '10px',
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h1 style={styles.title}>Bienvenidos a Estelar</h1>
                <p style={styles.slogan}>"Un sorbo de calidez bajo un cielo infinito"</p>
                <img src={logo} alt="Slogan" style={styles.logo} />
                <ul style={styles.contactList}>
                    <li style={styles.contactItem}>
                        <FaFacebook style={styles.icon} /> Café de grano Estelar
                    </li>
                    <li style={styles.contactItem}>
                        <FaInstagram style={styles.icon} /> @cafe_estelar
                    </li>
                    <li style={styles.contactItem}>
                        <FaPhone style={styles.icon} /> 8713077441
                    </li>
                    <li style={styles.contactItem}>
                        <FaMapMarkerAlt style={styles.icon} /> Calle Grano, #83, Mundo de Café, Torreón, Coahuila
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Home;
