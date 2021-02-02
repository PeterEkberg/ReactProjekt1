import './BackDrop.css'

export const BackDrop = (props) => {
    return (
        <div onClick={()=>props.drawerHandler(false)} className='backDrop'>
            
        </div>
    )
}