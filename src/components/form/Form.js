import React from 'react';
import {useState} from "react";

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const event = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...event})
        getFilter(event)
    }
    return (
        <div>
            <form>
                <label>Name:<input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label>UserName:<input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label>Email:<input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
            </form>
        </div>
    );
};

export default Form;
