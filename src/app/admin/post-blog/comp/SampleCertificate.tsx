import React, {useState } from "react";
import { Card, TextField, Button, IconButton } from "@mui/material";
import { MdDelete } from "react-icons/md";
import AddcomponentById from "./AddcomponentById";
import { IoIosAddCircleOutline } from "react-icons/io";

const SampleCertificate = ({ id, updateItem,data, deleteField, addSequenceAfterId }:any) => {
  const {list,paragraph,certificateUrl} = data; 
  
  const handleParagraphChange = (e:any) => {
    const { value } = e.target;
    updateItem(id, { paragraph: value });
  };
  const handleCertificateUrlChange = (e:any) => {
    const { value } = e.target;
    updateItem(id, { certificateUrl: value });
  };

  const handleAddField = () => {
    const updatedList = [...list, { id: Date.now(), value: "" }];
    updateItem(id, { list: updatedList });
  };

  const handleRemoveField = (fieldId:any) => {
    const updatedList = list.filter((field:any) => field.id !== fieldId);
    updateItem(id, { list: updatedList });
  };

  const handleChange = (fieldId:any, value:any) => {
    const updatedList = list.map((field:any) =>
      field.id === fieldId ? { ...field, value } : field
    );
    updateItem(id, { list: updatedList });
  };
  const [open, setOpen] = useState(false);
  const OpenDrawer = () => {
    setOpen(id);
  };
  return (
    <Card sx={{ p: 2 }}>
      <div className="flex justify-between mb-3">
        <h2 className="text-2xl font-semibold">Sample Certificate</h2>
        <MdDelete
          onClick={deleteField}
          size={25}
          className="hover:text-red-600 cursor-pointer"
        />
      </div>
      <TextField
       size="small"
        label="Paragraph"
        multiline
        fullWidth
        value={paragraph}
        onChange={handleParagraphChange}
        sx={{ mb: 2 }}
      />
      <TextField
       size="small"
        label="Certiificate Url"
        multiline
        fullWidth
        value={certificateUrl}
        onChange={handleCertificateUrlChange}
        sx={{ mb: 2 }}
      />
     
      <Button  size="small" variant="contained" onClick={handleAddField}>
        Add Field
      </Button>
      <div>
        {list.map((list:any, index:any) => (
          <div key={index} className="flex items-center mt-2">
            <TextField
              value={list.value}
              onChange={(e) => handleChange(list.id, e.target.value)}
              sx={{ mr: 2 }}
               label="Points"
                size="small"
              fullWidth
            />
            <IconButton
              onClick={() => handleRemoveField(list.id)}
              color="secondary"
            >
              <MdDelete />
            </IconButton>
          </div>
        ))}
      </div>
    <div className="w-full flex justify-center mt-2"> 
    <Button onClick={OpenDrawer} ><IoIosAddCircleOutline size={20} /></Button>
    </div>
    <AddcomponentById id={open} close={()=>setOpen(false)} addSequenceAfterId={addSequenceAfterId} />
    </Card>
  );
};

export default SampleCertificate;
