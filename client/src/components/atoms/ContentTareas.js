import {Grid,Card} from 'semantic-ui-react';

const ContentTareas = ({children})=>{

    return (<Grid.Column textAlign='center' mobile={16} tablet={16} computer={8}>
        <Card.Group>
            {children}
        </Card.Group>
    </Grid.Column>);
}
export default ContentTareas;