import { Avatar, Button, Card, CardHeader, TextField } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";

function Status() {
  return (
    <div>
      <Card sx={{ maxWidth: 600, marginTop: 3 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: orange, fontSize: "small" }}
              aria-label="recipe"
            ></Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <TextField
          fullWidth
          placeholder="Whats your Status..."
          id="fullWidth"
          sx={{ padding: 3 }}
        />
        <Button
          variant="contained"
          sx={{ position: "relative", marginLeft: 60,marginBottom:2 ,padding: 1 }}
        >
          Share
        </Button>
      </Card>
    </div>
  );
}

export default Status;
