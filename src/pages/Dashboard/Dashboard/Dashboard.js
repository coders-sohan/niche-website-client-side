import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../../components/AdminRoute/AdminRoute";
import AllOrders from "../AllOrders/AllOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProducts from "../AddProducts/AddProducts";
import AddReviews from "../AddReviews/AddReviews";
import Orders from "../Orders/Orders";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import Pay from "../Pay/Pay";

const drawerWidth = 200;

const Dashboard = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const { user, admin, logout } = useAuth();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	let { path, url } = useRouteMatch();

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<Link style={{ textDecoration: "none" }} to="/home">
				<Button className="text-3xl">Home</Button>
			</Link>
			<br />
			<Link style={{ textDecoration: "none" }} to={`${url}`}>
				<Button>My Orders</Button>
			</Link>
			<br />
			<Link style={{ textDecoration: "none" }} to={`${url}/pay`}>
				<Button>Payment</Button>
			</Link>
			<br />
			<Link style={{ textDecoration: "none" }} to={`${url}/addReviews`}>
				<Button>Add Reviews</Button>
			</Link>
			<br />
			{admin && (
				<Box>
					<Link style={{ textDecoration: "none" }} to={`${url}/allOrders`}>
						<Button>Manage All Orders</Button>
					</Link>
					<br />
					<Link
						style={{ textDecoration: "none" }}
						to={`${url}/manageAllProducts`}
					>
						<Button>Manage all Products</Button>
					</Link>
					<br />
					<Link style={{ textDecoration: "none" }} to={`${url}/addProduct`}>
						<Button>Add a Products</Button>
					</Link>
					<br />
					<Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
						<Button>Make Admin</Button>
					</Link>
					<br />
				</Box>
			)}
			<Link style={{ textDecoration: "none" }}>
				<Button onClick={logout}>Log out</Button>
			</Link>
			<br />
		</div>
	);

	return (
		<div>
			<Box
				sx={{
					display: "flex",
				}}
			>
				<CssBaseline />
				<AppBar
					position="fixed"
					sx={{
						width: { sm: `calc(100% - ${drawerWidth}px)` },
						ml: { sm: `${drawerWidth}px` },
						justifyContent: "space-between",
						bgcolor: "#F83A3A",
					}}
				>
					<Toolbar
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap component="div">
							Dashboard
						</Typography>
						<Typography
							style={{ marginLeft: "50px" }}
							variant="h6"
							noWrap
							component="div"
						>
							Signed in as: {user.displayName}
						</Typography>
					</Toolbar>
				</AppBar>
				<Box
					component="nav"
					sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
					aria-label="mailbox folders"
				>
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
					<Drawer
						variant="permanent"
						sx={{
							display: { xs: "none", sm: "block" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
						open
					>
						{drawer}
					</Drawer>
				</Box>
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 3,
						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}
				>
					<Toolbar />
					<Switch>
						<Route exact path={path}>
							<Orders></Orders>
						</Route>
						<Route path={`${path}/pay`}><Pay></Pay></Route>
						<Route path={`${path}/addReviews`}>
							<AddReviews></AddReviews>
						</Route>
						<AdminRoute path={`${path}/allOrders`}>
							<AllOrders></AllOrders>
						</AdminRoute>
						<AdminRoute path={`${path}/manageAllProducts`}>
							<ManageAllProducts></ManageAllProducts>
						</AdminRoute>
						<AdminRoute path={`${path}/addProduct`}>
							<AddProducts></AddProducts>
						</AdminRoute>
						<AdminRoute path={`${path}/makeAdmin`}>
							<MakeAdmin></MakeAdmin>
						</AdminRoute>
					</Switch>
				</Box>
			</Box>
		</div>
	);
};

export default Dashboard;
