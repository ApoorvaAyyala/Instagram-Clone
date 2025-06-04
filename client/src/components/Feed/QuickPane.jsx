import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import UploadIcon from "@mui/icons-material/Upload";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import {Typography } from "@mui/material";
import { Link } from "react-router-dom";

function QuickPane() {



  return (
    <div className="pane">
      <ListGroup className="group-list">
        <ListGroup.Item className="d-flex pane-content p-3 " >
          <UploadIcon fontSize="large" />
          <Typography variant="h5" sx={{marginLeft:3}} >Upload</Typography>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex pane-content p-3" >
          <HomeIcon fontSize="large" />
          <Typography variant="h5" sx={{marginLeft:3}} >Home</Typography>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex pane-content p-3" >
          <Person2Icon fontSize="large"/>
          <Typography variant="h5" sx={{marginLeft:3}} >Profile</Typography>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex pane-content p-3">
          <GroupIcon fontSize="large"/>
          <Typography variant="h5" sx={{marginLeft:3}} >Group</Typography>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex pane-content p-3">
          <ChatIcon fontSize="large"/>
          <Typography variant="h5" sx={{marginLeft:3}} >Chat</Typography>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex pane-content p-3">
          <PersonAddIcon fontSize="large"/>
          <Typography variant="h5" sx={{marginLeft:3}} >Add Person</Typography>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex pane-content p-3" >
          <SettingsIcon fontSize="large"/>
          <Typography variant="h5" sx={{marginLeft:3}} >Setting</Typography>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex pane-content p-3">
          <AddIcCallIcon fontSize="large"/>
          <Typography variant="h5" sx={{marginLeft:3}} >Contact Us</Typography>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex pane-content p-3" >
          <MeetingRoomIcon fontSize="large"/>
          <Typography variant="h5" sx={{marginLeft:3}}>Logout</Typography>
        </ListGroup.Item>
      </ListGroup>

    </div>
  );
}

export default QuickPane;
