import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <nav data-aos="fade-right">
            <Breadcrumb separator="-">
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    <BreadcrumbSeparator />
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="#">About</BreadcrumbLink>
                    <BreadcrumbSeparator />
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>
    );
}

export default NavBar;
