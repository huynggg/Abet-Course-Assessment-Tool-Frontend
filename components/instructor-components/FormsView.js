import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";
import NextLink from "next/link";

const FormsView = ({ instructorCourses, coordinatorCourses, term, year }) => {
  const router = useRouter();
  const token = cookieCutter.get("token");
  var userRoles = jwt.decode(token).role;
  var role = "";
  
  if (userRoles.length > 1) { // if user has more than one role, set role to the highest role
    for (var i = 0; i < userRoles.length; i++) {
      if (userRoles[i] == "Admin")
        role = userRoles[i];
      
      else if (userRoles[i] == "Instructor" || userRoles[i] == "Coordinator")
        role = userRoles[i];
      
      else
        role = "";
    }
  }
  else {
    console.error("User has no roles");
    router.push("/Login");
  }

  if (instructorCourses) {
    instructorCourses.sort((a, b) =>
      (a.courseNumber + a.sectionNumber > b.courseNumber + b.sectionNumber) ? 1 : -1
    );
  }

  if (coordinatorCourses) {
    coordinatorCourses.sort((a, b) =>
      (a.courseNumber + a.sectionNumber > b.courseNumber + b.sectionNumber) ? 1 : -1
    );
  }

  const handleClick = async (course, section) => {
    document.cookie = `course=${course}; path=/`;
    document.cookie = `section=${section}; path=/`;
  };

  const renderInstructorCourses =
    instructorCourses &&
    instructorCourses.map((course, idx) => {
      return (
        <Tr key={idx}>
          <Td>{course.courseFriendlyName}</Td>
          <Td>
            {course.courseNumber}.{course.sectionNumber}
          </Td>
          <Td>
            <Button
              color="white"
              bg="#016a31"
              as="a"
              height="10"
              rounded="md"
              width="20"
              _hover={{
                background: "teal",
                color: "white",
              }}
              variant="link"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <NextLink
                href={{
                  pathname: "/formCompletion",
                  query: {
                    department: "CSCE",
                    number: course.courseNumber,
                    section: course.sectionNumber,
                    term: term,
                    year: year,
                  },
                }}
              >
                Start
              </NextLink>
            </Button>
          </Td>
        </Tr>
      );
    })
  ;

  const renderCoordinatorCourses =
    coordinatorCourses &&
    coordinatorCourses.map((course, idx) => {
      return (
        <Tr key={idx}>
          <Td>{course.courseFriendlyName}</Td>
          <Td>
            {course.courseNumber}.{course.sectionNumber}
          </Td>
          <Td>
            <Button
              color="white"
              bg="#016a31"
              height="10"
              rounded="md"
              width="20"
              _hover={{
                background: "teal",
                color: "white",
              }}
              variant="link"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Link
                href={{
                  pathname: "/coordinatorForms",
                  query: {
                    department: "CSCE",
                    number: course.courseNumber,
                    section: course.sectionNumber,
                    term: term,
                    year: year,
                  },
                }}
              >
                Comment
              </Link>
            </Button>
          </Td>
        </Tr>
      );
    })
  ;

  if ((userRoles.includes("Instructor") && userRoles.includes("Coordinator")) || userRoles.includes("Admin")) { // if user has both roles or is admin, display both tables
    return (
      <VStack w="75%">
        <Box
          bg="#edf2f7"
          align="center"
          w={{ lg: "75%" }}
          margin="auto"
          padding="1em"
        >
          <Table variant="striped" colorScheme="green" padding="1em">
            <TableCaption placement="top" fontWeight="bold" fontSize="xl">
              Instructor Forms
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Code</Th>
                <Th>Form</Th>
              </Tr>
            </Thead>
            <Tbody>{renderInstructorCourses}</Tbody>
          </Table>
        </Box>
        {coordinatorCourses && (
          <Box
            bg="#edf2f7"
            align="center"
            w={{ lg: "75%" }}
            margin="auto"
            padding="1em"
          >
            <Table variant="striped" colorScheme="green" padding="1em">
              <TableCaption placement="top" fontWeight="bold" fontSize="xl">
                Coordinator Forms
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Code</Th>
                  <Th>Form</Th>
                </Tr>
              </Thead>
              <Tbody>{renderCoordinatorCourses}</Tbody>
            </Table>
          </Box>
        )}
      </VStack>
    );
  }

  if (userRoles.includes("Instructor")) { // if user has instructor role, display instructor table
    return (
      <VStack w="75%">
        <Box
          bg="#edf2f7"
          align="center"
          w={{ lg: "75%" }}
          margin="auto"
          padding="1em"
        >
          <Table variant="striped" colorScheme="green" padding="1em">
            <TableCaption placement="top" fontWeight="bold" fontSize="xl">
              Instructor Forms
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Code</Th>
                <Th>Form</Th>
              </Tr>
            </Thead>
            <Tbody>{renderInstructorCourses}</Tbody>
          </Table>
        </Box>
      </VStack>
    );
  }

  if (userRoles.includes("Coordinator")) { // if user has coordinator role, display coordinator table
    return (
      <VStack w="75%">
        <Box
          bg="#edf2f7"
          align="center"
          w={{ lg: "75%" }}
          margin="auto"
          padding="1em"
        >
          <Table variant="striped" colorScheme="green" padding="1em">
            <TableCaption placement="top" fontWeight="bold" fontSize="xl">
              Coordinator Forms
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Code</Th>
                <Th>Form</Th>
              </Tr>
            </Thead>
            <Tbody>{renderCoordinatorCourses}</Tbody>
          </Table>
        </Box>
      </VStack>
    );
  }
};

export default FormsView;
