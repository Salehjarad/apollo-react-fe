import React, { useState } from "react";
import {
  useCreateDocumentMutation,
  useAddAtachmentMutation,
} from "../generated/graphql";
import { TextField } from "@material-ui/core";

const NewDocument: React.FC<{}> = (props) => {
  const [file, setFile] = useState(null);
  const [addDocument] = useCreateDocumentMutation();
  const [addAtahcmnent] = useAddAtachmentMutation();

  const addNewDocumentHandler = () => {
    addDocument({
      variables: {
        content: "one one",
        doc_date: String(new Date().getTime()),
        doc_number: "sq122",
        doc_type: "important",
        userId: 1,
        file,
        hashtag: {
          value: ["saleh", "new", "reactjs"],
        },
      },
    })
      .then((result) => {
        console.log("res", result);
      })
      .catch((e) => console.log("errrrror", e));
  };

  const addNewAttachment = async () => {
    const results = await addAtahcmnent({
      variables: {
        docId: 5,
        file,
      },
    });

    console.log(results);
  };

  const handelfile = (f: React.ChangeEvent<HTMLInputElement | any>) => {
    if (f.target.validity) {
      setFile(f.target.files[0]);
    }
  };

  const callScaner = () => window.ipcr.send("scanner");

  return (
    <div>
      hello world from new document
      <input type="file" onChange={handelfile} placeholder="file" />
      <button onClick={callScaner}>now what</button>
    </div>
  );
};

export default NewDocument;
