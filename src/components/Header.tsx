import { Navbar, NavbarContent, NavbarItem, NavbarBrand } from '@nextui-org/navbar';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../app/favicon/icon.jpeg'
import styles from '../styles/btnHeader.module.css'

export default function Header() {
    return (
        <>
            <Navbar style={{ backgroundColor: '#d1ae6c' }}>
                <NavbarContent className='flex-1 justify-around place-items-center p-3 w-full'>

                    <NavbarBrand>
                        <Link href='/' >
                            <Image
                                src={logo}
                                width={55}
                                height={55}
                                style={{ borderRadius: '0.4rem' }}
                                alt='logo império sofás'
                            />
                        </Link>
                    </NavbarBrand>

                    <div className='flex gap-4'>
                        <NavbarItem>
                            <Link href='/sofas' className={`${styles.btnDefaultColor} ${styles.btnHoverHeader}`} passHref>
                                Sofás
                            </Link>
                        </NavbarItem>

                        <NavbarItem>
                            <Link href='/camaEcolchao' className={`${styles.btnDefaultColor} ${styles.btnHoverHeader}`} passHref>
                                Camas e Colchões
                            </Link>
                        </NavbarItem>

                        <NavbarItem>
                            <Link href='' className={`${styles.btnDefaultColor} ${styles.btnHoverHeader}`} passHref>
                                Sala
                            </Link>
                        </NavbarItem>

                        <NavbarItem>
                            <Link href='' className={`${styles.btnDefaultColor} ${styles.btnHoverHeader}`} passHref>
                                Cozinha
                            </Link>
                        </NavbarItem>
                    </div>

                    <div>
                        <NavbarItem>
                            <Link href='/cart' className={`${styles.btnDefaultColor} ${styles.btnHoverHeader}`} passHref>
                                Vendas
                            </Link>
                        </NavbarItem>
                    </div>
                </NavbarContent>
            </Navbar >
        </>
    )
}