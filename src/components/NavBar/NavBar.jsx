import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <>
            <nav>
                <Breadcrumb fontWeight='medium' fontSize='sm' separator={<BreadcrumbSeparator>/</BreadcrumbSeparator>}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Nosotros</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>contacto</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </nav>
        </>
    );
}

export default NavBar;
