//Chakra
import { useToast } from "@chakra-ui/react";

//Table related
import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

//API
import {
  addNewSection,
  deleteSection,
  editSection,
} from "../../../api/APIHelper";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const SectionTable = ({
  year,
  term,
  department,
  courseNumber,
  columns,
  data,
  instructorList,
  refreshTable,
}) => {
  //Toast
  const toast = useToast({ position: "top" });
  //Handle remove
  const handleRemoveSection = async (section) => {
    try {
      const deleteRes = await deleteSection(
        term,
        year,
        department,
        courseNumber,
        section.sectionNumber
      );
      const status = deleteRes.status;
      if (status != "SUCCESS") {
        toast({
          title: "Error",
          description: `There was an error deleting the section! Error: ${status}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      } else {
        toast({
          title: "Success",
          description: `Section ${section.sectionNumber} deleted`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        refreshTable();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Handle Add section
  const handleAddSection = async (newSection) => {
    try {
      var instructorEUID;
      if (instructorList) {
        for (let key in instructorList) {
          if (instructorList[key].label == newSection.instructorEUID) {
            instructorEUID = instructorList[key].instructorEUID;
          }
        }
      }
      if (!instructorEUID) {
        toast({
          title: "Error",
          description: `Please select an instructor before adding!`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      var isSectionCompleted = JSON.parse(newSection.isSectionCompleted);
      console.log(newSection, instructorEUID);
      const res = await addNewSection(
        year,
        term,
        department,
        courseNumber,
        instructorEUID,
        isSectionCompleted,
        newSection.sectionNumber.toString(),
        newSection.numberOfStudents
      );
      const status = res.status;
      if (status != "SUCCESS") {
        toast({
          title: "Error",
          description: `There was an error adding the course! Error: ${status}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      } else {
        toast({
          title: "Success",
          description: `Successfully added the new section! Please refresh the page if you don't see the new change.`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        refreshTable();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSection = async (newData, oldData) => {
    console.log(newData);
    var isSectionComplete = JSON.parse(newData.isSectionCompleted);
    try {
      var instructorEUID;
      if (newData.instructorEUID == oldData.instructorEUID) {
        instructorEUID = oldData.instructorEUID;
      } else {
        if (instructorList) {
          for (let key in instructorList) {
            if (instructorList[key].label == newData.instructorEUID) {
              instructorEUID = instructorList[key].instructorEUID;
              console.log(instructorEUID);
            }
          }
        }
      }

      if (!instructorEUID) {
        toast({
          title: "Error",
          description: `Please select an instructor before adding!`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }

      const editRes = await editSection(
        term,
        year,
        department,
        courseNumber,
        oldData.sectionNumber,
        instructorEUID,
        isSectionComplete,
        newData.sectionNumber.toString(),
        newData.numberOfStudents
      );
      const status = editRes.status;
      if (status != "SUCCESS") {
        toast({
          title: "Error",
          description: `There was an error editing the section! Error: ${status}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      } else {
        toast({
          title: "Success",
          description: `section ${oldData.sectionNumber} Edited`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        refreshTable();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MaterialTable
      icons={tableIcons}
      options={{
        search: true,
        pageSize: 10,
        pageSizeOptions: [10, 20, 30],
      }}
      columns={columns}
      data={data}
      title="Section List"
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleEditSection(newData, oldData);
              resolve();
            }, 1000);
          }),
        onRowAdd: (newSection) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleAddSection(newSection);
              resolve();
            }, 1000);
          }),
        onRowDelete: (deleteSection) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleRemoveSection(deleteSection);
              resolve();
            }, 1000);
          }),
      }}
    />
  );
};
export default SectionTable;
