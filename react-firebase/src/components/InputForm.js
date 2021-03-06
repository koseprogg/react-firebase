import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const defaultValues = {
    title: "",
    description: "",
    imageSrc: "",
};

const InputForm = (props) => {
      
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="title-input"
            name="title"
            label="Title"
            type="text"
            value={formValues.title}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="description-input"
            name="description"
            label="Description"
            type="text"
            value={formValues.description}
            onChange={handleInputChange}
          />
        </Grid>
        
        <Grid item>
        <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        name="imageSrc"
        value={formValues.imageSrc}
      />
      <label htmlFor="contained-button-file">
        <Button style={{marginTop:"15px"}} variant="contained" color="primary" component="span">
          Upload picture
        </Button>
      </label>
        </Grid>
   
        <Button style={{marginTop: "15px"}} variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default InputForm;