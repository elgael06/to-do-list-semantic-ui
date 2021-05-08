import {Divider,Comment, Input,Button,Checkbox,Icon} from 'semantic-ui-react';

const CardTarea = ({
    id='',
    body='',
    status=false,
    save=()=>{},
    onSelect=(e)=>{},
    onDelete=e=>{},
    handleChange=e=>{},
    cancel=()=>{},
    active=true
})=> {

    return ( <Comment id={`${id}`}>
        <Comment.Content>
          <Comment.Author as='a'>Tarea </Comment.Author>
          <Comment.Metadata style={{position:'initial',float:'right'}}>
                <Checkbox  slider checked={!status} />
          </Comment.Metadata>          
          <Comment.Text  >{
          active?
          <Input 
                fluid
                placeholder='Buscar tarea...'
                value={body}
                onChange={handleChange}
            >
                <input />
            </Input> 
          :body}</Comment.Text>
          <Comment.Actions style={{textAlign:'end'}}>
            { active ? <>            
                <Button color='youtube' size='tiny' onClick={cancel}>Cancel</Button> 
                <Button color='blue'size='tiny' onClick={save}>Guardar</Button> 
            </> : <div style={{fontSize:15}}>
                <Icon onClick={onSelect} color='blue' name='edit'  />
                <Icon onClick={onDelete} color='red' name='trash' />
            </div>}
          </Comment.Actions>

        </Comment.Content>
        <Divider />
      </Comment>);
}

export default CardTarea;