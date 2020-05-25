import React, {useState} from 'react';
import styles from './Todo.module.css';


const Todo = ({ handleChange  }) =>{
    const [inputVal, setinputVal] = useState([]);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(inputVal.trim());
    setinputVal('');
  }
    return(
        <div className={styles.todocontainer}>
            <form onSubmit={handleSubmit}>
                <input type="text" className={styles.inputbox} placeholder="Enter the task" value={inputVal} onChange={(e)=> setinputVal(e.target.value) } />
            </form>
        </div>
    )
}

export default Todo;