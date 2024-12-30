// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Paper,
// } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import EditForm from "./EditForm";
// import { fetchData } from "../../../Service/services";

// const Dashboard2 = () => {
//   const [data, setData] = useState([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {
//       const result = await fetchData();
//       setData(result);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleEditClick = (row) => {
//     setSelectedRow(row);
//     setEditModalOpen(true);
//   };

//   const handleEditClose = () => {
//     setEditModalOpen(false);
//     setSelectedRow(null);
//   };

//   return (
//     <div>
//       <AppBar position="fixed" sx={{ backgroundColor: "#3B92CD" }}>
//         <Toolbar>
//           <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
//             Dashboard
//           </Typography>
//           <IconButton color="inherit">
//             <NotificationsIcon />
//           </IconButton>
//           <IconButton color="inherit">
//             <AccountCircleIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <div style={{ marginTop: "80px", padding: "16px" }}>
//         <Paper>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Sr. No.</TableCell>
//                 <TableCell>Component Name</TableCell>
//                 <TableCell>Value</TableCell>
//                 <TableCell>Specification</TableCell>
//                 <TableCell>Edit</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data.map((row, index) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{index + 1}</TableCell>
//                   <TableCell>{row.componentName}</TableCell>
//                   <TableCell>{row.value}</TableCell>
//                   <TableCell>{row.specification}</TableCell>
//                   <TableCell>
//                     <Button
//                       variant="contained"
//                       onClick={() => handleEditClick(row)}
//                     >
//                       Edit
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       </div>

//       {/* Edit Form Modal */}
//       {selectedRow && (
//         <EditForm
//           open={editModalOpen}
//           handleClose={handleEditClose}
//           data={selectedRow}
//           onSave={loadData}
//         />
//       )}
//     </div>
//   );
// };

// export default Dashboard2;


//latest
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Select,
  MenuItem,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Modal,
  Box,
  Menu,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewListIcon from "@mui/icons-material/ViewList";
import ceinsys_logo from "../../Image/ceinsys_logo.png";
import AddElement from "../dashboard/AddElement";

import CloseIcon from "@mui/icons-material/Close";
import EditForm from "./EditForm";
import Config from "../../../Service/Config";
import { useNavigate } from "react-router-dom";
import Available from "./Available";
const BASE_URL = Config.API_BASE_URL;

