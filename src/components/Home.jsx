import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo_slogan.webp";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center text-gold px-4">
      <div className="bg-black/50 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">Bienvenidos a Estelar</h1>
        <p className="text-xl mb-6">"Un sorbo de calidez bajo un cielo infinito"</p>
        <img
          src={logo}
          alt="Logo de Estelar"
          className="max-w-xs mx-auto mb-6"
          loading="lazy"
        />
        <ul className="mt-4 space-y-3 text-left">
          <li className="flex items-center text-lg">
            <FaFacebook className="mr-3" aria-label="Facebook" /> Café de grano Estelar
          </li>
          <li className="flex items-center text-lg">
            <FaInstagram className="mr-3" aria-label="Instagram" /> @cafe_estelar
          </li>
          <li className="flex items-center text-lg">
            <FaPhone className="mr-3" aria-label="Teléfono" /> 8713077441
          </li>
          <li className="flex items-center text-lg">
            <FaMapMarkerAlt className="mr-3" aria-label="Ubicación" /> Calle Grano, #83, Mundo de Café, Torreón, Coahuila
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;

