const Contact = () => {
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
            maxWidth: '600px',
            width: '100%',
        },
        title: {
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        formGroup: {
            marginBottom: '20px',
            textAlign: 'left',
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
        },
        input: {
            width: '100%',
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #D4AF37',
            backgroundColor: '#4B3832',
            color: '#D4AF37',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #D4AF37',
            backgroundColor: '#4B3832',
            color: '#D4AF37',
            minHeight: '100px',
        },
        button: {
            backgroundColor: '#D4AF37',
            color: '#4B3832',
            padding: '10px 20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#C59A2E',
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.title}>Contáctanos</h2>
                <form>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Nombre:</label>
                        <input type="text" style={styles.input} placeholder="Ingresa tu nombre" />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Correo:</label>
                        <input type="email" style={styles.input} placeholder="Ingresa tu correo electrónico" />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Mensaje:</label>
                        <textarea style={styles.textarea} placeholder="Escribe tu mensaje"></textarea>
                    </div>
                    <button
                        style={styles.button}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
