const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#4b2e2e', // Fondo negro más oscuro
            color: '#D4AF37', // Color dorado para el texto
            padding: '20px 0',
            textAlign: 'center',
            position: 'relative',
            bottom: '0',
            width: '100%',
        },
        text: {
            fontSize: '1rem',
            fontWeight: '300',
            margin: '0',
            letterSpacing: '0.5px',
        },
        link: {
            color: '#D4AF37', // Color dorado para los enlaces
            textDecoration: 'none',
            fontWeight: 'bold',
        },
    };

    return (
        <footer style={styles.footer}>
            <p style={styles.text}>
                © 2025 Estelar. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
