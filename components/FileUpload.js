import React, { useState } from 'react';
import { upload } from '../api';

const FileUpload = ({ext, endpoint = undefined}) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // preventing the default behaviour of the form

        const formData = new FormData(); // creating form data object
        formData.append('file', file); // appending file to the form data object

        try {
            const { status } = await upload(formData, endpoint); // call the upload method from the APIHelper
            if (status == 200) {
                toast({
                    title: "File uploaded successfully",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            }
            else {
                const msg = "An error occurred while uploading the file";
                toast({
                    title: msg,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
                throw new Error(status, msg); // throw an error if the status code is not 200 (OK)
            }
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <input type="file" id="file-input" onChange={handleFileChange} accept={ext} />
            <button onClick={handleSubmit}>Upload File</button>
        </>
    );
}

export default FileUpload;