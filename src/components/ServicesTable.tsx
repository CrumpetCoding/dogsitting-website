import { TableContainer, TableHead, Table, TableBody, TableRow, TableCell, Paper } from "@mui/material";







export default function ServicesTable() {
    return (
        <TableContainer component={Paper} sx={{
            maxWidth: 800,
            margin: 'auto',
        }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Product Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            key={row.id}
                        >
                            <TableCell>{row.product_name}</TableCell>
                            <TableCell>{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const tableData = [{
    "id": 1,
    "product_name": "Spinach and Cheese Stuffed Shells",
    "price": "£5.99"
}, {
    "id": 2,
    "product_name": "Kids' Art Supplies Kit",
    "price": "£29.99"
}, {
    "id": 3,
    "product_name": "Spicy Thai Coconut Soup",
    "price": "£3.99"
}, {
    "id": 4,
    "product_name": "Kids' Gardening Kit",
    "price": "£24.99"
}, {
    "id": 5,
    "product_name": "Kale and Quinoa Salad",
    "price": "£6.49"
}, {
    "id": 6,
    "product_name": "Honey Graham Crackers",
    "price": "£3.29"
}, {
    "id": 7,
    "product_name": "Watercolor Paint Set",
    "price": "£19.99"
}, {
    "id": 8,
    "product_name": "Indian Curry Sauce",
    "price": "£3.69"
}, {
    "id": 9,
    "product_name": "Pineapple Coconut Yogurt",
    "price": "£4.49"
}, {
    "id": 10,
    "product_name": "Brazil Nuts",
    "price": "£10.99"
}]