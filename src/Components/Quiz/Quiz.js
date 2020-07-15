import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Quiz.css';
import Loader from '../Loader/Loader';

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            correct : {},
            correctStyle : 'green',
            incorrectStyle : '#EB2848',
            defaultStyle : '#2B76CC'
        }
        this.handleClick = this.handleClick.bind(this);
        this.onCorrect = this.onCorrect.bind(this);
        this.onIncorrect = this.onIncorrect.bind(this);
    }
    componentDidUpdate(previousProps, previousState){
       let correct ={};
       if (previousProps.options && previousProps !== this.props){
           correct = this.props.options[Math.floor(Math.random()*4)];
           this.setState({correct});
       }

    }
    
    onCorrect(e){
        setTimeout(()=>{
            e.target.style.backgroundColor = this.state.defaultStyle;
            this.props.handleReset();
        },1000);
    }

    onIncorrect(e){
        setTimeout(()=>{
            e.target.style.backgroundColor = this.state.defaultStyle;
        },500);
    }

    handleClick(e){
        e.persist();
        
        if (e.target.value === this.state.correct.name){
            e.target.style.backgroundColor = this.state.correctStyle;
            this.onCorrect(e);
        }
        else{
            e.target.style.backgroundColor = this.state.incorrectStyle;
            this.onIncorrect(e);
        }

    }
        
    
    render() {
        const style = {backgroundColor : '#2B76CC'};
        const options = this.props.options.map((elem, ind) => (
            <button 
            key={ind} 
            className="option" 
            type="button" 
            value={elem.name}
            style = {style}
            onClick ={(e) => this.handleClick(e)}
            >
                {elem.name}
            </button> 
        ));
        const img = this.state.correct? <img 
        src={this.state.correct.flag} 
        alt={this.state.correct.name}/> : <Loader />
        return (
            <div className="container-quiz-flag">
                <div className="container-quiz">
                    <h3>Which Country Does This Flag Represent?</h3>
                    {options}
                </div>
                <div className="container-flag"> 
                    {img}
                </div>
            </div>
        );
    }
}

Quiz.propTypes = {
    options : PropTypes.arrayOf(PropTypes.object).isRequired,
    handleReset : PropTypes.func.isRequired
}

export default Quiz;