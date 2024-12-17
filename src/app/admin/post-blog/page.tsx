"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import {Button, Card, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ImageIcon, ListChecksIcon, Table, TextSelect } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import SequenceFormat from "./Format";

const Page = ()=> {

  const initialFormats:any = {
    text: { id: uuidv4(), type: "text", heading: "", paragraph: "" },
    img: { id: uuidv4(), type: "img", url: "" },
    list: { id: uuidv4(), type: "list", style: "", list: [] },
    table: { id: uuidv4(), type: "table", title: "", table: [[""]] },
  };

  const [sequence, setSequence] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    url:"",
    title:"",
    imageUrl:"",
    writer:"",
  });
  const [meta, setMeta] = useState({
    title: "",
    description: "",
  });

  const addSequence = (type:any) => {
    setSequence((prev:any) => [...prev, { ...initialFormats[type] }]);
  };

  const addSequenceAfterId = (id:any, type:any) => {
    const index = sequence.findIndex((item:any) => item.id === id);
    if (index !== -1) {
      const newSequence = [...sequence];
      newSequence.splice(index + 1, 0, { ...initialFormats[type] });
      setSequence(newSequence);
    }
  };

  const handleDetailsChange = (e:any) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleMetaChange = (e:any) => {
    const { name, value } = e.target;
    setMeta((prevMeta) => ({ ...prevMeta, [name]: value }));
  };

  const submitBlog = async () => {
    if (!details.url) {
      toast.error("Url is required");
      return;
    }
    setLoading(true);
    try {
      toast("Uploading");
      const response = await fetch("/api/blog/post", {
        method: "POST",
        body: JSON.stringify({ data: details, sequence, meta }),
      });
      const res = await response.json();
      if (res.status) {
        alert("Uploaded");
      } else {
        alert(res.message);
      }
    } catch (e) {
      console.log(e);
      
      alert("Internal error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack sx={{ width: "100%", py: 5 }} spacing={2}>
    <h1 className="text-3xl capitalize font-bold">Post Blog</h1>

      {/* Meta Fields */}
     <Card className="flex flex-col gap-4 p-2">
     <TextField
        name="url"
         size="small"
        label="Url you want"
        value={details.url}
        onChange={handleDetailsChange}
      />
      <TextField
        name="title"
         size="small"
        label="Meta title"
        value={meta.title}
        onChange={handleMetaChange}
      />
      <TextField
        name="description"
         size="small"
        label="Meta description"
        value={meta.description}
        multiline
        onChange={handleMetaChange}
      />
      <TextField
        name="imageUrl"
         size="small"
        label="Main image url"
        value={details.imageUrl}
        onChange={handleDetailsChange}
      />
      <TextField
        name="title"
        label="Title"
         size="small"
        value={details.title}
        onChange={handleDetailsChange}
      />
      <FormControl fullWidth>
        <InputLabel id="style-sel">Writer</InputLabel>
        <Select
          labelId="style-sel"
          id="style-selec"
          label="Writer"
          name="writer"
          value={details.writer}
          onChange={handleDetailsChange}
        >
          <MenuItem value="Abhishek">Abhishek</MenuItem>
          <MenuItem value="My Hr Expert">My Hr Expert</MenuItem>
          <MenuItem value="Team">Team</MenuItem>
        </Select>
      </FormControl>
     </Card>

      {/* Render Sequence */}
      {sequence.map((item:any) => (
        <SequenceFormat
          key={item.id}
          item={item}
          sequence={sequence}
          setSequence={setSequence}
          addSequenceAfterId={addSequenceAfterId}
        />
      ))}

      {/* Add New Format Buttons */}
      <Card sx={{ display: "flex", justifyContent: "center", gap: 4, p: 1 }}>
        <Button onClick={() => addSequence("img")}>
          <ImageIcon />
        </Button>
        <Button onClick={() => addSequence("table")}>
          <Table />
        </Button>
        <Button onClick={() => addSequence("text")}>
          <TextSelect />
        </Button>
        <Button onClick={() => addSequence("list")}>
          <ListChecksIcon />
        </Button>
      </Card>

      {/* Submit Button */}
        <Button onClick={submitBlog} variant="contained">
          {loading ? "Uploading" : "Submit"}
        </Button>
    
    </Stack>
  );
}
export default Page;