import React, { useState } from 'react';

const ControlField = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);

        if (password.length < 6) {
            setError('6 characters or longer password needed.')
        }
        else {
            setError('')
        }

    }

    const handleNameOnChange = e => {
        setName(e.target.value);
    }

    const handleEmailOnChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordOnchange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError('Password must be 6 characters or longer.');
        }
        else {
            setError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' onChange={handleNameOnChange} defaultValue={name} />
                <br />
                <input type="email" name='email' placeholder='Email' onChange={handleEmailOnChange} defaultValue={email} required />
                <br />
                <input type="password" name='password' placeholder='Password' onChange={handlePasswordOnchange} defaultValue={password} required />
                <br />
                <input type="submit" value='Submit' />
            </form>

            <p style={{ color: 'red' }}><small>{error}</small></p>
        </div>
    );
};

export default ControlField;
