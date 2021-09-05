import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import { makeStyles } from '@material-ui/core';

const usestyle = makeStyles({
    image:{
        width: '100%',
        height: 280
    },
    carousel:{
        marginTop: 0
    }

})


const Banner = () => {
    const classes = usestyle();
    return(
        
        <Carousel 
        animation='slide'
        indicators={false}
       navButtonsAlwaysVisible={true}
       navButtonsProps={{
           style: {
               background:'#ffffff',
               color:'#494949',
               borderRadius: 0,
               margin: 0
           }
       }}
className={classes.carousel}

        >{ bannerData.map(image => (
          <img src={image} className={classes.image} alt="" />
            ))
        }
        </Carousel>


    )
}

export default Banner;