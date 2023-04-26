//imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";

import {
  Button,
  Text,
  Box,
  Flex,
  useToast,
  Center,
  Textarea,
} from "@chakra-ui/react";

//api
import {
  GetStudentOutcomesCompleted,
  SetStudentOutcomesCompleted,
  getSection,
  getGrades,
  setGrades,
} from "../api/APIHelper";
//components
import GradesInput from "../components/form-components/GradesInput";
import CourseOutcomesMapping from "../components/form-components/CourseOutcomesMapping";
import blankForm from "../components/form-components/blankForm.json";
import Navigation from "../components/instructor-components/Navigation";

const formCompletion = ({ number, section, term, year, department }) => {
  const router = useRouter(); // for redirecting to other pages
  const toast = useToast({ position: "top" });

  const [gradeForm, setGradeForm] = useState();
  const [outcomeForm, setOutcomeForm] = useState();
  const [comment, setComment] = useState(""); // must be an empty string, not null or undefined
  const [refreshKey, setRefreshKey] = useState(0); //For refreshing the table
  
  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  const checkUser = async () => {
    const ISSERVER = typeof window === "undefined"; // check if we are in the server environment; true if in server environment, false if in client environment
                                                    // necessary because server does not have session cookies
    if (!ISSERVER) { // if we are in the client environment
      const token = cookieCutter.get("token"); // get the token from the session cookie

      const decoded = jwt.decode(token); // decode the token using the JWT library
      if (!decoded) // if the token is invalid, expired, null, or undefined
        router.push("/Login"); // redirect to login page
      
      const userId = decoded.unique_name; // get the user's EUID from the token
      const sectionInstructorEUID = await getSectionInformation();
      if (userId != sectionInstructorEUID) { // if the user is not the same as the section instructor for the selected section
        toast({
          title: "Error",
          description: `This section instructor is not the same as the login user!`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        router.push("/"); // redirect to home page
      }
    }
  };

  const getSectionInformation = async () => {
    try {
      const response = await getSection(
        term,
        year,
        department,
        number,
        section
      );

      const { data } = response;
      const { status } = response;
      if (status != "Success") { // status is NOT "Success"
        const msg = "An error occured while fetching the section information!";
        const e = new Error(msg, response);
        toast({
          title: "Error",
          description: `${msg}\nError: ${status}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        throw e;
      }
      else if (!data) { // if there is no data or undefined
        const msg = "No data returned from API call!";
        const e = new Error(msg, response);
        toast({
          title: "Error",
          description: msg + " See the console for more details.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        throw e;
      }
      return data.instructorEUID; // return the instructorEUID of the section // why only EUID?
    }
    catch (error) {
      console.error(error);
    }
  };

  const getGradeForm = async () => {
    try {
      const response = await getGrades(
        year,
        term,
        department,
        number,
        section
      ); // NOTE: variables are passed in to the component as props

      const { data } = response;
      if (!data) { // if there is no data or undefined
        const msg = "No data returned from API call!";
        const e = new Error(msg, response);
        toast({
          title: "Error",
          description: msg + " See the console for more details.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        throw e;
      }
      else {
        if (Object.keys(data).length < 1) {
          //If the is the first time working on the form then create a blank form
          await setGrades(year, term, department, number, section, blankForm); // NOTE: variables are passed in to the component as props, blankForm is the default form imported from the json file
          setGradeForm(blankForm);
        }
        else if (Object.keys(data).length >= 1) {
          setGradeForm(data);
        }
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  const getOutcomeForm = async () => {
    try {
      const response = await GetStudentOutcomesCompleted(
        year,
        term,
        department,
        number,
        section
      ); // NOTE: variables are passed in to the component as props
      const { data } = response;
      setOutcomeForm(data);
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleGradeChange = (major, grade, newValue) => {
    try {
      let tempForm = gradeForm[major]; // gets the major from the gradeForm
      tempForm[grade] = newValue; // sets the grade to the new value from the function parameter
      setGradeForm({
        ...gradeForm, // spread operator: copies the existing gradeForm
        [major]: tempForm, // sets the major to the new tempForm
      });
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleOutcomesChange = (major, outcomeName, newValue) => {
    let tempForm = outcomeForm; // outcomeForm is a state variable
    tempForm.forEach((outcome) => { // iterate through the outcomeForm; outcome is the current outcome (iterator)
      if (outcome.outcomeName == outcomeName) // find the outcome that matches the outcomeName
        outcome[major] = String(newValue); // set the outcome's major to the new value from the function parameter
    });
    setOutcomeForm(tempForm); // set the outcomeForm state variable to the new tempForm
  };

  /**
   * @function handleCommentChange sets the comment state variable to the new value from the function parameter
   * @param {Event} event the event in the HTML DOM that triggered the function
   * @example
   * <textarea onChange={handleCommentChange} value={comment}></textarea>
   */
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  useEffect(() => {
    checkUser();
    getSectionInformation();
    getOutcomeForm();
    getGradeForm();
  }, []); // run once when component mounts

  const handleSubmit = async () => {
    console.log(gradeForm);
    console.log("----------------------");
    console.log(outcomeForm);
    try {
      for (const key in gradeForm) {
        const totalStudentsNum =
          gradeForm[key].a +
          gradeForm[key].b +
          gradeForm[key].c +
          gradeForm[key].d +
          gradeForm[key].f; // calculate the total number of students by adding up the number of students in each grade category
        gradeForm[key].totalStudents = totalStudentsNum;
      }
      // WIP: replace the code block above with this one
      gradeForm.forEach((major) => { // iterate through each major the gradeForm
        for (const key in major) // iterate through the each key in major
          if (key != "totalStudents") // if this key is NOT "totalStudents"
            major[key] = parseInt(major[key]); // convert the value of the key to an integer
      });

      const responseGrades = await setGrades(
        year,
        term,
        department,
        number,
        section,
        gradeForm
      );
      const statusGrades = responseGrades.status;
      const responseOutcomes = await SetStudentOutcomesCompleted(
        year,
        term,
        department,
        number,
        section,
        outcomeForm
      );
      const statusOutcomes = responseOutcomes.status;
      if (statusGrades == "Success" && statusOutcomes == "Success") { // if both the grade and outcome forms were submitted successfully
        toast({
          description: `Form submitted!`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        throw e;
      }
      else if (!statusGrades == "Success" || !statusOutcomes == "Success") { // if the grade or outcome form were not submitted successfully
        const msg = "An error occured while submitting the form!";
        const e = new Error(msg, `statusGrades: ${statusGrades}`, `statusOutcomes: ${statusOutcomes}`);
        toast({
          description: `${msg}\nError:${(statusGrades != "Success") ? ("statusGrades: " + statusGrades) : ("statusOutcomes: " + statusOutcomes)}`, // if the grade form was not submitted successfully, then the error is the gradeStatus; otherwise, the error is the outcomeStatus
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        throw e;
      }
      else {
        const msg = "An error occured while submitting the form!";
        const e = new Error(msg, "Unknown error");
        toast({
          description: `${msg}\nError: "Unknown error"`, // if the grade form was not submitted successfully, then the error is the gradeStatus; otherwise, the error is the outcomeStatus
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        throw e;
      }
    }
    catch (error) {
      console.error(error);
    }

    refreshTable();
  };

  return (
    <div>
      <Navigation />
      <Center>
        {gradeForm && outcomeForm ? (
          <Flex mt="2em" direction="column" w="90%">
            <Box w="80%">
              <Text fontSize="2xl" fontWeight="bold">
                {department} {number}.{section}
              </Text>
              <Text fontSize="xl" fontWeight="bold" color="green" mb="2em">
                ABET Course Assesment
              </Text>
            </Box>
            
            <GradesInput
              csGrades={gradeForm.CS}
              ceGrades={gradeForm.CE}
              itGrades={gradeForm.IT}
              cysGrades={gradeForm.CYS}
              handleGradeChange={handleGradeChange}
            />

            <CourseOutcomesMapping
              courseOutcomes={outcomeForm}
              handleOutcomesChange={handleOutcomesChange}
            />

            <Text fontSize="xl" fontWeight="bold" mb="1em">
              Instructor Comments
            </Text>
            <Textarea
              mb="1em"
              size="lg"
              fontSize="xl"
              bg="#edf2f7"
              placeholder="// Write a comment"
              onChange={handleCommentChange}
              value={comment}
            ></Textarea>

            <Box>
              <Button
                mb="1em"
                colorScheme="green"
                w="max-content"
                onClick={handleSubmit}
              >
                Submit Report
              </Button>
            </Box>
          </Flex>
        ) : null}
      </Center>
    </div>
  );
};

formCompletion.getInitialProps = ({ query }) => { // get the query parameters from the URL
  console.log(query); // log the query parameters to the console
  const { department, number, section, term, year } = query; // destructure the query parameters
  return {
    department: department,
    number: number,
    section: section,
    term: term,
    year: year,
  };
};

export default formCompletion;
