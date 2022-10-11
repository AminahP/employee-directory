import EmployeeList from "./EmployeeList"
import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeePage from "./EmployeePage"

const Homepage = (props) => {
  return (
  <>
    <div id="homeContainer">
      <div class="section" id="leftSide">
        <Header />
        <SearchBar />
        <EmployeeList />
      </div>
      <div class="section" id="rightSide">
        <EmployeePage />
      </div>
    </div>
  </>
  )
}

export default Homepage