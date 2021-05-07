import { Grid } from 'semantic-ui-react';
import InputCrear from '../atoms/InputCrear';
import ListViewTareas from './ListViewTareas';

const TareasForm = ()=> {

    return ( <Grid columns={12} >
        <InputCrear />
        <ListViewTareas />        
    </Grid>);
}

export default TareasForm;