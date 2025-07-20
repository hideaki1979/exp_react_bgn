import React, { useEffect, useState } from 'react'
import styles from "./style.module.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// こちらに記載します
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_SHEET_ID;
const SHEET_NAME = "test";
const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;

const CustomerList = () => {

    // スプレッドシートAPIを取得
    // スプレッドシートAPIの取得したデータを保持するuseStateを準備
    const [data, setData] = useState([]);

    // useEffectを使ってAPIを取得する
    useEffect(() => {
        console.log("useEffect発火しました！");
        // APIから情報を取得し、jsの形に変換する（json()というおまじないを使う）
        const fetchData = async () => {
            try {
                // const response = await fetch(
                //     "https://jsonplaceholder.typicode.com/todos"
                // );
                const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
                const res = await fetch(url);
                const json = await res.json();
                console.log(res, "取得の確認");
                console.log(json.values, "中身の確認");

                if (json.values) {
                    const mapped = json.values.map((row) => ({
                        id: Number(row[0]),
                        area: row[1],
                        date: row[2],
                        tel: row[3],
                        score: row[4],
                    }));
                    setData(mapped);
                }
            } catch (error) {
                console.error("Error, fetching JSON data", error);
            }
        }
        // 実行させる
        fetchData();
    }, []);


    return (
        <div className={styles.CustomerList}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">id</TableCell>
                            <TableCell align="right">エリア</TableCell>
                            <TableCell align="right">登録日</TableCell>
                            <TableCell align="right">電話番号</TableCell>
                            <TableCell align="right">評価</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.area}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.tel}</TableCell>
                                <TableCell align="right">{row.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CustomerList