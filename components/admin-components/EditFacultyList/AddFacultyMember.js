import { useState } from "react";
import {
  Flex,
  Spacer,
  FormLabel,
  Button,
  Input,
  Select,
  Box,
  Text,
} from "@chakra-ui/react";
import useToggle from "../../../hooks/useToggle";
import useInputState from "../../../hooks/useInputState";

const AddFacultyMember = ({ setNewFaculty }) => {
  const facultyTypes = ["fullTime", "adjuncts", "fellows"];

  const [lastName, setLastName] = useInputState("");
  const [firstName, setFirstName] = useInputState("");
  const [ID, setID] = useInputState("");
  const [type, setType] = useState("");

  const [isEdditing, toggleEdditing] = useToggle();

  const addFaculty = () => {
    setNewFaculty({
      lastName: lastName,
      firstName: firstName,
      untID: ID,
      type: type,
    });
    toggleEdditing();
  };

  return (
    <>
      {isEdditing ? (
        <>
          <FormLabel>Faculty Type</FormLabel>
          <Select
            onChange={(e) => {
              //console.log(e.target.value);
              setType(e.target.value);
              //alert(type);
            }}
            value={type}
            w="50%"
          >
            <option mr="1em" value={facultyTypes[0]}>
              Intructor/Coordinator
            </option>
            <option mr="1em" value={facultyTypes[1]}>
              Adjunct
            </option>
            <option mr="1em" value={facultyTypes[2]}>
              Teaching Fellow
            </option>
          </Select>

          <FormLabel>Last Name</FormLabel>
          <Input
            w="50%"
            value={lastName}
            onChange={setLastName}
            variant="filled"
          />
          <FormLabel>First Name</FormLabel>
          <Input
            w="50%"
            value={firstName}
            onChange={setFirstName}
            variant="filled"
          />
          <FormLabel>ID</FormLabel>
          <Input w="50%" value={ID} onChange={setID} variant="filled" />

          <Button v ariantColor="green" mt="1em" onClick={addFaculty}>
            Add New Faculty
          </Button>
        </>
      ) : (
        <>
          <Box
            w="100%px"
            h="10"
            bg=""
            fontWeight="bold"
            marginTop="1em"
            marginBottom="1em"
          />
          <Spacer />
          <Button
            variantColor="green"
            display="inline"
            onClick={toggleEdditing}
          >
            Add Faculty Member
          </Button>
          <Spacer />
          <Box w="100%px" h="10" bg="" />
        </>
      )}
    </>
  );
};

export default AddFacultyMember;