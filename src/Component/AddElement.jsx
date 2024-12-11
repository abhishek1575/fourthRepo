import React, { useState } from 'react';
import { Button, Modal, Box, TextField, Grid2, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddElement = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Add Element Button */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Element
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#b3e5fc',
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            width: '60%',
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 6, right: 8 }}
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
            <Grid2 item xs={6}>
              <TextField label="Quantity" variant="outlined" fullWidth />
            </Grid2>
          </Grid2>

          {/* Save Button */}
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => {
                // Add save logic here
                console.log('Form Submitted');
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

export default AddElement;
