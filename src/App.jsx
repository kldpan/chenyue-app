import React from 'react';
import Routers from "@/router"
import Tabs from "@/components/layout/tab"
import ResetCsss from "@/assets/reset.js"

class App extends React.Component{
  render(){
    return (
      <div>
        <ResetCsss/>
        <Routers/>
        <Tabs/>
      </div>
    )
  }
}

export default App;
