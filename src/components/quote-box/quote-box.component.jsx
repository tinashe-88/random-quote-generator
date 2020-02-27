import React from 'react'

import QuoteButton from '../quote-button/quote-button.component'
import SocialButton from '../social/social.component'

import './quote-box.styles.scss'

const QuoteBox = ({ assignQuoteIndex, selectedQuote }) => (
    <main className="container text-center">
        <div className="row my-3 p-3 bg-white rounded shadow-sm">    
            <p className="quote-text lead my-5 col-sm-12 col-md-12 font-weight-bolder">
                "{selectedQuote.quoteText}"
            </p>
            <hr className="my-2"/>
            <p className="my-3 col-sm-12 col-md-12">
                - <span id="author">{selectedQuote.quoteAuthor}</span>
            </p>
        </div>
        
        <div className="d-flex justify-content-md-around py-1">
            <QuoteButton 
                onClick={assignQuoteIndex}
                className="btn btn-block btn-outline-dark col-sm-4 my-2"
                type="button"
            >
                Next quote
            </QuoteButton>
            
            <SocialButton
                className="fa"
                title="Tweet this quote!"
                target="_blank"
                href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quoteText}&text=${selectedQuote.quoteAuthor}&hashtags=tinashe88`)}
            >
                &#xf081;
            </SocialButton>
        </div>
    </main>
)


export default QuoteBox