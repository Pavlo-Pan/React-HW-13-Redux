import { connect } from 'react-redux';
import { setFilter } from '../../redux/action';

import styles from './FIlter.module.css'

const FIlter = ({ setFilter }) =>{
    const handleChange = e =>{
        setFilter(e.target.value);
    }

    return(
        <input type="text" 
        className={styles.filterInput}
        onChange={handleChange}
        placeholder='Filter users...'
        />
    )
}

export default connect(null,{setFilter})(FIlter);