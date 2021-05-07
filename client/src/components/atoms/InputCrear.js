import {Grid,Form,Button,Input,Icon} from 'semantic-ui-react';

const InputCrear = ()=>{

    return (<Grid.Column textAlign='center' mobile={16} tablet={16} computer={8}>
        <Form>
            <Input 
                fluid
                loading={false}
                placeholder='nueva tarea...'
                iconPosition='left'
                >
                <Icon position='left' name='edit' />
                <input />
                <Button color='blue'  onClick={()=>console.log('nueva tarea...')} >agregar</Button>
            </Input>
        </Form>
    </Grid.Column>);
}

export default InputCrear;