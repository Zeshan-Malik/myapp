import ApiComponent from "../components/ApiComponent"
import {connect} from 'react-redux'
import { fetchData } from '../services/actions/Actions'
const mapStateToProps=state=>({
    data:state.data    
})
const mapDispatchToProps=dispatch=>({
    apiDataHandler:()=>(fetchData(dispatch))
})
export default connect(mapStateToProps,mapDispatchToProps)(ApiComponent)