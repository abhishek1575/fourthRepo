import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const AssetForm = ({ assetId, assetName, assetValue, assetDescription }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#b3d9ff",
        padding: 4,
        borderRadius: 2,
        position: "relative",
        width: "400px",
        margin: "auto",
        mt: 4,
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "black",
        }}
        onClick={() => window.location.reload()} // Close and reset
      >
        <CloseIcon />
      </IconButton>

      <Grid container spacing={2} mb={2}>
        
        <Grid item xs={6}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Asset Name - {assetName}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Asset Value: {assetValue}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Description: {assetDescription}
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <TextField
          fullWidth
          label="Required Quantity"
          variant="outlined"
          size="small"
          sx={{ backgroundColor: "#e6e6e6" }}
          type="text" // Prevent automatic number inputs to allow custom validation
          onChange={(e) => {
            const value = e.target.value;
            // Allow only numbers and prevent negative values
            if (/^\d*$/.test(value)) {
              e.target.value = value; // Update the value if valid
            }
    }}
  />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="User Name"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: "#e6e6e6" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Project"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: "#e6e6e6" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Remark"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: "#e6e6e6" }}
          />
        </Grid>

        
      </Grid>

      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "#0000ff",
          color: "white",
          fontWeight: "bold",
        }}
        fullWidth
      >
        Submit
      </Button>
    </Box>
  );
};

export default AssetForm;