import React from "react";
import Table, { AvatarCell, SelectColumnFilter } from "../../components/Table";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

const getData = () => {
  // Some data
  const data = [
    {
      id: 2,
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      status: "Active",
      role: ["Admin", "responsable"],
      age: 27,
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: 2,
      name: "Cody Fisher",
      email: "cody.fisher@example.com",
      title: "Product Directives Officer",
      department: "Intranet",
      status: "Inactive",
      role: "Owner",
      age: 43,
      imgUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: 3,
      name: "Esther Howard",
      email: "esther.howard@example.com",
      title: "Forward Response Developer",
      department: "Directives",
      status: "Active",
      role: "Member",
      age: 32,
      imgUrl:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      email: "jenny.wilson@example.com",
      title: "Central Security Manager",
      department: "Program",
      status: "Offline",
      role: "Member",
      age: 29,
      imgUrl:
        "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Kristin Watson",
      email: "kristin.watson@example.com",
      title: "Lean Implementation Liaison",
      department: "Mobility",
      status: "Inactive",
      role: "Admin",
      age: 36,
      imgUrl:
        "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cameron Williamson",
      email: "cameron.williamson@example.com",
      title: "Internal Applications Engineer",
      department: "Security",
      status: "Active",
      role: "Member",
      age: 24,
      imgUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return [...data, ...data, ...data];
};

function AdminPersonnel() {
  // Columns configs
  const columns = React.useMemo(
    () => [
      {
        Header: "Nom",
        accessor: "name",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        emailAccessor: "email",
      },
      {
        Header: "Fonction",
        accessor: "title",
      },
      {
        Header: "Role",
        accessor: "role",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
      {
        Header: "Modifier",
        accessor: "id",
        disableSortBy: true,
        isSorted: false,
        Cell: ({ row }) => {
          return (
            <Link to={{ pathname: `/admin/u/personnel/${row.original.id}` }}>
              <p className="decoration-solid text-blue-500 hover:text-blue-700 ">
                Edit
              </p>
            </Link>
          );
        },
      },
    ],
    []
  );
  const data = React.useMemo(() => getData(), []);
  // Links
  const myLinks = [
    {
      title: "Dashboard",
      destination: "/",
      active: true,
    },
    {
      title: "Produits",
      destination: "/admin/produits",
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <NavBar links={myLinks} />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminPersonnel;
