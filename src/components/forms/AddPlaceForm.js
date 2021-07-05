import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Formik, Form } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let addPlaceSchema = yup.object().shape({
  name: yup.string().required("This field is required."),
  place: yup.string().required("This field is required."),
  continent: yup.string().required("This field is required."),
  altitude_depth: yup.number().required("This field is required."),
  imgLink: yup.string(),
  comment: yup.string(),
});

export default function AddPlaceForm({ onSubmitHandler }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Formik
          initialValues={{
            name: "TestValue",
            place: "TestValue",
            continent: "TestValue",
            altitude_depth: 2000,
            comment: "TestValue",
            imgLink: "",
          }}
          validationSchema={addPlaceSchema}
          onSubmit={(values) => {
            if (values.imgLink === "") {
              values.imgLink =
                "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80";
            }
            let searchString =
              values.name.toLowerCase() +
              values.place.toLowerCase() +
              values.continent.toLowerCase() +
              values.altitude_depth.toLowerCase() +
              values.comment.toLowerCase();

            onSubmitHandler({ ...values, searchString });
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={errors.name && touched.name}
                    name="name"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="name"
                    label="Name"
                    autoFocus
                    helperText={
                      errors.name && touched.name ? errors.name : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.place && touched.place}
                    name="place"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="place"
                    label="Place"
                    autoFocus
                    helperText={
                      errors.place && touched.place ? errors.place : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.continent && touched.continent}
                    name="continent"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="continent"
                    label="Continent"
                    autoFocus
                    helperText={
                      errors.continent && touched.continent
                        ? errors.continent
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.altitude_depth && touched.altitude_depth}
                    name="altitude_depth"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="altitude_depth"
                    label="Altitude / Depth"
                    autoFocus
                    helperText={
                      errors.altitude_depth && touched.altitude_depth
                        ? errors.altitude_depth
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.comment && touched.comment}
                    name="comment"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="comment"
                    label="Comment"
                    autoFocus
                    helperText={
                      errors.comment && touched.comment ? errors.comment : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.imgLink && touched.imgLink}
                    name="imgLink"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="imgLink"
                    label="Add an Image Link"
                    autoFocus
                    helperText={
                      errors.imgLink && touched.imgLink ? errors.imgLink : null
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Push to Pool
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}
