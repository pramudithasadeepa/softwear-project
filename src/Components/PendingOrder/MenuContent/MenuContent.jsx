
import './MenuContent.css'
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import NoteIcon from '@mui/icons-material/Note';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



function MenuContent() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div class='Mheader1'>
      
      <List  sx={{ width: '100%'}}
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon sx={{color:'white'}}/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <NoteIcon sx={{color:'white'}}/>
        </ListItemIcon>
        <ListItemText primary="Orders" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
            <AddBoxIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Create New" />
          </ListItemButton>
        </List>
      </Collapse>
     
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
            <PendingActionsIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Pending" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
             <AutoModeIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="In Progress" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
             <TaskAltIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Completed" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
        <AdminPanelSettingsIcon sx={{color:'white'}}/>
        </ListItemIcon>
        <ListItemText primary="Administrators" />
      </ListItemButton>
       
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <PersonIcon sx={{color:'white'}}/>
        </ListItemIcon>
        <ListItemText primary="Courier Persons" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
            <AccountBoxIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Registered" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
            <PersonSearchIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Applicant" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon>
        <SettingsIcon sx={{color:'white'}}/>
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <LogoutIcon sx={{color:'white'}}/>
        </ListItemIcon>
        <ListItemText primary="Log Out" />
      </ListItemButton>

    </List>
    </div>
  )
}

export default MenuContent
