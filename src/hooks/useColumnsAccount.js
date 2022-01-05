import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
     {
       Header: "Id",
       accessor: "idAccount"
     },
     {
       Header: "Name",
       accessor: "nameAccount"
     },
     {
       Header: "Tipo",
       accessor: "tipoAccount"
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