import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AppBar, Toolbar, Typography, IconButton, Icon } from '@mui/material'

const RootLayout = () => (
  <>
    <div id="menu">
      <AppBar position='static' sx={{ padding: '10px', backgroundColor: '#78A1BB' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/" className="[&.active]:font-bold">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', '&:hover': { color: '#283044' } }}>
              Home
            </Typography>
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            <Typography variant='h6' component="div" sx={{ flexGrow: 1, color: 'white', '&:hover': { color: '#283044' } }}>
              About
            </Typography>
          </Link>{' '}
          <Link to="/contact" className="[&.active]:font-bold">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', '&:hover': { color: '#283044' } }}>
              Contact
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })