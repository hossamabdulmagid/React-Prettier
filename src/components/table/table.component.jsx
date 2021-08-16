import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../../data/MOCK_DATA.json";
import { COLUMNS } from "../../data/columns";
import { RapperdTable } from "./table.styles";
const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  return (
    <>
      <RapperdTable>
        <div className="container">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, idx) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
                  {headerGroup.headers.map((column, idx) => (
                    <th {...column.getHeaderProps()} key={idx}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, idx) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={idx}>
                    {row.cells.map((cell, idx) => {
                      return (
                        <td {...cell.getCellProps()} key={idx}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              {footerGroups.map((footerGroup, idx) => (
                <tr {...footerGroup.getFooterGroupProps()} key={idx}>
                  {footerGroup.headers.map((column, idx) => (
                    <td {...column.getFooterProps()} key={idx}>
                      {column.render("Footer")}
                    </td>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
        </div>
      </RapperdTable>
    </>
  );
};

export default BasicTable;
