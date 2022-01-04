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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IndieStop
          </Typography>
          <IconButton>
            <Badge>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
