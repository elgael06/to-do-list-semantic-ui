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
    handleChangeStatus=()=>{},
    active=true
})=> {

    return ( <Comment id={`${id}`}>
        <Comment.Content>
          <Comment.Metadata style={{position:'initial',float:'right'}}>
                <Checkbox onClick={handleChangeStatus} slider checked={!status} />
          </Comment.Metadata>          
          <Comment.Text  >{
          active?
          <Input 
                fluid
                placeholder='Buscar tarea...'
                value={body}
                onChange={handleChange}
            /> 
          :<label style={{
              textDecoration: !status ? 'line-through #00000030 5px' : '',
              color:!status ? 'grey': '#000',
              fontSize:17
              }}>{body}</label> }</Comment.Text>

          <Comment.Actions style={{textAlign:'end'}}>
            { active ? <>            
                <Button color='youtube' size='tiny' onClick={cancel}>Cancel</Button> 
                <Button color='blue'size='tiny' onClick={save}>Guardar</Button> 
            </> : <div style={{fontSize:17}}>
                <Icon onClick={onSelect} color='blue' name='edit'  />
                <Icon onClick={onDelete} color='red' name='trash' />
            </div>}
          </Comment.Actions>

        </Comment.Content>
        <Divider />
      </Comment>);
}

export default CardTarea;