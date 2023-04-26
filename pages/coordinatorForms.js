import { useEffect, useState } from "react";
import {
  VStack,
  Button,
  Text,
  Box,
  Flex,
  Center,
  Textarea,
} from "@chakra-ui/react";

import { getGrades, GetStudentOutcomesCompleted } from "../api/APIHelper";
import CoordinatorGrades from "../components/form-components/CoordinatorGrades";
import blankForm from "../components/form-components/blankForm.json";
import CoordinatorOutcomes from "../components/form-components/CoordinatorOutcomes";
import Navigation from "../components/instructor-components/Navigation";

const formCompletion = ({ department, number, section, term, year }) => {
  const [comment, setComment] = useState("");
  const [gradeForm, setGradeForm] = useState();
  const [outcomeForm, setOutcomeForm] = useState();

  const getGradeForm = async () => {
    try {
      const response = await getGrades(year, term, department, number, section);
      const grades = response.data; // get the grades from the response's data
      if (grades) { // if grades is not null or undefined
        if (Object.keys(grades).length < 1) {
          setGradeForm(blankForm);
        }
        else if (Object.keys(grades).length >= 1) {
          for (const key in grades) {
            const totalStudentsNum =
              grades[key].a +
              grades[key].b +
              grades[key].c +
              grades[key].d +
              grades[key].f; // calculate the total number of students by adding up the number of students in each grade category
            grades[key].totalStudents = totalStudentsNum;
          }
          setGradeForm(grades);
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
      );
      const { data } = response;
      setOutcomeForm(data);
    }
    catch (error) {
      console.error(error);
    }
  };

  /**
   * @function handleSubmit submits the data of the report form on click of the submit button
   * @param {Event} e the event object
   * @example
   * <button onClick={handleSubmit}>Submit Report</button>
   */
  const handleSubmit = () => {
    console.log(comment);
    // TODO: submit the form data to the database
  };

  /**
   * @function handleCommentChange handles the change of the comment textarea and updates the state of the textarea's value
   * @param {Event} e the event object
   * @example
   * <textarea onChange={handleCommentChange}>
   * </textarea>
   */
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  }

  useEffect(() => {
    getGradeForm();
    getOutcomeForm();
  }, []); // runs once when component mounts

    return (
    <div>
    <Navigation />
    <Center>
      {(gradeForm && outcomeForm) ? (
        <Flex mt="2em" direction="column" w="90%">
          <Box w="80%">
            <Text fontSize="2xl" fontWeight="bold">
              {department} {number}.{section}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="green" mb="2em">
              ABET Course Assesment
            </Text>
          </Box>

          <CoordinatorGrades
            csGrades={gradeForm.CS}
            ceGrades={gradeForm.CE}
            itGrades={gradeForm.IT}
            cysGrades={gradeForm.CYS}
          />
          <CoordinatorOutcomes courseOutcomes={outcomeForm} />

          <Text fontSize="xl" fontWeight="bold" mb="1em">
            Coordinator Comments
          </Text>
          <Textarea
            mb="1em"
            size="lg"
            fontSize="xl"
            bg="#edf2f7"
            placeholder="// Write a comment"
            onChange={handleCommentChange}
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

formCompletion.getInitialProps = ({ query }) => {
  const { department, number, section, term, year } = query;
  return {
    department: department,
    number: number,
    section: section,
    term: term,
    year: year,
  };
};

export default formCompletion;
