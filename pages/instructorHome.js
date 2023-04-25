import { useState, useEffect } from "react";
import Head from "next/head";
import {
  VStack,
  Select,
  Flex,
  Box,
  Text,
  toast,
  useToast,
} from "@chakra-ui/react";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";
import Navigation from "../components/instructor-components/Navigation";
import FormsView from "../components/instructor-components/FormsView";
import {
  GetSectionsByInstructor,
  getSemesters,
  GetSectionsByCoordinator,
} from "../api/APIHelper";

const instructorHome = () => {
  const [user, setUser] = useState();
  const [semesterList, setSemesterList] = useState();
  const [year, setYear] = useState();
  const [term, setTerm] = useState();
  const [semester, setSemester] = useState(); // the selected semester, as a JSON string
  const [instructorCourse, setInstructorCourse] = useState();
  const [coordinatorCourse, setCoordinatorCourse] = useState();

  const toast = useToast({ position: "top" }); // set the position of the toast to the top of the screen

  const getSemesterList = async () => {
    try {
      const response = await getSemesters();
      const { status } = response; // get the status from the response
      if (status != "Success") { // if the status is NOT success, then there was an error
        toast({
          title: "Error",
          description: `There was an error fetching the data! Error: ${res}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      else {
        const listOfSemesters = response.data;
        let sortedListOfSemesters = listOfSemesters.sort((a, b) => { // sort the semesters by year, descending
          if (!a.year || !b.year)
            throw new Error("Semester year is undefined! Unable to sort semesters from response.");
          return (b.year - a.year);
        });
        setSemester(JSON.stringify(sortedListOfSemesters[0])); // set the selected semester to the most recent semester
        setSemesterList(sortedListOfSemesters); // set the list of semesters
      }
    }
    catch (error) { // catches errors from getting the response AND from sorting the semesters
      console.error(error);
    }
  };

  const getEUID = () => {
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) {
      const token = cookieCutter.get("token");

      const decoded = jwt.decode(token);
      if (!decoded)
        router.push("/Login");
      
      const UserId = decoded.unique_name;
      setUser(UserId);
    }
  };

  const getInstructorCourses = async () => {
    if (!semester)
      return;
    
    const semesterParse = JSON.parse(semester);
    setYear(semesterParse["year"]);
    setTerm(semesterParse["term"]);

    try {
      const response = await GetSectionsByInstructor(
        semesterParse.term,
        semesterParse.year,
        user
      );

      const { data } = response;
      if (!data) { // if there is no data or undefined
        const msg = "No data returned from API call!"
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
        setInstructorCourse(data);
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  const getCoordinatorCourse = async () => {
    if (!semester)
      return;
    
    const semesterParse = JSON.parse(semester);
    setYear(semesterParse["year"]);
    setTerm(semesterParse["term"]);

    try {
      const response = await GetSectionsByCoordinator(
        semesterParse.term,
        semesterParse.year,
        user
      );

      const { data } = response;
      if (!data) { // if there is no data or undefined
        const msg = "No data returned from API call!"
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
        setCoordinatorCourse(data);
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  /**
   * @function handleSemesterChange handles the change of the semester dropdown and updates the state of the selected semester
   * @param {Event} e the event object
   * @example
   * <select onChange={handleSemesterChange}>
   *     <option value={{"term": "Spring", "year": 2023}}>Spring 2023</option> // value must be JSON string; semester state expects a JSON string
   * </select>
   */
  const handleSemesterChange = (e) => {
    setSemester(e.target.value); // set the selected semester to the value of the option selected from the semesters list
  };

  useEffect(() => {
    getInstructorCourses(); // gets the list of courses the instructor manages
    getCoordinatorCourse(); // gets the list of courses the coordinator manages
  }, [semester]); // run when the component is mounted AND when `semester` changes

  useEffect(() => {
    getSemesterList(); // gets the list of semesters
    getEUID(); // gets the EUID of the user ensures that the user is logged in with a valid JWT
  }, []); // run only once when the component is mounted

  return (
    <div>
      <Head>
        <title>UNT ABET: Instructor Page</title>
      </Head>
      <Navigation />

      <VStack mt="4em">
        <Flex justifyContent="center">
          <Select
            alignSelf="center"
            id="term"
            placeholder="Select semester"
            borderColor="teal"
            width="100%"
            isRequired={true}
            value={semester}
            onChange={handleSemesterChange}
          >
            {semesterList &&
              semesterList.map((sem, key) => {
                return (<option value={JSON.stringify(sem)} key={key}>{sem.term} {sem.year}</option>);
              })
            }
          </Select>
        </Flex>
        {!semester && (
          <Box rounded={"lg"} bg={"#edf2f7"} boxShadow={"lg"} p={8}>
            <Text fontSize={"lg"} color={"gray.600"}>Please select a semester to begin</Text>
          </Box>
        )}
        {semester && (
          <FormsView
            instructorCourses={instructorCourse}
            coordinatorCourses={coordinatorCourse}
            term={term}
            year={year}
          />
        )}
      </VStack>
    </div>
  );
};

export default instructorHome;
