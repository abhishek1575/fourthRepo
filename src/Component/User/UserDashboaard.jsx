import React, { useState } from "react";
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
  Menu,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewListIcon from "@mui/icons-material/ViewList";
import ceinsys_logo from "../Image/ceinsys_logo.png";
import tableData from "../../data/tableData";
import StatusPopup from "./StatusPopup";

const UserDashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Menu Item Selection
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    handleMenuClose();
  };

  const handleStatusClick = (row) => {
    if (row.status === "Available") {
      setSelectedItem(row);
      setOpenDialog(true);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const handleSubmit = (returnDate) => {
    console.log("Return Date:", returnDate);
    console.log("Item Details:", selectedItem);
    alert("Request Submitted!");
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
              <MenuItem onClick={() => handleCategorySelect("Asset")}>
                Asset
              </MenuItem>
              <MenuItem onClick={() => handleCategorySelect("Component")}>
                Component
              </MenuItem>
            </Menu>
            <Button color="inherit">History</Button>
            <Button color="inherit">Request</Button>
            <Typography color="inherit" style={{ marginRight: "6px" }}>
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
        <Typography variant="h5">Welcome User</Typography>
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
            <Select defaultValue="All" style={{ marginRight: "16px", width: "120px" }}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Mechanics">Mechanics</MenuItem>
            </Select>
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              style={{ marginRight: "16px" }}
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

      {/* Table Section */}
      <div style={{ marginTop: "10px", padding: "16px" }}>
        <Paper>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No.</TableCell>
                <TableCell>Component Name</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Specification</TableCell>
                <TableCell>Sub Category</TableCell>
                <TableCell>MFG/Supplier</TableCell>
                <TableCell>Package</TableCell>
                <TableCell>Manufacture Part No</TableCell>
                <TableCell>SAP_No</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.componentName}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.specification}</TableCell>
                  <TableCell>{row.subCategory}</TableCell>
                  <TableCell>{row.mfgSupplier}</TableCell>
                  <TableCell>{row.package}</TableCell>
                  <TableCell>{row.mpn}</TableCell>
                  <TableCell>{row.sap_no}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={row.status === "Available" ? "success" : "error"}
                      onClick={() => handleStatusClick(row)}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>

      {/* Status Popup */}
      <StatusPopup
        open={openDialog}
        onClose={handleDialogClose}
        item={selectedItem}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserDashboard;


// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Select,
//   MenuItem,
//   TextField,
//   Button,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Paper,
//   Menu,
// } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import ViewListIcon from "@mui/icons-material/ViewList";
// import ceinsys_logo from "../Image/ceinsys_logo.png";
// import tableData from "../../data/tableData";
// // import EditForm from "./EditForm";

// const UserDashboard = () => {
// //   const [open, setOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("Category");

//   // Menu Item Selection
//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     handleMenuClose();
//   };


//   return (
//     <div>
//       {/* Top App Bar */}
//       <AppBar position="fixed" sx={{ backgroundColor: "#3B92CD" }}>
//         <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
//           {/* Left Section */}
//           <img
//             src={ceinsys_logo}
//             alt="Ceinsys Logo"
//             style={{ height: "40px", marginRight: "16px" }}
//           />
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "30px",
//               marginLeft: "140px",
//             }}
//           >
//             <Button color="inherit" onClick={handleMenuOpen}>
//               {selectedCategory}
//             </Button>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//             >
//               <MenuItem onClick={() => handleCategorySelect("Asset")}>
//                 Asset
//               </MenuItem>
//               <MenuItem onClick={() => handleCategorySelect("Component")}>
//                 Component
//               </MenuItem>
//             </Menu>
//             <Button color="inherit">History</Button>
            
//             <Button color="inherit">Request</Button>
//             <Typography color="inherit" style={{ marginRight: "6px" }}>
//               Contact Us: contact@ceinsys.com
//             </Typography>
//           </div>

//           {/* Right Section */}
//           <div>
//             <IconButton color="inherit">
//               <NotificationsIcon />
//             </IconButton>
//             <IconButton color="inherit">
//               <AccountCircleIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>

//       {/* Welcome Section */}
//       <div
//         style={{ marginTop: "60px", padding: "16px", backgroundColor: "#A8D2EF" }}
//       >
//         <Typography variant="h5">Welcome User</Typography>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginTop: "12px",
//             backgroundColor: "#f5f5f5",
//             padding: "8px 12px",
//             borderRadius: "8px",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//             <Select defaultValue="All" style={{ marginRight: "16px", width: "120px" }}>
//               <MenuItem value="All">All</MenuItem>
//               <MenuItem value="Electronics">Electronics</MenuItem>
//               <MenuItem value="Mechanics">Mechanics</MenuItem>
//             </Select>
//             <TextField
//               variant="outlined"
//               placeholder="Search"
//               size="small"
//               style={{ marginRight: "16px" }}
//             />
//           </div>
//           <div>
//             <IconButton color="primary">
//               <FilterListIcon />
//             </IconButton>
//             <IconButton color="primary">
//               <ViewListIcon />
//             </IconButton>
//           </div>
//         </div>
//       </div>

//       {/* Table Section with Fixed Header */}
//       <div
//         style={{
//           marginTop: "10px", // Make sure it starts below the welcome message
//           padding: "16px",
//         }}
//       >
//         <Paper style={{ maxHeight: "100%" }}>
//           <Table stickyHeader>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Sr. No.</TableCell>
//                 <TableCell>Component Name</TableCell>
//                 <TableCell>Value</TableCell>
//                 <TableCell>Specification</TableCell>
//                 <TableCell>Sub Category</TableCell>
//                 <TableCell>MFG/Supplier</TableCell>
//                 <TableCell>Package</TableCell>
//                 <TableCell>Manufacture Part No</TableCell>
//                 <TableCell>SAP_No</TableCell>
//                 <TableCell>Stock</TableCell>
//                 <TableCell>Status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {tableData.map((row, index) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{index + 1}</TableCell>
//                   <TableCell>{row.componentName}</TableCell>
//                   <TableCell>{row.value}</TableCell>
//                   <TableCell>{row.specification}</TableCell>
//                   <TableCell>{row.subCategory}</TableCell>
//                   <TableCell>{row.mfgSupplier}</TableCell>
//                   <TableCell>{row.package}</TableCell>
//                   <TableCell>{row.mpn}</TableCell>
//                   <TableCell>{row.sap_no}</TableCell>
//                   <TableCell>{row.stock}</TableCell>
//                   <TableCell>
//                     <Button
//                       variant="contained"
//                       color={row.status === "Available" ? "success" : "error"}
//                     >
//                       {row.status}
//                     </Button>
//                   </TableCell>
                 
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       </div>

    
//     </div>
//   );
// };

// export default UserDashboard;

