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
  IconButton,
} from "@material-ui/core";

import { DataGrid, ColDef, RowData } from "@material-ui/data-grid";

import PdfDialog from "./PdfDialog";

import { VisibilityRounded } from "@material-ui/icons";

const colums: ColDef[] = [
  {
    field: "content",
    headerName: "info",
  },
  {
    field: "doc_date",
    headerName: "date",
  },
  {
    field: "doc_number",
    headerName: "number",
  },
];

// const rowss: RowProps[] = [
//   {
//     col1: 'ok this is one',
//     col2: 'ontoe',
//     doc_number: '4546'
//   }
// ]

const Home: React.FC<{}> = (props) => {
  const [searchDocument, { data, loading, error }] = useSearchLazyQuery();
  const [open, setOpen] = React.useState(false);
  const [iframData, setIframData] = React.useState({ src: "", title: "" });
  const [rowTest, setRowTest]: any[] = React.useState([]);

  // const [documents, setDocuments] = React.useState<any>([])

  React.useEffect(() => {
    if (data) {
      data?.search?.map((item) => {
        if (item) {
          return setRowTest({
            content: item.content,
            doc_date: item.doc_date,
            doc_number: item.doc_number,
          });
        }
      });
    }
  }, [data]);

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

  const handelOpenPdf = (src: any, title: any) => {
    setIframData({ src, title });
    setOpen(true);
  };

  const handelClose = () => {
    setOpen(false);
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="body2">Home</Typography>
        <PdfDialog
          src={iframData.src}
          title={iframData.title}
          handleClose={handelClose}
          show={open}
        />
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
      <Grid item container>
        <DataGrid columns={colums} rows={rowTest as RowData[]} />
      </Grid>
    </Grid>
  );

  // return (
  //   <Grid container direction="column">
  //     <Grid item>
  //       <Typography variant="body2">Home</Typography>
  //       <PdfDialog
  //         src={iframData.src}
  //         title={iframData.title}
  //         handleClose={handelClose}
  //         show={open}
  //       />
  //     </Grid>
  //     <Grid item xs={12} md={12} lg={12} container>
  //       <TextField
  //         fullWidth
  //         dir="rtl"
  //         variant="outlined"
  //         label="بحث عن ملف"
  //         onChange={handelSearch}
  //       />
  //     </Grid>
  //     <Grid item>
  //       {loading && <Typography variant="caption">جاري جلب الملفات</Typography>}
  //     </Grid>
  //     <Grid item xs={12} md={12} lg={12}>
  //       <Paper elevation={0} dir="rtl">
  //         <TableContainer>
  //           <Table>
  //             <TableHead>
  //               <TableRow>
  //                 <TableCell>معلومات عن الخطاب</TableCell>
  //                 <TableCell>تاريخه</TableCell>
  //                 <TableCell>رقمه</TableCell>
  //                 <TableCell>إظهار الملف</TableCell>
  //               </TableRow>
  //             </TableHead>
  //             <TableBody>
  //               {data?.search?.map((item) => (
  //                 <TableRow key={item?.id}>
  //                   <TableCell>{item?.content}</TableCell>
  //                   <TableCell>{item?.doc_date}</TableCell>
  //                   <TableCell>{item?.doc_number}</TableCell>
  //                   <TableCell>
  //                     <IconButton
  //                       onClick={() =>
  //                         handelOpenPdf(item?.file_url, item?.doc_type)
  //                       }
  //                     >
  //                       <VisibilityRounded />
  //                     </IconButton>
  //                   </TableCell>
  //                 </TableRow>
  //               ))}
  //             </TableBody>
  //           </Table>
  //         </TableContainer>
  //       </Paper>
  //     </Grid>
  //   </Grid>
  // );
};

export default Home;
