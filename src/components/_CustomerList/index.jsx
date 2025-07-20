import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import styles from "./style.module.scss";

const data = [
    {
        id: 1,
        title: "新宿",
        text: "04月登録",
        tel: "080-xxxx-xxx",
    },
    {
        id: 2,
        title: "渋谷",
        text: "04月登録",
        tel: "080-xxxx-xxx",
    },
    {
        id: 3,
        title: "恵比寿",
        text: "04月登録",
        tel: "080-xxxx-xxx",
    },
    {
        id: 4,
        title: "大阪",
        text: "04月登録",
        tel: "080-xxxx-xxx",
    },
    {
        id: 5,
        title: "島根",
        text: "04月登録",
        tel: "080-xxxx-xxx",
    },
    {
        id: 6,
        title: "新宿",
        text: "02/04月登録",
        tel: "080-xxxx-xxx",
    },
];

const CustomerList = () => {
    return (
        <>
            <div className={styles.customerList}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">id</TableCell>
                                <TableCell align="right">エリア</TableCell>
                                <TableCell align="right">登録日</TableCell>
                                <TableCell align="right">電話番号</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="right">{row.id}</TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.text}</TableCell>
                                    <TableCell align="right">{row.tel}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default CustomerList;