const Dashboard2 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openAvailableForm, setOpenAvailableForm] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [parentTableData, setParentTableData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState({});

  // State for blinking effect

  // Handle Modal Open and Close
  const handleOpen = () => setOpen(true);
  const handleClose = () => {

    setOpen(false);
  };
  const handleCloseEditForm = () => {
    setOpenEditForm(false);
  };
  const handleCloseAvailbleForm = () => {
    setOpenAvailableForm(false);
  };

  // Menu Item Selection
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    handleMenuClose();
  };

  const getAllData = () => {
    const token = sessionStorage.getItem('token');
    axios.get(`${BASE_URL}item/getAll`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        setParentTableData(response.data);
        setTableData(response.data);  // Store the response data in state
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  useEffect(() => {
    getAllData();
  }, []);

  const handleCategoryAndSubCategoryChange = (event, type) => {
    if (type === "subCategory") {
      const category = event.target.value;
      setSelectedSubCategory(category);

      if (category === 'All') {
        setTableData(parentTableData); // Show all data
      } else {
        // Filter based on subCategory
        const filtered = parentTableData.filter((item) => item.subCategory === category);
        setTableData(filtered);
      }
    } else {
      const category = event;
      setSelectedCategory(category);

      if (category === 'All') {
        setTableData(parentTableData); // Show all data
      } else {
        // Filter based on subCategory
        const filtered = parentTableData.filter((item) => item.category === category);
        setTableData(filtered);
      }
      handleMenuClose();
    }
  };

  const handleSearchChange = (e) => {
    debugger
    const value = e.target.value.toLowerCase(); // Normalize to lowercase for case-insensitive comparison
    setSearchValue(value);

    const filteredSubCategoryData = parentTableData.filter((item) => selectedSubCategory === "All" || item.subCategory === selectedSubCategory)
    const filteredCategoryData = filteredSubCategoryData.filter((item) => selectedCategory === "All" || item.category === selectedSubCategory)
    const finalFilterData = filteredCategoryData.filter((item) =>
      Object.values(item).some(
        (attr) =>
          typeof attr === "string" &&
          attr.toLowerCase().includes(value)
      )
    );

    setTableData(finalFilterData);
  };

  return (
    <div>
      {/* Top App Bar */}
      <AppBar position="fixed" sx={{ backgroundColor: "#3B92CD" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Section */}
          <img
            src={ceinsys_logo}
            alt="Ceinsys Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              marginLeft: "140px",
            }}
          >
            <Button color="inherit" onClick={handleMenuOpen}>
              {selectedCategory}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={(e) => { handleCategoryAndSubCategoryChange("All", "Category") }}>
                All
              </MenuItem>
              <MenuItem onClick={(e) => { handleCategoryAndSubCategoryChange("Asset", "Category") }}>
                Asset
              </MenuItem>
              <MenuItem onClick={(e) => { handleCategoryAndSubCategoryChange("Component", "Category") }}>
                Component
              </MenuItem>
            </Menu>
            <Button color="inherit">History</Button>
            <Button color="inherit" onClick={handleOpen}>
              Add Element
            </Button>
            <Button color="inherit">Request</Button>
            <Typography color="inherit" style={{ marginRight: "16px" }}>
              Contact Us: contact@ceinsys.com
            </Typography>
          </div>

          {/* Right Section */}
          <div>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Welcome Section */}
      <div
        style={{ marginTop: "60px", padding: "16px", backgroundColor: "#A8D2EF" }}
      >
        <Typography variant="h5">Welcome {sessionStorage.getItem("Name")}</Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "12px",
            backgroundColor: "#f5f5f5",
            padding: "8px 12px",
            borderRadius: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Select defaultValue="All"
              value={selectedSubCategory}
              onChange={(e) => { handleCategoryAndSubCategoryChange(e, "subCategory") }}
              style={{ marginRight: "16px", width: "120px" }}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Mechanics">Mechanics</MenuItem>
            </Select>
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              style={{ marginRight: "16px" }}
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          <div>
            <IconButton color="primary">
              <FilterListIcon />
            </IconButton>
            <IconButton color="primary">
              <ViewListIcon />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Table Section with Fixed Header */}
      <div
        style={{
          marginTop: "10px", // Make sure it starts below the welcome message
          padding: "16px",
        }}
      >
        <Paper style={{ maxHeight: "100%" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No.</TableCell>
                <TableCell>Component Name</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Specification</TableCell>
                <TableCell>Sub Category</TableCell>
                <TableCell>MFG/Supplier</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Package</TableCell>
                <TableCell>MPN</TableCell>
                <TableCell>SAP_No</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.subCategory}</TableCell>
                  <TableCell>{row.manufacturer}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.package_box}</TableCell>
                  <TableCell>{row.mpn}</TableCell>
                  <TableCell>{row.sap_no}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{ textTransform: 'none' }}
                      color={row.stock > 0 ? "success" : "error"}
                      onClick={() => {if(row.stock>0){
                        setSelectedItem(row); setOpenAvailableForm(true);
                      }}}
                    >
                      {row.stock > 0 ? "Availaible" : "Unavailaible"}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      sx={{
                        backgroundColor: "#CC6CE7", // Custom background color
                        '&:hover': {
                          backgroundColor: "#D17FD6", // Darker shade for hover effect
                        },
                        color: "#fff", // Text color
                      }}
                      variant="contained"
                      onClick={() => { setOpenEditForm(true); setSelectedItem(row); }}
                    // onClick={() => alert("Edit Clicked")}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>

      {/* Add Element Modal */}
      <Modal
        open={open}
        onClose={null}  // Prevent closing when clicking outside
        closeAfterTransition
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            boxShadow: 24,
            borderRadius: 3,
            p: 4,
            width: "60%",
            maxHeight: "80vh",
            overflowY: "auto",
            position: "relative" // Add relative positioning to position the close icon
          }}
        >
          {/* Close Icon in the top right corner */}
          <IconButton
            onClick={handleClose}  // Close the modal when clicked
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "#f44336", // Red background for the close button
              color: "#fff",
              '&:hover': { backgroundColor: "#d32f2f" }, // Darken red on hover
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Add the form from AddElement */}
          <AddElement handleClose={handleClose} getAllData={getAllData}/>
        </Box>
      </Modal>
      <EditForm open={openEditForm} data={selectedItem} handleClose={handleCloseEditForm} getAllData={getAllData}/>
      <Available open={openAvailableForm} data={selectedItem} handleClose={handleCloseAvailbleForm} getAllData={getAllData}/>
    </div>
  );
};

export default Dashboard2;

