import React, { useState, useEffect } from 'react';
import axios from "axios";
import ReactTable from 'react-table';
import {JsonToTable} from "react-json-to-table";


export default () =>{

    const [students, setStudents] = useState({});
    
    const fetchStudents = async () =>{
        const res = await axios.get('/api/service/students');
        setStudents(res.data);
    };
    useEffect(() =>{
        fetchStudents();
    }, []);

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        <JsonToTable json={students}/>
    </div>
};
