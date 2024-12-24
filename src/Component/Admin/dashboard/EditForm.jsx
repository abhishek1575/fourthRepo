import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { updateItem, deleteItem } from "../../../Service/services";

const EditForm = ({ open, handleClose, data }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data); // Update formData when data changes
  }, [data]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await updateItem(formData.id, formData);
      handleClose();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const onSave = ()=>{}

  const handleDelete = async () => {
    try {
      await deleteItem(formData.id);
      handleClose();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

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
          width: "50%",
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

        {/* Form Fields */}
        <TextField
          fullWidth
          name="componentName"
          label="Component Name"
          value={formData.componentName || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="value"
          label="Value"
          value={formData.value || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        {/* Add other fields similarly */}
        <TextField
          fullWidth
          name="specification"
          label="Specification"
          value={formData.specification || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        {/* Buttons */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditForm;
