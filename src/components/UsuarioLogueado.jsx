import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function UsuarioLogueado({ LogOut, usuario }) {
    return (
        <DropdownButton data-bs-theme="light" id="dropdown-basic-button" title={<span className='fs-5'><i className="bi bi-person-circle"></i> {usuario} </span>}>
            <Link className='SinSubrayado dropdown-item' to="/Usuario">
            Ver usuario
            </Link>
            <Link className='SinSubrayado dropdown-item' to="/Favorito">
                Mis Favoritos
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item className='text-danger' onClick={LogOut}>Cerrar sesión</Dropdown.Item>
        </DropdownButton>
    );
}

export default UsuarioLogueado;