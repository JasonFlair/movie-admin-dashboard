import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tag } from 'primereact/tag';
import { trendingMovies } from "../data";
import SectionTitles from "./SectionTitles";

export default function SimilarMovies () {
  return (
    <>
    <SectionTitles h2="Similar Movies" paragraph="Keep track of the movies on flairbox that are similar to the movie of the week" />
    <TableContainer component={Paper} >
      <Table aria-label="simple table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell> Name</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Watchlists</TableCell>
            <TableCell align="left">Streams</TableCell>
            <TableCell align="left">Release Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trendingMovies.map((trendingMovie, idx) => (
            <TableRow className="table-row" key={idx}>
              <TableCell className="name-column" component="th" scope="row" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                <img src={`./images/${trendingMovie.avatar}`} alt="movie avatar"/>
                {trendingMovie.name}
              </TableCell>
              <TableCell align="left">{trendingMovie.category.map((category, idx) => (
                <Tag className="tag" value={category} key={idx}/>
              ))}</TableCell>
              <TableCell align="left">{trendingMovie.watchlists}</TableCell>
              <TableCell align="left">{trendingMovie.streams}</TableCell>
              <TableCell align="left">{trendingMovie.release_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}