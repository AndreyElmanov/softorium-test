import { Container, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/favicon.png';

export default function Header() {
    return (
        <Container className='mb-3 mt-1'>
            <NavLink to={'/'} style={{textDecoration: 'none'}} className={'display-6 d-flex align-items-center'}>
                <Image src={logo} alt="logo" style={{height: 35}}/>
                Вакансии Softorium
            </NavLink>
        </Container>
    )
}