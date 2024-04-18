import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';

const App = () => {
    return (
        <div>
            <h1>Mi tienda</h1>
            <header>
                <NavBar />
            </header>
            <section>
                <div className="banner">
                    {/* Contenido del banner */}
                </div>
            </section>
            <section>
                <div className="productos">
                    {/* Contenido de los productos */}
                </div>
            </section>
            <section>
                <div className="contacto">
                    {/* Contenido de la sección de contacto */}
                </div>
            </section>
        </div>
    );
}

export default App;
