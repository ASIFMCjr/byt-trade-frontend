import React, {useState, useEffect} from 'react'
import DatePicker from 'react-datepicker'
import './style.css'
import binance from '../../assets/tp/Binance_logo.svg'
import bybit from '../../assets/tp/Bybit.svg'
import okx from '../../assets/tp/OKX_Logo.svg'
import kucoin from '../../assets/tp/KUCOIN.svg'
import usdt from '../../assets/coins/tether-usdt-logo.svg'
import btc from '../../assets/coins/bitcoin-sv-1.svg'
import eth from '../../assets/coins/Ethereum_logo_2014.svg'

const Rules = () => {
    const today = new Date().toJSON().slice(0, 16)
    const timezoneOffset = -(new Date()).getTimezoneOffset() / 60;
    const [startDate, setStartDate] = useState(today)
    const [executeMinutes, setExecuteMinutes] = useState(0)
    const [shoulderCounter, setShoulderCounter] = useState(0)
    const [stopLoss, setStopLoss] = useState(0)
    const [takeProfit, setTakeProfit] = useState(0)
    const [windowSize, setWindowSize] = useState(0)
    const [insuranceCoefficient, setInsuranceCoefficient] = useState(0)
    const [moneyValue, setMoneyValue] = useState(0)
    const [moneyRange, setMoneyRange] = useState(0)

    const [typeOfBot, setTypeOfBot] = useState('')
    const [exchange, setExchange] = useState('')
    const [coin, setCoin] = useState('')
    const [mode, setMode] = useState('')

    useEffect(() => {
        if (shoulderCounter < 0) {
            setShoulderCounter(0)
            
        } else if (shoulderCounter > 10) {
            setShoulderCounter(10)
        }
    }, [shoulderCounter])

    useEffect(() => {
        if (executeMinutes < 0) {
            setExecuteMinutes(0)
            
        }
    }, [executeMinutes])

    useEffect(() => {
        if (startDate < today) { setStartDate(today) }
    }, [startDate])
    

    const sendData = () => {
        if (
            // typeOfBot != '' &&
            exchange != '' &&
            coin != '' &&
            mode != ''
        ) {
            alert('Great')
            console.log({
                'Type of bot': typeOfBot,
                'Exchange': exchange,
                'Coin': coin,
                'Mode': mode,
                'Credit shoulder': shoulderCounter,
                'Stop Loss': stopLoss,
                'Take Profit': takeProfit,
                'Window Size': windowSize,
                'Insurance Coefficient': insuranceCoefficient,
                'Money Value': moneyValue,
                'Money Range': moneyRange,
            })
        } else {alert('Something went wrong'); console.log('No!')}
    }


    const [ruleModules, setRuleModules] = useState([])

    const RuleModule = (type) => {
        const ruleType = type.type
        console.log(ruleModules.length)
        let delKey = ruleModules.length
        // const key = ruleModules.length

        const IfRule = (delKey) => {
            return (
                <div className="rulemodule">
                    <header className='rulemodule__header' style={{}}>
                        <span style={{color: 'blue', width:'75px', borderBottom: '3px solid blue'}}>If</span>
                        <button className='rulemodule__header-delbtn' onClick={() => setRuleModules(ruleModules.splice(delKey, 1)) }>x</button>
                    </header>
                    <div className="rulemodule__body" style={{boxShadow: '-5px 7px 3px 0px rgba(0, 98, 255, 1)'}}>
                        <div className="rulemodule__body-item">
                            <select name="coin" className='rulemodule__body-selectcoin'>
                                <option value="">any coin</option>
                                <option value="btc">bitcoin</option>
                                <option value="eth">ethereum</option>
                                <option value="usdt">usdt</option>
                            </select>
                        </div>
                        <div className="rulemodule__body-item">has</div>
                        <div className="rulemodule__body-item">
                            <select name="..." className='rulemodule__body-selectother'>
                                <option value="">...</option>
                            </select>
                        </div>
                        <div className="rulemodule__body-item">
                            <select name="..." className='rulemodule__body-selectother'>
                                <option value="">...</option>
                            </select>
                        </div>
                        {/* <button className='closemodule-btn' onClick={}>x</button> */}
                    </div>
                </div>
            )
        }

        const ActionRule = (delKey) => {
            return (
                <div className="rulemodule">
                    <header className='rulemodule__header' style={{borderBottom: '3px solid green'}}>
                        <span style={{color: 'green'}}>Action</span>
                    </header>
                    <div className="rulemodule__body" style={{boxShadow: '-5px 7px 3px 0px #09a100'}}>
                        <div className="rulemodule__body-item">
                            <select name="buy" className='rulemodule__body-selectother'>
                                <option value="BUY">BUY</option>
                                <option value="SELL">SELL</option>
                                <option value="HOLD">HOLD</option>
                            </select>
                        </div>
                        <div className="rulemodule__body-item">
                            <select name="coin" className='rulemodule__body-selectcoin'>
                                <option value="">any coin</option>
                                <option value="btc">bitcoin</option>
                                <option value="eth">ethereum</option>
                                <option value="usdt">usdt</option>
                            </select>
                        </div>
                        <div className="rulemodule__body-item">has</div>
                        <div className="rulemodule__body-item">
                            <select name="..." className='rulemodule__body-selectother'>
                                <option value="">...</option>
                            </select>
                        </div>
                        <div className="rulemodule__body-item">
                            <select name="..." className='rulemodule__body-selectother'>
                                <option value="">...</option>
                            </select>
                        </div>
                    </div>
                </div>
            )
        }

        const OperatorRule = (delKey) => {
            return (
                <div className="rulemodule">
                    <header className='rulemodule__header' style={{borderBottom: '3px solid pink'}}>
                        <span style={{color: 'pink'}}>Operator</span>
                    </header>
                    <div className="rulemodule__body" style={{boxShadow: '-5px 7px 3px 0px pink'}}>
                        <div className="rulemodule__body-item">
                            <select name="coin" className='rulemodule__body-selectcoin'>
                                <option value="">any coin</option>
                                <option value="btc">bitcoin</option>
                                <option value="eth">ethereum</option>
                                <option value="usdt">usdt</option>
                            </select>
                        </div>
                        <div className="rulemodule__body-item">has</div>
                        <div className="rulemodule__body-item">
                            <select name="..." className='rulemodule__body-selectother'>
                                <option value="">...</option>
                            </select>
                        </div>
                        <div className="rulemodule__body-item">
                            <select name="..." className='rulemodule__body-selectother'>
                                <option value="">...</option>
                            </select>
                        </div>
                    </div>
                </div>
            )
        }

        const SpecsRule = (delKey) => {
            return (
                <div className="rulemodule">
                    <header className='rulemodule__header'>
                        <span style={{color: 'orange',borderBottom: '3px solid orange', width: '100px'}}>GO</span>
                    </header>
                    <div className="rulemodule__body" style={{boxShadow: '-5px 7px 3px 0px orange', height: '150px'}}>
                        <div className="rulemodule__body-go">
                            <div className="rulemodule__body-go_item">Name your rule</div>
                            <div className="rulemodule__body-go_item"><input type="text" id='rulename' placeholder='The best strategy in the world!'/></div>
                            <div className="rulemodule__body-go_time rulemodule__body-go_item">
                                <div className="rulemodule__body-item" style={{margin: 'auto', marginRight: '10px'}}>Start</div>
                                <div className="rulemodule__body-item">
                                    {/* <button></button> */}
                                    <input type="datetime-local" id="datetimeinput" name="trip-start"
                                        onChange={(date) => {setStartDate(date.target.value); console.log(date.target.value)}}
                                        value={startDate}
                                        min={today} placeholder='Immediately' className='datepicker-input'/>
                                </div>
                                <div className="rulemodule__body-item" style={{margin: 'auto', marginRight: '10px'}}>
                                    for
                                </div>
                                <div className="rulemodule__body-item">
                                    {/* <button></button> */}
                                    <input type="number" id="datetimeinput" name="trip-start"
                                        style={{width: '30px', textAlign: 'center'}}
                                        onChange={(minutes) => setExecuteMinutes(Number(minutes.target.value))}
                                        value={executeMinutes}
                                        className='datepicker-input'/>
                                </div>
                                <div className="rulemodule__body-item" style={{margin: 'auto', marginRight: '10px'}}>
                                    minutes
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        }
        
        return (
            <>
                {
                    ruleType == 'IF'
                    ? <IfRule delKey={delKey}/>
                    : ruleType == 'ACTION'
                    ? <ActionRule delKey={delKey}/>
                    : ruleType == 'OPERATOR'
                    ? <OperatorRule delKey={delKey}/>
                    : <SpecsRule />
                }
            </>
        )
    }

    const addRuleBlock = (type) => {
        setRuleModules(ruleModules.concat(<RuleModule type={type} key={ruleModules.length} />))
    }

  return (
    <div className="tradingbots">
        <header className="header">
            <div className="header__left">
                <h2 style={{marginBottom: '10px'}}>Create your ideas</h2>
                <span><img/>Top rules-bots per</span>
                <select name="topstrategies" id="timeselect">
                    <option value="day">day</option>
                    <option value="week">week</option>
                    <option value="month">month</option>
                </select>
            </div>
            <div className="header__right">
                <h2 style={{marginBottom: '10px'}}>Just click</h2>
                <span style={{marginBottom: '10px'}}><img/>Smart guide</span><br/>
                <span style={{marginBottom: '10px'}}><img/>Templates</span>
            </div>
        </header>
        <div className="tb__main">
            
            <div className="exchange tb__main-block">
                <h3>Choose Exchange</h3>
                <div className="btns__div">
                    <button className={`${exchange == 'BINANCE' ? 'activebtn' : 'btn'}`} onClick={() => {setExchange('BINANCE')}}><img src={binance} height="40px" width='100px' alt="Binance" /></button>
                    <button className={`${exchange == 'OKX' ? 'activebtn' : 'btn'}`} onClick={() => {setExchange('OKX')}}><img src={okx} height="40px" width='100px' alt="OKX" /></button>
                    <button className={`${exchange == 'KUCOIN' ? 'activebtn' : 'btn'}`} onClick={() => {setExchange('KUCOIN')}}><img src={kucoin} height="40px" width='100px' alt="KUCOIN" /></button>
                    <button className={`${exchange == 'BYBIT' ? 'activebtn' : 'btn'}`} onClick={() => {setExchange('BYBIT')}}><img src={bybit} height="40px" width='100px' alt="ByBit" /></button>
                </div>
                
            </div>
            <div className="coin tb__main-block">
                <h3>Choose coin</h3>
                <div className="btns__div">
                    <button className={`${coin == 'BTC' ? 'activebtn' : 'btn'}`} onClick={() => {setCoin('BTC')}}><img src={btc} width="30px" height="30px"/><span>BTC Bitcoin</span></button>
                    <button className={`${coin == 'ETH' ? 'activebtn' : 'btn'}`} onClick={() => {setCoin('ETH')}}><img src={eth} width="30px" height="30px"/>ETH ethereum</button>
                    <button className={`${coin == 'USDT' ? 'activebtn' : 'btn'}`} onClick={() => {setCoin('USDT')}}><img src={usdt} width="30px" height="30px"/>USDT tether</button>
                </div>
                
            </div>
            <div className="mode tb__main-block">
                <h3>Choose mode</h3>
                <div className="btns__div">
                    <button className={`${mode == 'SPOT' ? 'activebtn' : 'btn'}`} onClick={() => {setMode('SPOT')}}><span style={{color: 'blue'}}>Spot</span></button>
                    <button className={`${mode == 'FUTURES' ? 'activebtn' : 'btn'}`} onClick={() => {setMode('FUTURES')}}><span style={{color: 'orange'}}>Futures</span></button>
                </div>
                <div className="shoulderdiv">
                    <button 
                    className='plusminusbtn' 
                    onClick={() => setShoulderCounter(shoulderCounter - 1)}>
                        -
                    </button>
                    <div style={{margin: '0 10px',backgroundColor: '#eee', borderRadius:'5px', width: '175px'}}>
                        credit shoulder<input 
                        style={{backgroundColor: '#eee'}} 
                        type='number' 
                        placeholder='0' 
                        id='creditshoulderinput' 
                        onChange={(text) => setShoulderCounter(Number(text.target.value))}  
                        value={shoulderCounter}/>x
                    </div>
                    <button 
                    className='plusminusbtn' 
                    onClick={() => setShoulderCounter(shoulderCounter + 1)}>
                        +
                    </button>
                </div>
                
            </div>
            <div className="stoploss__container tb__main-block">
                <h3>Choose Stop Loss</h3>
                <div className="stoploss">
                    <div className="stoploss_simple">
                        <h4>Simple Sl and TP</h4>
                        <div className="stoploss_simple-stoploss stoploss_simple-element">
                            <div className='stoploss__element-text' >
                                <span>Stop Loss</span>
                                <span 
                                style={{backgroundColor: '#eee'}} 
                                className='stoploss-input'
                                >{stopLoss}</span>
                            </div> 
                            <div className='stoploss__element-percent' >
                                <input 
                                style={{backgroundColor: '#eee'}} 
                                type='number' 
                                placeholder='0' 
                                className='stoploss-input'
                                value={stopLoss}
                                onChange={(text) => setStopLoss(Number(text.target.value))}  
                                />
                                <span style={{color: '#fff'}}>%</span>
                               
                            </div> 
                        </div>
                        
                        <div className="stoploss_simple-takeprofit stoploss_simple-element">
                            <div className='stoploss__element-text' >
                                <span>Take Profit</span>
                                <span 
                                style={{backgroundColor: '#eee'}} 
                                className='stoploss-input'
                                >{takeProfit}</span>
                            </div>
                            <div className='stoploss__element-percent' >
                                <input 
                                style={{backgroundColor: '#eee'}} 
                                type='number' 
                                placeholder='0' 
                                className='stoploss-input'
                                value={takeProfit}
                                onChange={(text) => setTakeProfit(Number(text.target.value))}  
                                />
                                <span style={{color: '#fff'}}>%</span>
                                
                            </div> 
                        </div>
                    </div>

                    <div className="stoploss_trailing">
                        <h4>Trailing Sl and TP</h4>
                        <div className="stoploss_simple-windowsize stoploss_simple-element">
                            <div className='stoploss__element-text' >
                                <span>Window Size</span>
                                <span 
                                style={{backgroundColor: '#eee'}} 
                                className='stoploss-input'
                                >{windowSize}</span>
                            </div>
                            <div className='stoploss__element-percent' >
                                <input 
                                style={{backgroundColor: '#eee'}} 
                                type='number' 
                                placeholder='0' 
                                className='stoploss-input'
                                value={windowSize}
                                onChange={(text) => setWindowSize(Number(text.target.value))}   
                                />
                                <span style={{color: '#fff'}}>%</span>
                                
                            </div> 
                        </div>
                        
                        <div className="stoploss_simple-insurancecoefficient stoploss_simple-element">
                            <div className='stoploss__element-text'>
                                <span style={{fontSize: '0.75rem'}}>Insurance Coefficient</span>
                                <span 
                                style={{backgroundColor: '#eee'}} 
                                className='stoploss-input'
                                >{insuranceCoefficient}</span>
                            </div>
                            <div className='stoploss__element-percent'>
                                <input 
                                style={{backgroundColor: '#eee'}} 
                                type='number' 
                                placeholder='0' 
                                className='stoploss-input'
                                value={insuranceCoefficient}
                                onChange={(text) => setInsuranceCoefficient(Number(text.target.value))}  
                                />
                                <span style={{color: '#fff'}}>%</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="strategy tb__main-block">
                <h3>Create strategy</h3>
                <RuleModule type={"SPECS"} />
                <button className='addmodule-btn' style={{backgroundColor: 'blue'}} onClick={() => addRuleBlock('IF')}>If</button>
                <button className='addmodule-btn' style={{backgroundColor: 'green'}} onClick={() => addRuleBlock('ACTION')}>Action</button>
                <button className='addmodule-btn' style={{backgroundColor: 'pink'}} onClick={() => addRuleBlock('OPERATOR')}>Operator</button>
                {ruleModules}


            </div>
            <div className="valuepair tb__main-block">
                <button className="savebtn" onClick={() => alert('пока пусто')}>Save rule</button>
            </div>
        </div>
    </div>
    
  )
}

export default Rules