import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
// Add a logo or something

const Navbar: React.FC = () => {
  const { quantity } = useContext(ShoppingCartContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IndieStop
          </Typography>
          <IconButton>
            <Badge badgeContent={quantity}>
              <Link to={"/cart"}>
                <ShoppingCartIcon />
              </Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
