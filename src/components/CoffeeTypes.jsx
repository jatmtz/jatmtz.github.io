import arabicaImage from '../assets/arabica.png';
import robustaImage from '../assets/robusta.png';
import libericaImage from '../assets/liberica.png';
import excelsaImage from '../assets/excelsa.png';

const CoffeeTypes = () => {
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
            marginTop: '40px',
        },
        title: {
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        typeContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px',
        },
        image: {
            width: '100px',
            height: '100px',
            borderRadius: '8px',
            objectFit: 'cover',
        },
        description: {
            textAlign: 'left',
            fontSize: '1.2rem',
        },
        divider: {
            height: '1px',
            backgroundColor: '#D4AF37',
            margin: '20px 0',
        },
    };

    const coffeeTypes = [
        {
            name: 'Arabica',
            image: arabicaImage,
            description:
                'El café Arabica es conocido por su sabor suave y aroma delicado. Se cultiva principalmente en altitudes elevadas y es ideal para quienes prefieren un café menos ácido y más dulce.',
        },
        {
            name: 'Robusta',
            image: robustaImage,
            description:
                'El café Robusta tiene un sabor fuerte y cuerpo intenso. Es ideal para quienes buscan una taza con más cafeína y notas terrosas. Se cultiva en climas más cálidos.',
        },
        {
            name: 'Liberica',
            image: libericaImage,
            description:
                'El café Liberica tiene un sabor único y floral. Es menos común que Arabica y Robusta, pero ofrece una experiencia exótica con notas frutales y madera.',
        },
        {
            name: 'Excelsa',
            image: excelsaImage,
            description:
                'El café Excelsa es conocido por su perfil de sabor afrutado y ácido. Es una opción excelente para mezclas, ya que agrega profundidad y complejidad.',
        },
    ];

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.title}>Tipos de Café</h2>
                {coffeeTypes.map((type, index) => (
                    <div key={index}>
                        <div style={styles.typeContainer}>
                            <img src={type.image} alt={type.name} style={styles.image} />
                            <div style={styles.description}>
                                <h3>{type.name}</h3>
                                <p>{type.description}</p>
                            </div>
                        </div>
                        {index < coffeeTypes.length - 1 && <div style={styles.divider}></div>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoffeeTypes;
