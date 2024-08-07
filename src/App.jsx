import { useState } from 'react'
import { InputBox } from './Components'
import bgImage from './images/bgimage.jpg'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const[amount,setAmount]=useState(0);
  const[to,setTo]=useState("INR")
  const[from,setFrom]=useState("USD")
  const[convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  

  const swap=()=>{
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert=()=>{setConvertedAmount(amount*currencyInfo[to])}

  return (
      <div className='w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat object-cover' style={{
        backgroundImage: `url(${bgImage})`
        }}>
          <div className='w-full'>
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                selectCurrency={from}
                                onCurrencyChange={(curr)=>setFrom(curr)}
                                onAmountChange={(amt)=>setAmount(amt)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                               label="To"
                               amount={convertedAmount}
                               currencyOptions={options}
                               onCurrencyChange={(curr)=>setTo(curr)}
                               selectCurrency={to}
                               amountDisabled 
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
          </div>
      </div>
  )
}

export default App
