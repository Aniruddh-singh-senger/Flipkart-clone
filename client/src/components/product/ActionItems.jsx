import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from 'clsx';
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyle= makeStyles ({
    leftcontainer: {
        padding: '40px 0 0 80px'
    },
    image: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF',
        marginRight: 10
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    },
})

const ActionItems = ({ product }) => {

    const classes = useStyle();
    const history = useHistory();

    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/cart');
    }

    return (
        <Box className={classes.leftcontainer}>
            <img src={product.detailUrl} className={classes.image} /><br />
            <Button onClick={() => addItemToCart()} className={clsx(classes.button, classes.addToCart)} variant="contained"><Cart />Add to Cart</Button>
            <Button  className={clsx(classes.button, classes.buyNow)} variant="contained"><Flash /> Buy Now</Button>
        </Box>
    )
}

export default ActionItems;