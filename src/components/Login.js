  
import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';










const Login = ({ handleChange }) => {

  const history = useHistory();

  const paperStyle = { padding: 20, height: '73vh', width: 380, margin: "0 auto" }
  const avatarStyle = { backgroundColor: '#00FFFF' }
  const btnstyle = { margin: '8px 0' }
  const initialValues = {
      username: '',
      password: '',
      remember: false
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));



  const classes = useStyles();
  const [userlist, setProduct] = useState([]);
  

  const getProductData = async () => {
    try {
      const data = await axios.get(
        "http://localhost:4001/results"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);




  const validationSchema = Yup.object().shape({
      username: Yup.string().email('please enter valid email').required("Required"),
      password: Yup.string().required("Required")
  })


  const onSubmit = (values, props) => {
      
    


      if (userlist.length > 0 && userlist.find(user => user.username === values.username && user.password === values.password)) 
      {  

      history.push('/userresult');
      alert("login success");

     }

  else {
    // console.log("User doesn't exists. Show error message");
    alert("login failed");
   }

  

  console.log('text')

}



  return (
      <Grid>
          <Paper style={paperStyle}>
              <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                  <h2>LOGIN</h2>
              </Grid>
              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                  {(props) => (
                      <Form>
                          <Field as={TextField} label='Username' name="username"
                              placeholder='Enter username' fullWidth required
                              helperText={<ErrorMessage name="username" />}
                          />
                          <Field as={TextField} label='Password' name="password"
                              placeholder='Enter password' type='password' fullWidth required
                              helperText={<ErrorMessage name="password" />} />
                          <Field as={FormControlLabel}
                              name='remember'
                              control={
                                  <Checkbox
                                      color="secondary"
                                  />
                              }
                              label="Remember me"
                          />
                          <Button type='submit' color='secondary' variant="contained">
                              Login
                             </Button>

                      </Form>
                  )}
              </Formik>
              <Typography >
                  <Link href="#" >
                      Forgot password ?
              </Link>
              </Typography>
              <Typography >                    
                   <Link href="#" onClick={() => handleChange("event", 1)} >
                      Register
              </Link>
              </Typography>
          </Paper>
      </Grid>
  )
}


export default  Login;


















