import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import BasicExample from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Features from './components/Features'
import NotFound from './components/NotFound'
import WhitePaper from './components/WhitePaper'
import AuditReport from './components/AuditReport'
import Tokenomics from './components/Tokenomics'
import Team from './components/Team'
import Faq from './components/Faq'
import Blog from './components/Blog'
import './App.css'

const App = () => (
  <div className="">
        
    <div className="">
            
      <BasicExample />
            
      <div className="">
                
        <Switch>
                    
          <Route exact path="/" component={Home} />
                    
          <Route exact path="/about" component={About} />
                    
          <Route exact path="/features" component={Features} />
          <Route exact path="/whitepaper" component={WhitePaper} />
          <Route exact path="/auditreport" component={AuditReport} />
          <Route exact path="/tokenomics" component={Tokenomics} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/blog" component={Blog} />
                                                                           
                    
          <Route component={NotFound} />
                  
        </Switch>
              
      </div>
          
    </div>
      
  </div>
)

export default App
