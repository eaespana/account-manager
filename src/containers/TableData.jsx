import React,{useState} from "react";
import { useTable,useSortBy, useGlobalFilter, useAsyncDebounce,usePagination } from "react-table";
import useRowsAccount from "@hooks/useRowsAccount";
import useRowsCategories from "@hooks/useRowsCategories";
import useRowsAudit from "@hooks/useRowsAudit";
import useRowsBudget from "@hooks/useRowsBudget";
import useColumnsAccount from "@hooks/useColumnsAccount";
import useColumnsCategories from "@hooks/useColumnsCategories";
import useColumnsAudit from "@hooks/useColumnsAudit";
import useColumnsBudget from "@hooks/useColumnsBudget";

import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import "@styles/TableData.scss";

function DataFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const totalDataAvailable = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);

  const onFilterChange = useAsyncDebounce(
    (value) => setGlobalFilter(value || undefined),
    200
  );

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <span className="data-filter">
      Find one data &nbsp;{" "}
      <input
        size={40}
        value={value || ""}
        onChange={handleInputChange}
        placeholder={`${totalDataAvailable} Data available...`}
      />
    </span>
  );
}

export default function TableData(props) {

  let columns = '';
  let data = "";
  
  if(props.nameTable == 'Categories'){
    columns = useColumnsCategories();
    data = useRowsCategories();
  }else if(props.nameTable == 'AuditTransaction'){
    columns = useColumnsAudit();
    data = useRowsAudit();
  }else if(props.nameTable == 'Budget'){
    columns = useColumnsBudget();
    data = useRowsBudget();
  }else{
    columns = useColumnsAccount();
    data = useRowsAccount();
  }
  
  const table = 
                useTable({ 
                          columns, 
                          data,
                          initialState: {
                            pageSize: 5,
                            pageIndex: 0
                          }
                        }, useGlobalFilter,useSortBy,usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { globalFilter,pageIndex, pageSize },
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize
  } = table;


  return (
    <div className="containerTableData">
      <table {...getTableProps()}>
        <thead>
          <tr>
            <th colSpan={10}>
              <DataFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
          {
            headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}
                          className={
                            column.isSorted
                              ? column.isSortedDesc
                                ? "desc"
                                : "asc"
                              : ""
                          }
                    >
                      {
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div className="pagination">
        <span>
          Página&nbsp;
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{" "}
        </span>
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <BiFirstPage className="page-controller" />
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <MdKeyboardArrowLeft className="page-controller" />
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <MdKeyboardArrowRight className="page-controller" />
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <BiLastPage className="page-controller" />
          </button>{" "}
        </div>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 15].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize !== 15 ? `Mostrar ${pageSize}` : `Mostrar todo`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
