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
  Modal,
  Box,
  Grid2,
  Grid22,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewListIcon from "@mui/icons-material/ViewList";
import CloseIcon from "@mui/icons-material/Close";
import ceinsys_logo from "../Image/ceinsys_logo.png";

const Dashboard2 = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Simulated Data
  const tableData = [
    {
      id: 1,
      componentName: "Resistor",
      value: "220 Ω",
      specification: "SMD Resistor",
      subCategory: "Electronics",
      mfgSupplier: "Robu.in",
      location: "Box No 1",
      package: "0603",
      stock: 10,
      status: "Available",
    },
  ];

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
            <Button color="inherit">Category</Button>
            <Button color="inherit">History</Button>
            {/* Add Element Button */}
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
      <div style={{ marginTop: "60px", padding: "16px", backgroundColor: "#A8D2EF" }}>
        <Typography variant="h5">Welcome Admin</Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
            backgroundColor: "#f5f5f5",
            padding: "8px 16px",
            borderRadius: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Select
              defaultValue="All"
              style={{ marginRight: "16px", width: "120px" }}
            >
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
      <div style={{ padding: "16px" }}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Component Name</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Specification</TableCell>
                <TableCell>Sub Category</TableCell>
                <TableCell>MFG/Supplier</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Package</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.componentName}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.specification}</TableCell>
                  <TableCell>{row.subCategory}</TableCell>
                  <TableCell>{row.mfgSupplier}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.package}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={row.status === "Available" ? "success" : "error"}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => alert("Edit Clicked")}
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

      {/* Modal for Add Element */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#b3e5fc",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            width: "60%",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>

          {/* Form */}
          <Grid2 container spacing={2}>
            <Grid2 item xs={6}>
              <TextField label="Asset Id" variant="outlined" fullWidth />
            </Grid2>
            <Grid2 item xs={6}>
              <TextField label="Asset Name" variant="outlined" fullWidth />
            </Grid2>
            <Grid2 item xs={6}>
              <TextField label="Description" variant="outlined" fullWidth />
            </Grid2>
            <Grid2 item xs={6}>
              <TextField label="Category" variant="outlined" fullWidth />
            </Grid2>
            <Grid2 item xs={6}>
              <TextField label="MGF/Supplier" variant="outlined" fullWidth />
            </Grid2>
            <Grid2 item xs={6}>
              <TextField label="Location" variant="outlined" fullWidth />
            </Grid2>
            <Grid2 item xs={6}>
              <TextField label="Package" variant="outlined" fullWidth />
            </Grid2>
            <Grid22 item xs={6}>
              <TextField label="Quantity" variant="outlined" fullWidth />
            </Grid22>
          </Grid2>

          {/* Save Button */}
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => {
                // Add save logic here
                console.log("Form Submitted");
                handleClose();
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Dashboard2;
// import React from "react";
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
// } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import ViewListIcon from "@mui/icons-material/ViewList";
// import ceinsys_logo from "../Image/ceinsys_logo.png";

// const Dashboard2 = () => {
//   // Simulated Data
//   const tableData = [
//     {
//       id: 1,
//       componentName: "Resistor",
//       value: "220 Ω",
//       specification: "SMD Resistor",
//       subCategory: "Electronics",
//       mfgSupplier: "Robu.in",
//       location: "Box No 1",
//       package: "0603",
//       stock: 10,
//       status: "Available",
//     },
//   ];

//   return (
//     <div>
//       {/* Top App Bar */}
//       <AppBar position="fixed" sx={{backgroundColor:"#3B92CD"}}>
//         <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
//           {/* Left Section */}
//           <img
//               src={ceinsys_logo}
//               alt="Ceinsys Logo"
//               style={{ height: "40px", marginRight: "16px" }}
//             />
//           <div style={{ display: "flex", alignItems: "center", gap: "30px", marginLeft: "140px" }}>
            
//             <Button color="inherit">Category</Button>
//             <Button color="inherit">History</Button>
//             <Button color="inherit">Add Element</Button>
//             <Button color="inherit">Request</Button>
//             <Typography color="inherit" style={{ marginRight: "16px" }}>
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
//       <div style={{ marginTop: "60px", padding: "16px" , backgroundColor:"#A8D2EF"}}>
//         <Typography variant="h5">Welcome Admin</Typography>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginTop: "16px",
//             backgroundColor: "#f5f5f5",
//             padding: "8px 16px",
//             borderRadius: "8px",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//             <Select
//               defaultValue="All"
//               style={{ marginRight: "16px", width: "120px" }}
//             >
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

//       {/* Table Section */}
//       <div style={{ padding: "16px" }}>
//         <Paper>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Component Name</TableCell>
//                 <TableCell>Value</TableCell>
//                 <TableCell>Specification</TableCell>
//                 <TableCell>Sub Category</TableCell>
//                 <TableCell>MFG/Supplier</TableCell>
//                 <TableCell>Location</TableCell>
//                 <TableCell>Package</TableCell>
//                 <TableCell>Stock</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Edit</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {tableData.map((row) => (
//                 <TableRow key={row.id}>
//                   {/* <TableCell> */}
//                     {/* <Button
//                       variant="text"
//                       style={{ textTransform: "none", color: "blue" }}
//                     >
//                       {row.componentName}
//                     </Button> */}
//                   {/* </TableCell> */}
//                   <TableCell>{row.componentName}</TableCell>
//                   <TableCell>{row.value}</TableCell>
//                   <TableCell>{row.specification}</TableCell>
//                   <TableCell>{row.subCategory}</TableCell>
//                   <TableCell>{row.mfgSupplier}</TableCell>
//                   <TableCell>{row.location}</TableCell>
//                   <TableCell>{row.package}</TableCell>
//                   <TableCell>{row.stock}</TableCell>
//                   <TableCell>
//                     <Button
//                       variant="contained"
//                       color={row.status === "Available" ? "success" : "error"}
//                     >
//                       {row.status}
//                     </Button>
//                   </TableCell>
//                   <TableCell>
//                     <Button
//                       color="secondary"
//                       variant="contained"
//                       onClick={() => alert("Edit Clicked")}
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
//     </div>
//   );
// };

// export default Dashboard2;
