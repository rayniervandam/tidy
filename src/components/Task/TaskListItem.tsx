import React, { useState } from "react";
import './TaskListItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Task } from "../../types/task";

const TaskListItem = (props: any) => {
    const [task, setTask] = useState<Task>(props.task);

    return(<div className="task" onClick={() => {
                    setTask(task.toggleComplete());
                } }>
                <div className="task__state">
                    <div className="checkbox">
                        { task.isCompleted() ? <div className="animation__check" ><FontAwesomeIcon icon={faCheck} /></div> : '' }
                    </div>
                </div>
                <div className="task__info">
                    <div className="task__name">{task.name}</div>
                    <div className="task__description">{task.description}</div>                
                </div>
                <div className="task__time">
                    {getTimeDisplay(task.deadline)}
                </div>
            </div>
    );
}

const getTimeDisplay = (timestamp: number) => {
    const taskDate = new Date(timestamp).setHours(0,0,0,0);
    const today = new Date().setHours(0,0,0,0);



    if(taskDate === today) {
        return 'Today!'
    }

    return new Date(timestamp).getDate() + ' ' + new Date(timestamp).toLocaleString('default', { month: 'long' })
}

export default TaskListItem;