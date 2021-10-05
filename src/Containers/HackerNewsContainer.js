import HackerNewsComponent from '../components/HackerNewsComponent'
import {connect} from 'react-redux'
import { fetchHackerNews } from '../services/actions/Actions'
const mapStateToProps=state=>({
    data:state.apiData.data    
})
const mapDispatchToProps=dispatch=>({
    hackerNewsDataHandler:()=>(fetchHackerNews(dispatch))
})
export default connect(mapStateToProps,mapDispatchToProps)(HackerNewsComponent)