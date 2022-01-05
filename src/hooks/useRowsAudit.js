import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
    {
        idAudiTransaction: 1,
        accountAudiTransaction: "Nomina",
        categoriesAudiTransaction: "gastos personales",
        valorAudiTransaction: "80000",
        tipoAudiTransaction: "Egreso",
        fechaAudiTransaction: "2022-01-01 11:00:00"
    },
    {
        idAudiTransaction: 2,
        accountAudiTransaction: "Nomina",
        categoriesAudiTransaction: "Cooperativa",
        valorAudiTransaction: "90000",
        tipoAudiTransaction: "Egreso",
        fechaAudiTransaction: "2022-01-01 11:00:00"
    },
    {
        idAudiTransaction: 3,
        accountAudiTransaction: "Nomina",
        categoriesAudiTransaction: "Mercado",
        valorAudiTransaction: "35000",
        tipoAudiTransaction: "Egreso",
        fechaAudiTransaction: "2022-01-01 11:00:00"
    },
    {
        idAudiTransaction: 4,
        accountAudiTransaction: "Nomina",
        categoriesAudiTransaction: "Recibos",
        valorAudiTransaction: "20000",
        tipoAudiTransaction: "Egreso",
        fechaAudiTransaction: "2022-01-01 11:00:00"
    },
    {
        idAudiTransaction: 5,
        accountAudiTransaction: "Nomina",
        categoriesAudiTransaction: "Ropa",
        valorAudiTransaction: "100000",
        tipoAudiTransaction: "Egreso",
        fechaAudiTransaction: "2022-01-01 11:00:00"
    },
    {
        idAudiTransaction: 6,
        accountAudiTransaction: "Inversion",
        categoriesAudiTransaction: "Pago",
        valorAudiTransaction: "100000",
        tipoAudiTransaction: "Ingreso",
        fechaAudiTransaction: "2022-01-01 11:00:00"
    },
    {
        idAudiTransaction: 7,
        accountAudiTransaction: "Liberta Financiera",
        categoriesAudiTransaction: "Pago",
        valorAudiTransaction: "100000",
        tipoAudiTransaction: "Ingreso",
        fechaAudiTransaction: "2022-01-01 11:00:00"
    }
   ],
   []
 );

 return rows;
}