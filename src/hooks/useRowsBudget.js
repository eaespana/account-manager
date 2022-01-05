import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
    {
        idBudget: 1,
        nameAccountBudget: "Liberta Financiera",
        valorBudget: "500"
    },
    {
        idBudget: 2,
        nameAccountBudget: "Caja menor",
        valorBudget: "200"
    },
    {
        idBudget: 3,
        nameAccountBudget: "Recibos",
        valorBudget: "200"
    },
    {
        idBudget: 4,
        nameAccountBudget: "Mercado",
        valorBudget: "700"
    },
    {
        idBudget: 5,
        nameAccountBudget: "Cooperativa",
        valorBudget: "150"
    },
    {
        idBudget: 6,
        nameAccountBudget: "Gasto Personal",
        valorBudget: "300"
    },
    {
        idBudget: 7,
        nameAccountBudget: "Diversion",
        valorBudget: "200"
    },
    {
        idBudget: 8,
        nameAccountBudget: "Fondo de emergencia",
        valorBudget: "200"
    },
    {
        idBudget: 9,
        nameAccountBudget: "Moto",
        valorBudget: "100"
    },
    {
        idBudget: 10,
        nameAccountBudget: "Donación",
        valorBudget: "50"
    },
    {
        idBudget: 11,
        nameAccountBudget: "Estudio",
        valorBudget: "300"
    },
    {
        idBudget: 13,
        nameAccountBudget: "Computador",
        valorBudget: "100"
    }   
   ],
   []
 );

 return rows;
}