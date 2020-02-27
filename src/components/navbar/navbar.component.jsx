import React from 'react'

import SocialButton from '../social/social.component'
import '../navbar/navbar.styles.scss'

const Navbar = () => (
    <div className="nav navbar-expand-lg d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white fixed-top shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Logo</h5>
        <nav className="my-2 my-md-0 mr-md-3">
            <SocialButton 
                className="fa github"
                target="_blank"
                href="https://github.com/tinashe-88"
                title="github"
            >
                &#xf09b;
            </SocialButton>
            <SocialButton 
                className="fa instagram"
                target="_blank"
                href="https://www.instagram.com/tinashe88/"
                title="instagram"
            >
                &#xf16d;
            </SocialButton>
            <SocialButton 
                className="fa twitter"
                target="_blank"
                href="https://twitter.com/tinashe_88"
                title="twitter"
            >
                &#xf099;
            </SocialButton>
        </nav>
    </div>
)

export default Navbar