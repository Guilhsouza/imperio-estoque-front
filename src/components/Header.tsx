import Link from 'next/link';
import Image from 'next/image';
import { Nav, Navbar, NavItem } from 'reactstrap';
import logo from '../app/favicon/icon.jpeg'
import styles from '../styles/btnHeader.module.css'

export default function Header() {
    return (
        <>
            <Navbar container='md' style={{ backgroundColor: '#d1ae6c' }}>
                <Nav className='d-flex flex-row justify-content-between align-items-center w-100' navbar>

                    <Link href='/' className='navbar-brand'>
                        <Image
                            src={logo}
                            width={55}
                            height={55}
                            style={{ borderRadius: '0.4rem' }}
                            alt='logo império sofás'
                        />
                    </Link>

                    <div className='d-flex'>
                        <NavItem>
                            <Link href='/sofas' className={`nav-link ${styles.btnStyle} ${styles.btnHoverHeader}`} passHref>
                                Sofás
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link href='/camaEcolchao' className={`nav-link ${styles.btnHoverHeader} ${styles.btnStyle}`} passHref>
                                Camas e Colchões
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link href='' className={`nav-link ${styles.btnHoverHeader} ${styles.btnStyle}`} passHref>
                                Sala
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link href='' className={`nav-link ${styles.btnHoverHeader} ${styles.btnStyle}`} passHref>
                                Cozinha
                            </Link>
                        </NavItem>
                    </div>

                    <div>
                        <NavItem>
                            <Link href='/cart' className={`nav-link ${styles.btnHoverHeader} ${styles.btnStyle}`} passHref>
                                Vendas
                            </Link>
                        </NavItem>
                    </div>
                </Nav>
            </Navbar >
        </>
    )
}