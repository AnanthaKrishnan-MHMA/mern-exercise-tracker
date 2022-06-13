import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowExercise.css';

function ShowExercise(props) {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        axios.get('http://192.168.1.105:5000/exercises')
            .then(exercisesData => {
                setExercises(exercisesData.data);
                console.log(exercisesData)
            })
            .catch(err => console.log(`Error: ${err}`));
    }, []);
    const clickDelete = (id) => {
        console.log(id);
        axios.delete(`http://192.168.1.105:5000/exercises/delete/${id}`)
            .then(res => {
                console.log(res.data);
                setExercises(exercises.filter(el=> el._id!==id));
            })
            .catch(err => console.log('Error: ' + err));
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {exercises.map((exercise, k) => {
                    return (
                        <div key={k} className="exercise col-5 mx-auto my-2">
                            <p>{exercise.username}</p>
                            <p>{exercise.description}</p>
                            <p>{exercise.duration} mins</p>
                            <p>{exercise.date.substring(0, 10)}</p>
                            <Link to={`edit-exercises/${exercise._id}`} exercise={exercise} className="btn btn-primary">Edit</Link>
                            <button onClick={() => clickDelete(exercise._id)} className="btn btn-danger">Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ShowExercise;