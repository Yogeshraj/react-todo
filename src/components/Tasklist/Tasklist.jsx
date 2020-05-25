import React, {useState, useEffect, useRef} from 'react';
import styles from './Tasklist.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';


function Tasklist({data}){
    const [taskData, settaskData] =useState([]);
    const isInitialMount = useRef(true);

    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const newTasks = [...taskData,{ data:data, completed: false }];
            settaskData(newTasks);
            // console.log(isInitialMount.current);
        }
    }, [data]);

    const Loader = () =>{
        return (
            <p>Please enter the task!</p>
        )
    }

    const deleteTask = (i) =>{
        const updateTask = [...taskData];
        updateTask.splice(i, 1);
        settaskData(updateTask);
    }

    const checkChange = (i, event) =>{
        const updateTask = [...taskData];
        updateTask[i].completed = event.target.checked;
        settaskData(updateTask);
    }



    return(
    <div className={styles.taskbox}>
        {taskData.map((task, i) => (
            <div style={{textDecoration : task.completed ? "line-through" : '' }} className={styles.tasks} key={i}>
                <span><Checkbox value={`checked${i}`} onChange={(event)=>checkChange(i, event)} name={`checked${i}`} color="primary"/></span> 
                {task.data}
                {task.completed ? <span className={styles.delete} onClick={() => deleteTask(i)}><DeleteIcon /></span> : ''}
            </div>
        ))}
    </div>
    // <div className={styles.taskbox}>
    //     {data.length > 0 ? taskData.map((task, i) => (
    //                 <div className={styles.tasks} key={i}>{task.data}</div>
    //             )) : <Loader />}
    // </div>
    )
}

export default Tasklist;