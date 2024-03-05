import { useDispatch } from "react-redux";
import Layouts from "../../layout/Layouts";
import DepartmentTable from "./DepartmentTable";
import { useEffect } from "react";
import { setBreadcrumb } from "../../../redux/features/breadcrumbsSlice";
function DepartmentSetupIndex() {
    const dispatch = useDispatch();

    useEffect(() => {
      const breadcrumbs = [{ title: 'Home', path: '/Home' }, { title: 'Department List', path: '/page' }];
      dispatch(setBreadcrumb(breadcrumbs));
    }, [dispatch]);
    return(
        <>
            <Layouts>
                <DepartmentTable />
            </Layouts>
        </>
    )
}

export default DepartmentSetupIndex;