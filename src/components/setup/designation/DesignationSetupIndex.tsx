import { useDispatch } from "react-redux";
import Layouts from "../../layout/Layouts";
import { useEffect } from "react";
import { setBreadcrumb } from "../../../redux/features/breadcrumbsSlice";
import DesignationTable from "./DesignationTable";

function DesignationSetupIndex() {
      const dispatch = useDispatch();

      useEffect(() => {
        const breadcrumbs = [
          { title: "Home", path: "/Home" },
          { title: "Designation List", path: "/designation-setup" },
        ];
        dispatch(setBreadcrumb(breadcrumbs));
      }, [dispatch]);
  return (
    <>
      <Layouts>
        <DesignationTable />
      </Layouts>
    </>
  );
}
export default DesignationSetupIndex;
