import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ManageAllOrders = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/data`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	// Delete a product
	const handleDeleteProduct = (id) => {
		const proceed = window.confirm("Are you sure, you want to delete?");
		if (proceed) {
			const url = `http://localhost:5000/data/${id}`;
			console.log(url);
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert("Deleted Successfully");
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
				Manage All Product's Table
			</h2>
			<Table aria-label="Your Order Table">
				<TableHead>
					<TableRow>
						<TableCell>Product Name</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell align="right">Model Number</TableCell>
						<TableCell align="right">Describe</TableCell>
						<TableCell align="right">Img</TableCell>
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
							<TableCell align="right">{row?.price}</TableCell>
							<TableCell align="right">{row?.details?.modelNumber}</TableCell>
							<TableCell align="right">
								{row?.desc.slice(0, 35)}......
							</TableCell>
							<TableCell align="right">
								<div>
									<img className="h-8 w-8" src={row?.img} alt={row?.name} />
								</div>
							</TableCell>
							<TableCell align="right">
								<button className="px-2 py-1 rounded font-bold bg-gray-100 text-red-600 transition ease-linear flex items-center">
									Update
								</button>
							</TableCell>
							<TableCell align="right">
								<button
									className="px-2 py-1 rounded font-bold bg-gray-100 text-red-600 transition ease-linear flex items-center"
									onClick={() => handleDeleteProduct(row._id)}
								>
									Delete
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ManageAllOrders;
