import Link from 'next/link';
import Image from 'next/image';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import logo from '../app/favicon/icon.jpeg'
import styles from '../styles/btnHeader.module.css'

export default function Header() {
    return (
        <>
            <Navbar container='md' style={{ backgroundColor: '#d1ae6c' }}>
                <Nav className="flex-row align-items-center" navbar>
                    <Link href='/' className='navbar-brand'>
                        <Image
                            src={logo}
                            width={55}
                            height={55}
                            alt='logo império sofás'
                        />
                    </Link>

                    <NavItem>
                        <Link href="/products" className={`nav-link ${styles.btnHoverHeader} ${styles.btnStyle}`} passHref>
                            Produtos
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link href="/cart" className={`nav-link ${styles.btnHoverHeader} ${styles.btnStyle}`} passHref>
                            Carrinho
                        </Link>
                    </NavItem>

                    <div className=''>
                        <NavItem >
                            <Link href="/cart" className={`nav-link ${styles.btnHoverHeader} ${styles.btnStyle}`} passHref>
                                Vendas
                            </Link>
                        </NavItem>
                    </div>

                </Nav>
            </Navbar >

        </>
    )
}