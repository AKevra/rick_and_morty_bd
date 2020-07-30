
import { createUseStyles } from 'react-jss';

const styles = createUseStyles ({
    Nav:{
        '& a' : {
            marginRight: '10px',
            '& a:last-child': {
                marginRight: '0px', 
            }
        }
    }

})
export default styles;