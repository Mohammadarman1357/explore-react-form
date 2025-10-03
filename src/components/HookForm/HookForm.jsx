import React from 'react';
import useInputFiled from '../hooks/useInputFiled';

const HookForm = () => {
    const [name, nameOnChange] = useInputFiled('');
    const [email, emailOnChange] = useInputFiled('');
    const [password, passwordOnChange] = useInputFiled('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={nameOnChange} type="text" />
                <br />
                <input type="email" defaultValue={email} onChange={emailOnChange} name='email' />
                <br />
                <input type="password" defaultValue={password} onChange={passwordOnChange} />
                <br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default HookForm;

