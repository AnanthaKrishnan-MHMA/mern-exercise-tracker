import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditExercise(props) {
    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState('');
    useEffect(() => {
        axios.get(`http://192.168.1.105:5000/exercises/id/${id}`)
            .then(currentEx => {
                setUsername(currentEx.data.username);
                setDescription(currentEx.data.description);
                setDuration(currentEx.data.duration);
                setDate(currentEx.data.date.substring(0,10));
            })
            .catch(err => console.log('Error: ' + err));

    },[id]);

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    const updateDescription = (e) => {
        setDescription(e.target.value);
    }
    const updateDuration = (e) => {
        setDuration(e.target.value);
    }
    const updateDate = (e) => {
        setDate(e.target.value);
    }
    const clickSubmit = (e) => {
        e.preventDefault();
        console.log(id);
        axios.put(`http://192.168.1.105:5000/exercises/edit/${id}`, { username, description, duration, date })
            .then(response => {
                console.log(response.data);
                window.location = '/';
            })
            .catch(err => console.log(`Error: ${err}`));
    }

    return (
        <form className="create-exercise row g-3 m-3">
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">username</label>
                <input type="text" className="form-control" id="username" onChange={updateUsername} value={username} />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">description</label>
                <input type="text" className="form-control" id="description" onChange={updateDescription} value={description} />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">duration[minutes]</label>
                <input type="number" className="form-control" id="duration" onChange={updateDuration} value={duration} />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Date</label>
                <input type="date" className="form-control" id="date" onChange={updateDate} value={date} />
            </div>
            <div className="col-12">
                <button onClick={clickSubmit} className="btn btn-primary">Apply</button>
            </div>
        </form>
    );
}

export default EditExercise;