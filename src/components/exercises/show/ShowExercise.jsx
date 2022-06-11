import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowExercise.css';

function ShowExercise(props) {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:5000/exercises')
            .then(exercises => {
                setExercises(exercises.data);
            })
            .catch(err => console.log(`Error: ${err}`));
    });
    // const clickEdit=(id)=>{
    //     console.log(id);
    //     axios.put(`http://localhost:5000/exercises/edit/${id}`)
    //         .then()
    // }
    // clickDelete=()=>{

    // }
    return (
        <div className="container-fluid">
            <div className="row">
                {exercises.map((exercise, k) => {
                    return (
                        <div key={k}className="exercise col-5 mx-auto my-2">
                            <p>{exercise.username}</p>
                            <p>{exercise.description}</p>
                            <p>{exercise.duration} mins</p>
                            <p>{exercise.date.substring(0,10)}</p>
                            <Link to={'/edit-exercise'} id={exercise._id} className="btn btn-primary">Edit</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ShowExercise;