import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../../../hooks/useAuth";

const Orders = () => {
	const { user, token } = useAuth();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`https://salty-river-06883.herokuapp.com/orders?email=${user.email}`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, [user.email]);

	// Cancel a product
	const handleCancelProduct = (id) => {
		const proceed = window.confirm("Are you sure, you want to cancel?");
		if (proceed) {
			const url = `https://salty-river-06883.herokuapp.com/orders?email=${user.email}&${id}`;
			console.log(url);
			fetch(url, {
				method: "DELETE",
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert("Canceled Successfully");
						const remainingProducts = products.filter(
							(product) => product._id !== id
						);
						setProducts(remainingProducts);
					}
				});
		}
	};

	return (
		<TableContainer component={Paper}>
			<h2 className="text-3xl font-semibold my-7 text-center">
				Your Order Table
			</h2>
			<Table aria-label="Your Order Table">
				<TableHead>
					<TableRow>
						<TableCell>Customer Name</TableCell>
						<TableCell align="right">E-mail</TableCell>
						<TableCell align="right">Product Name</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell align="right">Address</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map((row) => (
						<TableRow
							key={row?.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row?.name}
							</TableCell>
							<TableCell align="right">{row?.email}</TableCell>
							<TableCell align="right">{row?.product?.name}</TableCell>
							<TableCell align="right">{row?.product?.price}</TableCell>
							<TableCell align="right">{row?.address}</TableCell>
							<TableCell align="right">
								<button
									onClick={() => handleCancelProduct(row._id)}
									className="px-2 py-1 rounded font-bold bg-gray-100 text-red-600 transition ease-linear flex items-center"
								>
									Cancel
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Orders;
