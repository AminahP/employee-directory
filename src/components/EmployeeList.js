import EmployeeListItems from "./EmployeeListItem";
import employeeArr from "../data";
import '../styles.css'


const employee = employeeArr.map((ele, idx) => {
  return <EmployeeListItems {...ele} key={idx} />;
});

export default function employeeList() {
  return <div>{employee}</div>;
}