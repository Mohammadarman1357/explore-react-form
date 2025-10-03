import React, { useState } from 'react';

const useInputFiled = (defaultValue) => {

    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldChange = e => {
        setFieldValue(e.target.value);
    }

    return [fieldValue, handleFieldChange];
};

export default useInputFiled;