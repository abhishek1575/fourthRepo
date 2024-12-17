import React, { useState } from "react";
import { Box, Button, TextField, Grid, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const AddElement = ({ handleClose }) => {
  const [category, setCategory] = useState("Category");
  const [subCategory, setSubCategory] = useState("Sub Category");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#fff", borderRadius: "8px", boxShadow: 24 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Asset Name"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={handleCategoryChange} label="Category">
              <MenuItem value="Category" disabled>Category</MenuItem>
              <MenuItem value="Asset">Asset</MenuItem>
              <MenuItem value="Component">Component</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Sub Category</InputLabel>
            <Select value={subCategory} onChange={handleSubCategoryChange} label="Sub Category">
              <MenuItem value="Sub Category" disabled>Sub Category</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Mechanical">Mechanical</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="MGF/Supplier"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Package"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Quantity"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="SAP NO"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="MPN"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
          />
        </Grid>
      </Grid>

      {/* Save Button */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: "8px",
            '&:hover': { backgroundColor: "#1976d2" }, // Darken the button color on hover
          }}
          onClick={() => {
            console.log("Form Submitted");
            console.log("Category:", category);
            console.log("Sub Category:", subCategory);
            handleClose(); // Close the modal after form submission
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddElement;




// import React, { useState } from "react";
// import { Box, Button, IconButton, TextField, Grid, Select, MenuItem, FormControl, InputLabel, Modal } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const AddElement = ({ handleClose }) => {
//   const [category, setCategory] = useState("Category");
//   const [subCategory, setSubCategory] = useState("Sub Category");

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleSubCategoryChange = (event) => {
//     setSubCategory(event.target.value);
//   };

//   return (
//     <Box sx={{ padding: 4, backgroundColor: "#fff", borderRadius: "8px", boxShadow: 24 }}>
//       {/* Close Button */}
//       <IconButton
//         onClick={handleClose}
//         sx={{
//           position: "absolute",
//           top: 8,
//           right: 8,
//           backgroundColor: "#f44336", // Red background for the close button
//           color: "#fff",
//           '&:hover': { backgroundColor: "#d32f2f" }, // Darken red on hover
//         }}
//       >
//         <CloseIcon />
//       </IconButton>

//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <TextField
//             label="Asset Name"
//             variant="outlined"
//             fullWidth
//             sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Description"
//             variant="outlined"
//             fullWidth
//             sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FormControl variant="outlined" fullWidth>
//             <InputLabel>Category</InputLabel>
//             <Select value={category} onChange={handleCategoryChange} label="Category">
//               <MenuItem value="Category" disabled>Category</MenuItem>
//               <MenuItem value="Asset">Asset</MenuItem>
//               <MenuItem value="Component">Component</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FormControl variant="outlined" fullWidth>
//             <InputLabel>Sub Category</InputLabel>
//             <Select value={subCategory} onChange={handleSubCategoryChange} label="Sub Category">
//               <MenuItem value="Sub Category" disabled>Sub Category</MenuItem>
//               <MenuItem value="Electronics">Electronics</MenuItem>
//               <MenuItem value="Mechanical">Mechanical</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="MGF/Supplier"
//             variant="outlined"
//             fullWidth
//             sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Location"
//             variant="outlined"
//             fullWidth
//             sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Package"
//             variant="outlined"
//             fullWidth
//             sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Quantity"
//             variant="outlined"
//             fullWidth
//             sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="SAP NO"
//             variant="outlined"
//             fullWidth
//             sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="MPN"
//             variant="outlined"
//             fullWidth
//             sx={{ borderRadius: "8px", backgroundColor: "#f5f5f5" }}
//           />
//         </Grid>
//       </Grid>

//       {/* Save Button */}
//       <Box textAlign="center" mt={4}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           sx={{
//             borderRadius: "8px",
//             '&:hover': { backgroundColor: "#1976d2" }, // Darken the button color on hover
//           }}
//           onClick={() => {
//             console.log("Form Submitted");
//             console.log("Category:", category);
//             console.log("Sub Category:", subCategory);
//             handleClose();
//           }}
//         >
//           Save
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default AddElement;


// import React, { useState } from "react";
// import { Box, Button, IconButton, TextField, Grid, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const AddElement = ({ handleClose }) => {
//   const [category, setCategory] = useState("Category"); // Default value
//   const [subCategory, setSubCategory] = useState("Sub Category"); // Default value

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleSubCategoryChange = (event) => {
//     setSubCategory(event.target.value);
//   };

//   return (
//     <Box>
//       {/* Close Button */}
//       <IconButton
//         onClick={handleClose}
//         sx={{ position: "absolute", top: 8, right: 8 }}
//       >
//         <CloseIcon />
//       </IconButton>

//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <TextField label="Asset Name" variant="outlined" fullWidth />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Description" variant="outlined" fullWidth />
//         </Grid>
//         <Grid item xs={6}>
//           <FormControl variant="outlined" fullWidth>
//             <InputLabel>Category</InputLabel>
//             <Select value={category} onChange={handleCategoryChange} label="Category">
//               <MenuItem value="Category" disabled>
//                 Category
//               </MenuItem>
//               <MenuItem value="Asset">Asset</MenuItem>
//               <MenuItem value="Component">Component</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={6}>
//           <FormControl variant="outlined" fullWidth>
//             <InputLabel>Sub Category</InputLabel>
//             <Select value={subCategory} onChange={handleSubCategoryChange} label="Sub Category">
//               <MenuItem value="Sub Category" disabled>
//                 Sub Category
//               </MenuItem>
//               <MenuItem value="Electronics">Electronics</MenuItem>
//               <MenuItem value="Mechanical">Mechanical</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="MGF/Supplier" variant="outlined" fullWidth />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Location" variant="outlined" fullWidth />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Package" variant="outlined" fullWidth />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Quantity" variant="outlined" fullWidth />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="SAP NO" variant="outlined" fullWidth />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="MPN" variant="outlined" fullWidth />
//         </Grid>
//       </Grid>

//       {/* Save Button */}
//       <Box textAlign="center" mt={3}>
//         <Button
//           variant="contained"
//           color="secondary"
//           size="large"
//           onClick={() => {
//             console.log("Form Submitted");
//             console.log("Category:", category);
//             console.log("Sub Category:", subCategory);
//             handleClose();
//           }}
//         >
//           Save
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default AddElement;

