import React, { useState } from 'react'
import { Drawer , IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ["PRODUCTS","CART","CONTACT US","HELP & SUPPORT","LOGIN","LOGOUT"];

export const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer sx={{color:"black"}} open={openDrawer} onClose={()=>setOpenDrawer(false)}>
         <List>
          {
            PAGES.map((page,index)=>(
              <ListItemButton key= {index}>
                <ListItemIcon>
                    <ListItemText>
                    {page }
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            ))
          }
            
         </List>
      </Drawer>
      <IconButton sx={{color:"white", marginLeft:"auto"}} onClick={()=> setOpenDrawer(!openDrawer)}>
      <MenuIcon fontSize='large' /> 
      </IconButton>
    </React.Fragment>
  )
  }
  export default DrawerComp;

