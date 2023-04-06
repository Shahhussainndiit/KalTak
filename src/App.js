import './App.css';

// Class Base Component Use rce 
// import React, { Component } from 'react'
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter, Routes, Route} from "react-router-dom";

// export default class App extends Component {
 const App = ()=> {
  const pageSize = 9
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  // setProgress = (progress)=>{
  //   this.setState({progress:progress})
  // }
   
 
  // render(){
    return (
      <>
      <div>
        <BrowserRouter>
          <Navbar/>
           <LoadingBar
           height={3}
              color='#f11946'
              // progress={state.progress}
              progress={progress}
          />
          <Routes >
            <Route exact path="/" element={<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category="general"/>}/> 
            <Route exact path="/business" element={<News  setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country='in' category="business"/>}/> 
            <Route exact path="/entertainment" element={<News  setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country='in' category="entertainment"/>}/>
            <Route exact path="/general" element={<News  setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country='in' category="general"/>}/>  
            <Route exact path="/health" element={<News  setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country='in' category="health"/>}/> 
            <Route exact path="/science" element={<News  setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country='in' category="science"/>}/> 
            <Route exact path="/sports" element={<News  setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country='in' category="sports"/>}/> 
            <Route exact path="/technology" element={<News  setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country='in' category="technology"/>}/> 
          </Routes>
        </BrowserRouter>
      </div>
      </>
    )
  // }
}

export default App;


// API KEY : 18ba59f632db4f8c90c238600808fa0d
// New API KEY: f46dfad3a6084eeeb1498c336a34d1ed
