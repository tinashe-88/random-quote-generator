import React, { useEffect, useState } from 'react'

import { random } from 'lodash'

import QuoteBox from './components/quote-box/quote-box.component.jsx'
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'

import './App.css';

function App() {
    const [quotes, setQuotes] = useState([])
    const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null)

    useEffect(() => {
      async function fetchData() {
        const data = await fetch('https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json')
        const quotes = await data.json()

        setQuotes(quotes)
        setSelectedQuoteIndex(random(0, quotes.length - 1))
      }

      fetchData()
    }, [])

    const getSelectedQuote = () => {
        if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
            return undefined
        }

        return quotes[selectedQuoteIndex]
    }

    const selectQuoteIndex = () => {
      if (!quotes.length) return undefined

      return random(0, quotes.length - 1)
    }

    const assignQuoteIndex = () => setSelectedQuoteIndex(selectQuoteIndex())

    return (
      <div className="">
        <Navbar />
        <div className="m-5">
          {
            getSelectedQuote() ? 
            <QuoteBox 
              selectedQuote={getSelectedQuote()} 
              assignQuoteIndex={assignQuoteIndex}
            /> :
            null
          }
        </div>
        <Footer/>
      </div>
    )

}

export default App;
