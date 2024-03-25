import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 200 },
  { field: "lastName", headerName: "Last name", width: 200 },
  { field: "login", headerName: "Login", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "test", headerName: "TestField", width: 200 },
  { field: "status", headerName: "Status", width: 200 },
  {
    field: "action",
    headerName: "Action",
    width: 220,
    renderCell: () => {
      return (
        <div className="cellAction">
          <a className="viewButton" href="#">View</a>
          <a className="deleteButton" href="#">Delete</a>
        </div>
      );
    },
  },
];

export default function DataTable() {
  return (
    <div className="content">
      <div className="title">Users data</div>
      <button className="addButton">+ Add user</button>
      <div className="datatable">
        <DataGrid
          className="data"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          checkboxSelection
        />
      </div>
    </div>
  );
}
