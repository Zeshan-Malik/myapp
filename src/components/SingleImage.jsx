import {ImageWraper} from "./ImageTemplate"
import { useVisibilityHook } from 'react-observer-api';
const SingleImage = ({item,index, alternative, removeImage}) => {

    // const { setElement, isVisible} = useVisibiltyHook();
    const {setElement,isVisible} = useVisibilityHook();
    
    return (
        <div ref={setElement}>
            {
                isVisible ?  <ImageWraper >
                <img src={item} alt={alternative} />
                <div className="btn btn-danger btn-custom-delete" onClick={()=>{removeImage(item)
                }}>
                    Delete
                </div>
                
            </ImageWraper> : <h1>Loading...</h1>
            }
       </div>
    )
}

export default SingleImage
