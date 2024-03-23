import { useEffect } from "react";
import Layouts from "../layout/Layouts";
import { setBreadcrumb } from "../../redux/features/breadcrumbsSlice";
import { useDispatch } from "react-redux";
import StudentsDataTable from "./StudentsDataTable";
function StudentInformationIndex() {
    const dispatch = useDispatch();

    useEffect(() => {
      const breadcrumbs = [{ title: 'Home', path: '/Home' }, { title: 'Students List', path: '/page' }];
      dispatch(setBreadcrumb(breadcrumbs));
    }, [dispatch]);
    return(
        <>        
           <Layouts>
            <StudentsDataTable />
           </Layouts>
        </>
    )
}

export default StudentInformationIndex;