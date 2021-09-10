import React, {useEffect, useState} from 'react';



const SimpleInput = (props) => {
 const [enteredName, setEnteredName] = useState('');
const [enteredNameTouched , setEnteredNameTouched] = useState(false);

const enteredNameIsValid = enteredName.trim() !== '';
const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

 let formIsValid = false;

    if(enteredNameIsValid) {
      formIsValid = true;
    }
  
  

  const changeInputNameHandler = (event) => {
    setEnteredName(event.target.value);
  };


  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);


  };

  // if ye dono functions ko formsubmissionhanlder ke niche likhenge
  // to error ayega.

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if ( !enteredNameIsValid ) {
      return;
    } 
    
   

    setEnteredName(''); 
    setEnteredNameTouched(false);
  };

  

  const nameInputClasses = nameInputIsInvalid
     ? 'form-control invalid' 
     : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
           type='text'
           id='name'
           onChange={changeInputNameHandler}
           onBlur= {nameInputBlurHandler}
           value={enteredName} />
           {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// 