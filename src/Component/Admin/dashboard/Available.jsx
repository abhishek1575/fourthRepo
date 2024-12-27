import React, { useState, useEffect } from "react";
import { Grid, Modal, Box, TextField, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { requestItem } from "../../../Service/services";

const Available = ({ open, handleClose, data, getAllData }) => {
  const [formData, setFormData] = useState(data);
  const [availableForm,setAvailableForm] = useState({'userName':sessionStorage.getItem('Name'),'id':data.id});

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (ProductItem) => {
    console.log('productItem is ',ProductItem);
    
    setAvailableForm({
      ...availableForm,
      [ProductItem.name]: ProductItem.value,
    });
  };

  const handleSave = async () => {
    try {
      await requestItem(availableForm);
      console.log('formdata is ',availableForm);
      
    } catch (error) {
      console.error("Error updating item:", error);
    }
    getAllData();
  };

  useEffect(()=>console.log('data is ',data))
  

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          width: "60%", // Adjust width to make it suitable for two columns
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" mb={2}>
          Edit Item
        </Typography>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "#f44336",
            color: "#fff",
            "&:hover": { backgroundColor: "#d32f2f" },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Grid Layout for Form Fields */}
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={12}>
            <TextField
              name="componentName"
              label="Component Name"
              value={formData.name || ""}
              disabled
              sx={{ mb: 2, width: "100%" }}
            />
            <TextField
              name="value"
              label="Value"
              value={formData.value || ""}
              disabled  
              sx={{ mb: 2, width: "100%" }}
            />
            <TextField
              name="specification"
              label="Specification"
              value={formData.description || ""}
              disabled
              sx={{ mb: 2, width: "100%" }}
            />
            <TextField
              name="stock"
              label="Stock"
              value={availableForm?.stock}
              onChange={(e)=>handleChange({name:'quantityRequested',value:e.target.value})}
              sx={{ mb: 2, width: "100%" }}
              required
            />
            <TextField
              name="projectName"
              label="projectName"
              value={availableForm?.projectName}
              onChange={(e)=>handleChange({name:'projectName',value:e.target.value})}
              required
              sx={{ mb: 2, width: "100%" }}
            />
            <TextField
              name="Remark"
              label="Remark"
              value={availableForm?.remark}
              onChange={(e)=>handleChange({name:'remark',value:e.target.value})}
              sx={{ mb: 2, width: "100%" }}
              required
            />
          </Grid>
        </Grid>

        {/* Buttons */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Available;