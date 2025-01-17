import * as React from "react";
import { useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { btnStyle } from "../../styles/globalStyle";
import DataTable from "./DataTable";
import {
  useDeleteStockMutation,
  useGetStocksQuery,
} from "../../services/stocks";
import Loading from "../Loading";

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export default function ProductTable() {
  const { data: products, isLoading } = useGetStocksQuery("products");
  const [deleteStock] = useDeleteStockMutation();

  const columns = [
    {
      field: "_id",
      headerName: "#",
      minWidth: 40,
      maxWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "categoryId",
      headerName: "Category",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
      valueGetter: (params) => params.row?.categoryId?.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
      valueGetter: (params) => params.row?.brandId?.name,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      minWidth: 110,
      headerAlign: "center",
      align: "center",
      editable: false,
      flex: 0.8,
    },
    {
      field: "actions",
      headerAlign: "center",
      headerName: "Actions",
      align: "center",
      // description: "This column has a value getter and is not sortable.",
      sortable: false, //! o sütunda sort işlemlerini kapat
      minWidth: 40,
      flex: 1,
      renderCell: (params) => (
        //
        <DeleteOutlineIcon
          onClick={() => deleteStock({ query: "products", id: params.id })}
          sx={btnStyle}
        />
      ),
    },
  ];

  if (isLoading) return <Loading />;
  return <DataTable rows={products} columns={columns} />;
}
