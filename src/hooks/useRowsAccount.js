import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
     {
       idAccount: 1,
       nameAccount: "Nomina",
       tipoAccount: "Ahorro"
     },
     {
        idAccount: 2,
        nameAccount: "Inversion",
        tipoAccount: "Inversion"
     },
     {
        idAccount: 3,
        nameAccount: "Prestamos",
        tipoAccount: "Creditos"
     },
     {
        idAccount: 4,
        nameAccount: "Liberta Financiera",
        tipoAccount: "Ahorro"
     },
     {
        idAccount: 5,
        nameAccount: "Caja menor",
        tipoAccount: "Ahorro"
     },
     {
        idAccount: 6,
        nameAccount: "Diversion",
        tipoAccount: "Ahorro"
     },
     {
        idAccount: 7,
        nameAccount: "Fondo de emergencia",
        tipoAccount: "Ahorro"
     },
     {
        idAccount: 8,
        nameAccount: "Moto",
        tipoAccount: "Ahorro"
     },
     {
        idAccount: 9,
        nameAccount: "Donacion",
        tipoAccount: "Ahorro"
     }
   ],
   []
 );

 return rows;
}