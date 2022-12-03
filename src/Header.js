import React, { useState } from 'react'
import  { AppBar, Button, Tab, Tabs, Toolbar, Typography ,useMediaQuery,useTheme } from '@mui/material';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import DrawerComp from './DrawerComp';
const PAGES = ["PRODUCTS","CART  ","CONTACT US","HELP & SUPPORT" ];
const Header = () => {
   const [ value, setValue] = useState();
   const theme= useTheme();
   console.log(theme);
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   console.log(isMatch);

  return (
    <React.Fragment>
        <AppBar sx = {{ background: "#ef5350"}}>

            <Toolbar>
                <StorefrontRoundedIcon fontSize='large' />
                {
                  isMatch ? (
                    <>
                    <Typography sx={{fontSize:"1.5rem",paddingLeft:"35%"}}>
                      MUI NAVBAR
                    </Typography>
                    <DrawerComp />
                    </>
                  ) : (

                    <>
                    <Tabs textColor="inherit" value={value} onChange={(e,value)=> setValue(value)} indicatorColor="secondary">
                            {
                              PAGES.map((page,index)=>(
                             <Tab key = {index} label = {page} />
                              ))
                            }
                     
                </Tabs>

                <Button sx={{marginLeft:"auto"}}  variant="outlined" color="inherit" >
                  Login{""}
                </Button>
                <Button sx={{ marginLeft: "10px"}} variant='outlined' color="inherit" >
                  SIGN UP{""}
                </Button>
                    </>

                  )


                  }
                
                    
            </Toolbar>
          
        </AppBar>
    </React.Fragment> 
  )
}

export default Header;