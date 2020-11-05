import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import { useSearchLazyQuery } from "../generated/graphql";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const Home: React.FC<{}> = (props) => {
  const [searchDocument, { data, loading, error }] = useSearchLazyQuery();
  // const [documents, setDocuments] = React.useState<any>([])

  const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) {
      searchDocument({
        variables: {
          query: e.target.value,
        },
      });
    }
  };

  if (error) {
    return <Typography variant="body2">Error</Typography>;
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="body2">Home</Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12} container>
        <TextField
          fullWidth
          dir="rtl"
          variant="outlined"
          label="بحث عن ملف"
          onChange={handelSearch}
        />
      </Grid>
      <Grid item>
        {loading && <Typography variant="caption">جاري جلب الملفات</Typography>}
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper elevation={0} dir="rtl">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>info</TableCell>
                  <TableCell>date</TableCell>
                  <TableCell>number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.search?.map((item) => (
                  <TableRow key={item?.id}>
                    <TableCell>{item?.content}</TableCell>
                    <TableCell>{item?.doc_date}</TableCell>
                    <TableCell>{item?.doc_number}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
