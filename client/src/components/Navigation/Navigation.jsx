import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Avatar from "@mui/material/Avatar";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import logo from "../../public/images/logo.jpeg";
import profile from "../../public/images/profile.jpeg";
import { Badge, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/CustomContext";

function Navigation() {
  const context = useContext(AppContext)
  const navigate = useNavigate();
  function logout(){
     context.setUserId("");
     localStorage.clear();
     navigate("/login");
     window.location.reload(false);
     
  }
  return (
    <div>
      <Navbar bg="light" className="topbar p-3">
        <Container>
          <Navbar.Brand>
            <Link to="/">
            <img src={logo} alt="logo_here" width="100" />
            </Link>
          </Navbar.Brand>
          <Container className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search..."
              size="l"
              className="ms-2 "
            />
          </Container>

          <Container className="d-flex flex-row-reverse ">
            <MeetingRoomIcon onClick={logout} className="ms-4" fontSize="large"/>
            <Avatar
              src={profile}
              alt="profile-image"
              sx={{ width: 50, height: 50 }}
            />
            <Badge badgeContent={4} className="me-4 mt-2" color="primary">
              <NotificationsIcon />
            </Badge>
            <Badge badgeContent={3} className="me-4 mt-2" color="primary">
              <ChatIcon onClick={()=>{
                  navigate("/chat");
                  window.location.reload(false);
              }}/>
            </Badge>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
