import React from 'react'

import './quote-button.styles.scss'

const QuoteButton = ({ children, ...otherProps }) => (
    <button 
        {...otherProps}
    >
        {children}
    </button>
        
)


export default QuoteButton