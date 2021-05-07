import {Grid,Form,Button,Input,Card,Icon} from 'semantic-ui-react';

export default ()=>{
    
    return(<Grid>
        <Grid.Column textAlign='center' mobile={16} tablet={16} computer={16}>
            <Form onSubmit={()=>console.log('Buscar tarea...')} >
                <Input 
                    fluid
                    loading={false}
                    placeholder='Buscar tarea...'
                    icon='search'    
                />
            </Form>
        </Grid.Column>
    </Grid>);
}