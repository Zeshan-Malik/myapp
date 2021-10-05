import Home from '../components/Home'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../services/actions/Actions'
const mapStateToProps = state => ({
    cardData: state.cardItem

})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeFromCartHandler: (data) => dispatch(removeFromCart(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)