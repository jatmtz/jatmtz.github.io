const About = () => {
    const styles = {
        section: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            color: '#D4AF37', // Color dorado para el texto
            textAlign: 'center',
            padding: '16px',
        },
        container: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro semitransparente
            padding: '32px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            maxWidth: '800px',
            marginTop: '40px',
        },
        title: {
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        paragraph: {
            fontSize: '1.5rem',
            fontStyle: 'italic',
            marginBottom: '20px',
            lineHeight: '1.8',
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.title}>Acerca de Café Estelar</h2>
                <p style={styles.paragraph}>
                    En Café Estelar, creemos que un buen café es mucho más que una bebida; es una experiencia, un
                    momento que se comparte. Imagínate una fría noche de invierno, las estrellas brillando en el cielo
                    oscuro, y tú, junto a tus seres queridos, disfrutando de una taza de nuestro café de grano, suave y
                    reconfortante. Es el sabor de la calidez, de los recuerdos compartidos, de las risas que llenan
                    el aire mientras el frío afuera no es más que una excusa para estar juntos.
                </p>
                <p style={styles.paragraph}>
                    En cada grano de Café Estelar, encuentras la esencia de lo que más apreciamos: la calidad, la tradición
                    y la conexión humana. Cada taza que servimos es un viaje sensorial que te transporta a ese momento
                    perfecto, donde el café es el acompañante ideal para una noche bajo las estrellas, rodeado de amor
                    y calidez.
                </p>
            </div>
        </section>
    );
};

export default About;

