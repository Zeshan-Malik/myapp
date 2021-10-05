import {connect} from 'react-redux'
import Images from "../components/Images"
import { fetchImages, removeImage } from '../services/actions/Actions'
const mapStateToProps=state=>({
    data:state.imagesData 
})
const mapDispatchToProps=dispatch=>({
    showImages:()=>fetchImages(dispatch),
    deleteImageHandler: (data) => dispatch(removeImage(data)),
})
export default connect(mapStateToProps,mapDispatchToProps)(Images)