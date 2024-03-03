import { useDispatch } from "react-redux";
import Layouts from "../../layout/Layouts";
import DepartmentTable from "./DepartmentTable";
function DepartmentSetupIndex() {
    const dispatch = useDispatch();
    return(
        <>
            <Layouts>
                <DepartmentTable />
            </Layouts>
        </>
    )
}

export default DepartmentSetupIndex;