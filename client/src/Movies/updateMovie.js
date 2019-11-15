import React, { useState, useEffect } from 'react';
import axios from "axios";

const initialInfo = {
    name: '',
    director: '',
    metascore: ''
}

const UpdateMovieForm = (props) => {

    const [info, setInfo] = useState(initialInfo);

    const changeHandler = e => {
        e.preventDefault();
        let value = e.target.value;
        setInfo({
            ...info,
            [e.target.name]: value
        });
    }

    const EditMovie = e => {
        e.preventDefault();
        const id = props.match.params.id;
        axios
            .put(`http://localhost:5000/api/movies/${id}, info`)
            .then(res => {
                props.setInfo(res.data);
                props.history.push("/");
            })
            .catch(err => err)
    }


    return (
        <div>
            <form>
                <input onChange={changeHandler} type="text" value={info.name} name='name' placeholder='Movie Name' />
                <input onChange={changeHandler} type="text" value={info.director} name='director' placeholder='Director Name' />
                <input onChange={changeHandler} type="text" value={info.metascore} name='metascore' placeholder='Metascore' />
                <button type="submit" onSubmit={EditMovie}>Submit</button>
            </form>
        </div>
    );
}

export default UpdateMovieForm;