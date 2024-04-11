import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import CardWidget from './components/CardWidget/CartWidget';
import './App.css';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de la animación en milisegundos
            easing: 'ease-out', // Tipo de easing para la animación
            once: true // Si la animación solo debe ocurrir una vez
        });
    }, []);

    return (
        <>
            <div className='carrito'>
                <CardWidget />
            </div>
            <div className='caja' data-aos="fade-right"> {/* Agrega el atributo data-aos al div */}
                <div className='titulo'>
                    <h1>Mi Tienda</h1>
                </div>
                <header>
                    <NavBar />
                </header>
            </div>
        </>
    );
}

export default App;
