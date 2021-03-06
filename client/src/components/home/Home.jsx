import { Box, makeStyles } from '@material-ui/core';

//component//

import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './slide';
import MidSection from './MidSection';

//import { products } from '../../constants/data';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts as listProducts } from '../../redux/actions/productActions';

const usestyle = makeStyles({
    component:{
        padding: 10,
        background: '#f2f2f2'
    },
    rightWrapper:{
       background: '#ffffff',
       padding: 5,
       margin:'12px 0 0 10px',
       width: 12
}
    


})

const Home = () => {
    const classes= usestyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  const { products } =  useSelector(state => state.getProducts)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])

    return (
        <div>
        <NavBar />
        <Box className={classes.component}>
        <Banner />
        <Box style={{display:'flex'}}>
         <Box style={{width:'83%'}}>
        <Slide timer={true} title="Deal of the day" products={products} />
        </Box>
        <Box className={classes.rightWrapper}>
            <img src={adURL} style={{width:230}} alt="" />
        </Box>
        </Box>
        <MidSection/>
        <Slide timer={false} title="Discount for You" products={products} />
        <Slide timer={false} title="Suggested Items"  products={products} />
        <Slide timer={false} title="Top Selection" products={products} />
        <Slide timer={false} title="Recommended Items"  products={products} />
        <Slide timer={false} title="Best Seller"  products={products} />
        </Box>
        </div>
    )

}

export default Home;