import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to={"/"}>Exercise Tracker App</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to={"/"}>Exercises</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/create-exercise"}>Add Exercise</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/edit-exercise"}>Edit Exercise</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/create-user"}>Create User</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;