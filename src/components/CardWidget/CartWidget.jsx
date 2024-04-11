import { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavBar from "../NavBar/NavBar";

const CardWidget = () => {
    const [navbarVisible, setNavbarVisible] = useState(false);

    const toggleNavbar = () => {
        setNavbarVisible(!navbarVisible);
    }

    return( 
        <div>
            <div className="carrito" onClick={toggleNavbar}>
                <HamburgerIcon boxSize={20} color="currentColor" />
            </div>
            {navbarVisible && <NavBar />} {/* Renderiza el NavBar solo si navbarVisible es true */}
        </div>
    )
}

export default CardWidget;
