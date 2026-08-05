import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const RootLayout = () => (
  <>
    <div id="menu">
      <AppBar position='static'>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <Button variant='text'>
            <Link to="/" className="[&.active]:font-bold">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', '&:hover': { color: '#283044' } }}>
                Home
              </Typography>
            </Link>{' '}
          </Button>
          <Button variant='text'>
            <Link to="/services" className="[&.active]:font-bold">
              <Typography variant='h6' component="div" sx={{ flexGrow: 1, color: 'white', '&:hover': { color: '#283044' } }}>
                Services
              </Typography>
            </Link>{' '}
          </Button>
          <Button variant='text'>
            <Link to="/contact" className="[&.active]:font-bold">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', '&:hover': { color: '#283044' } }}>
                Contact
              </Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })