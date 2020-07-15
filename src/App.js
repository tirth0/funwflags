import React,{Component} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Loader from './Components/Loader/Loader';
import Quiz from './Components/Quiz/Quiz';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
    this.state = {
      flags : [],
      options : []
    }
  }

  componentDidMount(){
    const allCountries = 'https://restcountries.eu/rest/v2/all';
    //const countryName  ='';
    //const getFlagsByFullName = `https://restcountries.eu/rest/v2/name/${countryName}fullText=true`;
    fetch(allCountries).then((data) => {
      return data.json();
    }).then(countries => {
      let flags = countries.map((country, ind) => {
        return {name : country.name,flag : country.flag};
      });
      
      this.setState({flags});
      this.generateOptions();
    }  
    ).catch(
      err => console.error(err)
    );
    
  }

  generateOptions(){
    const correctOption = this.state.flags[Math.floor(Math.random()*250)];
    const incorrectOption1 = this.state.flags[Math.floor(Math.random()*250)];
    const incorrectOption2 = this.state.flags[Math.floor(Math.random()*250)]; 
    const incorrectOption3 = this.state.flags[Math.floor(Math.random()*250)]; 
    const options = [correctOption, incorrectOption1,incorrectOption2,incorrectOption3];
    this.setState({options});
  }

  
  handleReset(){
    setTimeout(()=>{
      this.generateOptions();
    },300);
  }
  

  handleClick(){}
  render(){
    let view = <Loader />
    view = <Quiz 
           options = {this.state.options}
           handleReset = {this.handleReset}
          />
    return(
      <div className="container">
      <Navbar 
       handleReset = {this.handleReset}
      />
      {view}
      </div>
    );
  }
}

export default App;
