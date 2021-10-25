import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { ErrorContainer, FormContainer, InputContainer, LabelContainer, OutputContainer, SmallText } from './HomeElements';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    };

    return (
        <>
        <FormContainer>
            <LabelContainer>
                <InputContainer type="file" onChange={handleChange} />
                <span>+</span>
            </LabelContainer>
            <SmallText>click the button to upload your picture</SmallText>
            <OutputContainer>
                {error && <ErrorContainer>{error}</ErrorContainer>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </OutputContainer>
        </FormContainer>
        </>
    );
}

export default UploadForm;