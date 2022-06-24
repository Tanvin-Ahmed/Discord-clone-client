import * as React from "react";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MoreVert } from "@mui/icons-material";
import { logout } from "../../../utils/authErrorHandler";

const DropdownMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleMenuOpen}
				style={{ color: "white" }}
			>
				<MoreVert />
			</IconButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleMenuClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={logout}>Log out</MenuItem>
			</Menu>
		</div>
	);
};

export default DropdownMenu;
