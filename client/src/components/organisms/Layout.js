import {Container} from 'semantic-ui-react';
import TitleApp from '../atoms/TittleApp';
import ModalEliminar from '../molecules/ModalEliminar';

import './styles/layout.css';

const Layout = ({children}) => {

    return(<Container >
        <TitleApp />
        {children}
        <ModalEliminar />
    </Container>);
}

export default Layout;