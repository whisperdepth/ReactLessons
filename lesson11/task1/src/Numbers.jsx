import React from 'react';
import PropTypes from 'prop-types';

class Numbers extends React.PureComponent{

    /* shouldComponentUpdate(nextProps){
       return this.props.number === nextProps.number || this.props.title === nextProps.title;
    } */

    render(){
        const { title, number } = this.props;
        return(
            <div className='number'>
                <span className='number__title'>
                    {title}
                </span>
                <span className='number__value'>
                    {number}
                </span>
            </div>
        )
    }
}

Numbers.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number.isRequired,
}

Numbers.defaultProps = {
    title: 'Some number'
}

export default Numbers;