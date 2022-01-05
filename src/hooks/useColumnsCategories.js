import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
     {
       Header: "Id",
       accessor: "idCategories"
     },
     {
       Header: "Name",
       accessor: "nameCategories"
     },
     {
      Header: "Edit",
      accessor: "editAccount"
     },
     {
      Header: "Delete",
      accessor: "deleteAccount"
     }
   ],
   []
 );

 return columns;
}