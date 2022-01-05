import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
     {
       Header: "Id",
       accessor: "idBudget"
     },
     {
       Header: "Name Account",
       accessor: "nameAccountBudget"
     },
     {
       Header: "Valor",
       accessor: "valorBudget"
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