import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const History = () => {
  const [requests, setRequests] = useState([]);

//   useEffect(() => {
    // Fetch data from the backend
//     axios
//       .get('/api/requests') // Adjust the endpoint as per your backend
//       .then((response) => {
//         setRequests(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Item Requests
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {requests.map((request) => (
          <Grid item key={request.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  Request ID: {request.id}
                </Typography>
                <Typography variant="body1">
                  <strong>Item:</strong> {request.item?.name || 'N/A'}
                </Typography>
                <Typography variant="body1">
                  <strong>Requested Quantity:</strong> {request.quantityRequested}
                </Typography>
                <Typography variant="body1">
                  <strong>Approved:</strong> {request.isApproved ? 'Yes' : 'No'}
                </Typography>
                <Typography variant="body1">
                  <strong>User Name:</strong> {request.userName}
                </Typography>
                <Typography variant="body1">
                  <strong>Project Name:</strong> {request.projectName}
                </Typography>
                <Typography variant="body1">
                  <strong>Remark:</strong> {request.remark}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Request Date:</strong>{' '}
                  {new Date(request.localDateTime).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default History;
