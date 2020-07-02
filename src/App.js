import React ,{Component} from 'react';
import { Cards } from './components';
import './App.css';


class App extends Component {
  state={
    articles:[]
  }





async  componentDidMount(){
    fetch('http://newsapi.org/v2/everything?q=india&from=2020-06-02&sortBy=publishedAt&description=covid&content=covid&apiKey=14494b4e09fe456797c88c77ab5af60a')
    .then((response)=>{
      return response.json();
    })
    .then((myJson)=>{
      this.setState({
        articles:myJson.articles
      })
      
    });
  }



  render()
  {
   
    
    return(

     <Cards articles={this.state.articles}/>
     
    
  

    )


    





    
        

    
  }
  
  }

export default App;



