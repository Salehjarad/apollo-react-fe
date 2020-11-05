import React, { HtmlHTMLAttributes, useState } from "react";
import { Formik, Form, Field, FieldInputProps } from "formik";
import {
  Button,
  Divider,
  LinearProgress,
  Box,
  Grid,
  makeStyles,
  IconButton,
  Theme,
  createStyles,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
} from "@material-ui/core";

import { ScannerRounded } from "@material-ui/icons";
import * as Yub from "yup";

import { useCreateDocumentMutation } from "../../generated/graphql";

import TextInput from "./TextInput";
import Selector from "./SelectInput";
import Tags, { ChipData } from "./Tags";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    marginTopForm: {
      marginTop: 20,
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

interface Values {
  email: string;
  password: string;
}

const tagList: string[] = ["جديد", "مهم", "تعميم", "سري"];

const items = [
  {
    label: "خطاب",
    value: "خطاب",
  },
  {
    label: "تعميم",
    value: "تعميم",
  },
  {
    label: "رد محلي",
    value: "رد محلي",
  },
  {
    label: "مستخلص",
    value: "مستخلص",
  },
  {
    label: "عقد",
    value: "عقد",
  },
];

interface InitialValueInterface {
  doc_info: string;
  doc_number: string;
  doc_date: string;
  doc_type: string;
  doc_tags?: (string | null)[];
}

const initialValues: InitialValueInterface = {
  doc_info: "",
  doc_number: "",
  doc_date: "",
  doc_type: "",
  doc_tags: [],
};

const formikValidtion = Yub.object().shape({
  doc_info: Yub.string()
    .min(5, " يجب تعبئة ملعومات كافية عن المعاملة لا تقل عن 150 حرف")
    .max(400, "المعلومات يجب أن لا تكون أكثر من 500 حرف")
    .required("حقل معلومات مطلوب"),
  doc_number: Yub.string()
    .min(3, "الرجاء التزويد برقم المعاملة")
    .max(20, "")
    .required("رقم المعاملة مطلوب"),
  doc_type: Yub.string().required("الرجاء إختيار نوع المعاملة"),
  doc_date: Yub.string().required("الرجاء التزويد بتاريخ المعاملة"),
});

interface IpcScanProps {
  state: string;
  buffers: any[];
}

const AddForm: React.FC<{}> = (props) => {
  const classes = useStyles();
  const [errorApi, setErrorApi] = React.useState("");
  const [scanInfo, setScanInfo] = React.useState("");
  const [scanProgress, setScanProgress] = React.useState(0);
  const [previewPdf, setPrviewPdf] = React.useState<any>();
  const [showProgress, setShowProgress] = React.useState(false);
  const [pdfFile, setPdfFile]: any = useState(null);

  const framRef: React.MutableRefObject<any> = React.useRef();

  // apollo server
  const [addDocument] = useCreateDocumentMutation();

  React.useEffect(() => {
    window.ipcr.on("scan-dcos", (e, args: IpcScanProps) => {
      setShowProgress(true);
      const { state, buffers } = args;
      setScanInfo(state);
      switch (true) {
        case state.includes("Beginning scan..."):
          setScanProgress(10);
          return setScanInfo("جاري سحب الملفات من السكانر...");
        case state.includes("page(s) scanned"): {
          let newState = state.replace(
            "page(s) scanned.",
            "الصفحات التي تم سحبها"
          );
          setScanProgress(40);
          return setScanInfo(newState);
        }
        case state.includes("Exporting..."): {
          setScanProgress(60);
          return setScanInfo("جاري التصدير...");
        }
        case state.includes("Scanned page"): {
          setScanProgress(65);
          return setScanInfo("تم سحب صفحة");
        }
        case state.startsWith("Exporting page"): {
          let newState = state
            .replace("Exporting page", "تصدير صفحة")
            .replace("of", "من");
          setScanProgress(75);
          return setScanInfo(newState);
        }
        case state.includes("Successfully saved"): {
          setScanProgress(95);
          return setScanInfo(`تجهيز الملف للرفع`);
        }
        case state === "done": {
          setScanProgress(100);

          const newBlobPdf = new Blob(buffers, { type: "application/pdf" });
          setPrviewPdf(URL.createObjectURL(newBlobPdf));

          const newFile = new File([newBlobPdf], "helloworldnow.pdf");
          setPdfFile(newFile);

          console.log("[pdf url]", previewPdf);
          // URL.revokeObjectURL(previewPdf);
          return setShowProgress(false);
        }
        default:
          return setScanInfo("");
      }
    });

    // test scan two
    // window.ipcr.on("test-scan-two", (event, args) => {
    //   const blob = new Blob(args.buffers, { type: "application/pdf" });
    //   const fileOfthis = new File([blob], "Hello word.pdf");
    //   console.log("file file file", fileOfthis);
    //   const pdfUrl = URL.createObjectURL(blob);
    //   if (framRef.current) {
    //     framRef.current.src = pdfUrl;
    //     URL.revokeObjectURL(blob);
    //   }
    // });
  }, []);

  const handelScanner = () => {
    window.ipcr.send("scan-docs");
  };

  const handelupload = () => {
    window.ipcr.send("test-scan-two");
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={formikValidtion}
        onSubmit={async (values, { setSubmitting, resetForm, setValues }) => {
          try {
            console.log("File", pdfFile);
            const data = await addDocument({
              variables: {
                content: values.doc_info,
                doc_type: values.doc_type,
                doc_number: values.doc_number,
                doc_date: values.doc_date,
                file: pdfFile,
                hashtag: {
                  value: values.doc_tags!,
                },
                userId: 1,
              },
            });
            if (data) {
              setErrorApi("nice");
            }
          } catch (e) {
            console.log(e);
            setErrorApi("error");
          }
        }}
      >
        {({
          values,
          submitForm,
          isSubmitting,
          errors,
          isValid,
          setFieldValue,
          resetForm,
          handleChange,
          handleBlur,
        }) => (
          <Card>
            <CardHeader title="إدخال معاملة جديدة" dir="rtl" />
            <CardContent>
              <Form>
                <Typography variant="body2">
                  {errorApi ? errorApi : ""}
                </Typography>
                <Grid
                  container
                  justify="center"
                  className={classes.marginTopForm}
                >
                  <Grid item xs={10}>
                    <TextInput
                      name="doc_info"
                      label="معلومات عن المعاملة"
                      multiline
                      type="text"
                      fullWidth
                      onChange={handleChange}
                      error={!!errors.doc_info}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    xs={10}
                    justify="space-between"
                    className={classes.marginTopForm}
                  >
                    <Grid item>
                      <TextInput
                        name="doc_date"
                        label="تاريخ المعاملة"
                        type="text"
                        onChange={handleChange}
                        error={!!errors.doc_date}
                      />
                    </Grid>
                    <Grid item>
                      <TextInput
                        name="doc_number"
                        label="رقم المعاملة"
                        type="text"
                        onChange={handleChange}
                        error={!!errors.doc_number}
                      />
                    </Grid>
                    <Grid item xs={12} md={4} xl={4}>
                      <Selector
                        name="doc_type"
                        label="نوع المعاملة"
                        items={items}
                        error={!!errors.doc_type}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    justify="center"
                    alignContent="center"
                    className={classes.marginTopForm}
                    container
                  >
                    <Tags
                      label="هاشتاق"
                      name="doc_tags"
                      list={tagList}
                      onChange={(e, v) => setFieldValue("doc_tags", v)}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    justify="center"
                    xs={10}
                    className={classes.marginTopForm}
                  >
                    <Grid
                      item
                      container
                      justify="center"
                      direction="column"
                      alignItems="center"
                    >
                      <Typography variant="body2" dir="rtl">
                        {scanInfo}
                      </Typography>
                      {previewPdf?.length > 0 && (
                        <Grid item>
                          <iframe
                            src={previewPdf}
                            title="preview"
                            width={200}
                            height={250}
                            frameBorder={0}
                          />
                        </Grid>
                      )}
                      {showProgress && (
                        <LinearProgress
                          dir="ltr"
                          variant="determinate"
                          style={{ width: 120 }}
                          value={scanProgress}
                        />
                      )}
                      {/* <iframe ref={framRef} /> */}
                      <Button
                        dir="rtl"
                        className={classes.button}
                        startIcon={<ScannerRounded />}
                        variant="outlined"
                        color="primary"
                        onClick={handelScanner}
                      >
                        سحب الملفات من السكانر
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <pre style={{ color: "#000" }}>
                  {isValid ? "yes" : "no"}
                  {JSON.stringify(values, null, 4)}
                </pre>
              </Form>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                style={{
                  color: "#fff",
                }}
                disabled={!isValid || isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                disabled={isSubmitting}
                onClick={() => {
                  resetForm();
                  setFieldValue("doc_tags", []);
                }}
              >
                مسح الكل
              </Button>
              {isSubmitting && <LinearProgress />}
            </CardActions>
          </Card>
        )}
      </Formik>
    </div>
  );
};

export default AddForm;
