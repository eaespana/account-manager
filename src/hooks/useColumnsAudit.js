import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
    {
        Header: "Id",
        accessor: "idAudiTransaction"
    },
    {
        Header: "Account",
        accessor: "accountAudiTransaction"
    },
    {
        Header: "Categories",
        accessor: "categoriesAudiTransaction"
    },
    {
        Header: "Valor",
        accessor: "valorAudiTransaction"
    },
    {
        Header: "Tipo",
        accessor: "tipoAudiTransaction"
    },
    {
        Header: "Fecha",
        accessor: "fechaAudiTransaction"
    },
    {
        Header: "Edit",
        accessor: "editAudiTransaction"
    },
    {
        Header: "Delete",
        accessor: "deleteAudiTransaction"
    }
   ],
   []
 );

 return columns;
}