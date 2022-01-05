import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
      {
         idCategories: 1,
         nameCategories: "gastos personales"
      },
      {
         idCategories: 2,
         nameCategories: "Cooperativa"
      },
      {
         idCategories: 3,
         nameCategories: "Mercado"
      },
      {
         idCategories: 4,
         nameCategories: "Recibos"
      },
      {
         idCategories: 5,
         nameCategories: "Ropa"
      }
   ],
   []
 );

 return rows;
}