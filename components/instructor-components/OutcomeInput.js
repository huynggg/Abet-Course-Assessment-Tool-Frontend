import React, { useState } from 'react';
import {
    Box,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text,
    Divider,
    List,
    ListItem,
    Input,
    IconButton
} from '@chakra-ui/core';
import useInputState from '../../hooks/useInputState';

const OutcomeInput = ({outcome, index, studentsByMajor, currentStudentWorks}) => {
    const [studentWork, setStudentWork, reset] = useInputState("");
    const [studentWorks, setStudentWorks] = useState([currentStudentWorks]);

    /**
     * @function addStudentWork removes a student work from the list of student works
     * @param {Event} e the HTML DOM event that triggered the function
    **/
    const addStudentWork = (e) => {
        e.preventDefault(); // prevents the page from reloading when the form is submitted
        setStudentWorks([
            ...studentWorks, // spread operator: copies all the elements from studentWorks
            {
                id: studentWorks.length,
                studentWork: studentWork,
            }
        ]); // adds the new student work to the list of student works
        reset(); // resets the input
    };

    /**
     * @function removeStudentWork removes a student work from the list of student works
     * @param {Event} e the HTML DOM event that triggered the function
     * @param {number} id the id of the student work to be removed
    **/
    const removeStudentWork = (e, id) => {
        e.preventDefault(); // prevents the page from reloading when the form is submitted
        setStudentWorks(studentWorks.filter(work => work.id !== id)); // filters out the student work with the id that matches the id of the student work to be removed
    };

    /**
     * @function renderStudentWork renders the list of student works
     * @returns {React.ReactNode} the JSX element for the list of student works
    **/
    const renderStudentWork = studentWorks.map((work, index) => {
        return (
            <Box display="flex" alignItems="center">
                <ListItem color="">{work[index].studentWork}</ListItem>
                <IconButton ml="1rem" icon="delete" onClick={(e)=>{
                    e.preventDefault();
                    removeStudentWork(work.id);
                }}></IconButton>
                <IconButton ml="1rem" icon="attachment"></IconButton>
            </Box>
        );
    });
   
    /**
     * @function renderStudentNumberMenu renders the menu for selecting the number of students for each major
     * @returns {React.ReactNode} the JSX element for the menu
    **/
    const renderStudentNumberMenu = Object.keys(studentsByMajor).map((key, index) => {
        const [value, setValue] = useState(0);
        const handleChange = (value) => {
            (value > studentsByMajor[key]) ?
                setValue(0) : // if the value is less than the number of students in the major, set the value to the value
                setValue(value); // if the value is greater than the number of students in the major, set the value to the number of students in the major
        };
        return (
            <Box>
                <Text >{key}</Text>
                <NumberInput min={0} max={studentsByMajor[key]} value={value} onChange={handleChange}>
                    <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Text color="green.500" fontWeight="bold">{`${Math.round(value/studentsByMajor[key]*100)}%`}</Text>
            </Box>
        );
    });

    return (
        <div>
            <div className="outcome-input">
                <div className="vertical-container">
                    <Text fontSize="lg" fontWeight="bold">Course Outcome {++index}</Text>
                    <Text fontSize="lg">"{outcome}"</Text>
                </div>
                <div className="vertical-container">
                    <Text fontSize="lg" fontWeight="bold">Student Work Used</Text>
                    <List styleType="disc">
                        {renderStudentWork}
                    </List>
                    <form onSubmit={addStudentWork}>
                        <Input 
                            placeholder="add student work" 
                            variant="flushed" 
                            type="text" 
                            value={studentWork} 
                            onChange={setStudentWork}
                        />
                    </form>
                </div>
                <div className="vertical-container">
                    <Text fontSize="lg" fontWeight="bold">Number of Students Who Achieved 75% of this Outcome</Text>
                    <div className="student-outcome-container">
                        {renderStudentNumberMenu}
                    </div>
                </div>
            </div>
            <Divider borderColor="black"/>
        </div>
    );
}

export default OutcomeInput;