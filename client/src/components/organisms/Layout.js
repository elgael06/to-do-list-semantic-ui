import {Container} from 'semantic-ui-react';
import TitleApp from '../atoms/TittleApp';

import './styles/layout.css';

const Layout = ({children}) => {

    return(<Container >
        <TitleApp />
        {children}
    </Container>);
}

export default Layout;