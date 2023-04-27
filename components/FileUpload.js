import React, { useState } from 'react';
import { upload } from '../api';

const FileUpload = ({ext=undefined, endpoint=undefined, className=undefined, id="file-upload"}) => {
    const [file, setFile] = useState(null);

    /**
     * Uses the setFile method from the useState hook to set the file state to the file selected by the user in the `<input>` element.
     * @function handleFileChange handles the file change event from the `<input>` element in the HTML DOM
     * @param {Event} event the event object from the `<input>` element (_onChange_ event expected)
     * @example
     * <input type="file" onChange={handleFileChange} />
    **/
    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // set the file state to the file selected by the user in the <input> element
    };

    /**
     * Uses the upload method from the APIHelper to upload the file(s) form the `<input>` element to the server.
     * @function handleSubmit handles the submit event from the trigger element in the HTML DOM
     * @param {Event} event the event object from the element (_onClick_ event expected)
     * @example
     * <button onClick={handleSubmit}>Submit</button>
    **/
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
            {(ext) ?
                <input type="file" id={id} className={className ? className : ''} onChange={handleFileChange} accept={ext} /> : // if ext is defined, set the accept attribute of the <input> element
                <input type="file" id={id} className={className ? className : ''} onChange={handleFileChange} /> // if ext is not defined, do not set the accept attribute of the <input> element
            }
            <button onClick={handleSubmit}>Upload File</button>
        </>
    );
}

export default FileUpload;