import React from 'react'

const SocialButton = ({ children, ...otherProps }) => (
    <a
        {...otherProps}
    >
        {children}
    </a>
)

export default SocialButton