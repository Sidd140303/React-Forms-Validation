import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, TextField, MenuItem, IconButton, InputAdornment } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const App = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submitted successfully:", formValues);
      setFormValues(initialValues);
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^\+\d{1,3}\s\d{10}$/; 
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; 
    const aadharRegex = /^\d{12}$/; 

    if (!values.firstName) {
      errors.firstName = "*First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "*Last name is required!";
    }
    if (!values.username) {
      errors.username = "*Username is required!";
    }
    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "*Invalid email format!";
    }
    if (!values.password) {
      errors.password = "*Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "*Min 4 characters required!";
    }
    if (!values.phoneNo) {
      errors.phoneNo = "*Phone number is required!";
    } else if (!phoneRegex.test(values.phoneNo)) {
      errors.phoneNo = "*Invalid phone number format! Use +CC xxxxxxxxxx";
    }
    if (!values.country) {
      errors.country = "*Country is required!";
    }
    if (!values.city) {
      errors.city = "*City is required!";
    }
    if (!values.panNo) {
      errors.panNo = "*PAN number is required!";
    } else if (!panRegex.test(values.panNo)) {
      errors.panNo = "*Invalid PAN number!";
    }
    if (!values.aadharNo) {
      errors.aadharNo = "*Aadhar number is required!";
    } else if (!aadharRegex.test(values.aadharNo)) {
      errors.aadharNo = "*Invalid Aadhar number!";
    }
    return errors;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1b5e20",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="main">
        <div className="result">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="messagesuccess">Signed In Successfully</div>
          ) : (
            <h1></h1>
          )}
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="divider"></div>
            <div className="form">
              <h1 className="heading">Register</h1>

              <div style={{ display: "flex", gap: "20px" }}>
                <div className="field" style={{ flex: 1 }}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    value={formValues.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="field" style={{ flex: 1 }}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    value={formValues.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p className="alert">{formErrors.firstName}</p>
              <p className="alert"></p>

              <div className="field">
                <TextField
                  label="Username"
                  name="username"
                  fullWidth
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
              <p className="alert">{formErrors.username}</p>

              <div className="field">
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p className="alert">{formErrors.email}</p>

              <div className="field">
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  fullWidth
                  value={formValues.password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <p className="alert">{formErrors.password}</p>

              <div className="field">
                <TextField
                  label="Phone Number"
                  name="phoneNo"
                  placeholder="+CC xxxxxxxxxx"
                  fullWidth
                  value={formValues.phoneNo}
                  onChange={handleChange}
                />
              </div>
              <p className="alert">{formErrors.phoneNo}</p>

              <div className="field">
                <TextField
                  select
                  label="Country"
                  name="country"
                  fullWidth
                  value={formValues.country}
                  onChange={handleChange}
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  {/* Add more countries as needed */}
                </TextField>
              </div>
              <p className="alert">{formErrors.country}</p>

              <div className="field">
                <TextField
                  select
                  label="City"
                  name="city"
                  fullWidth
                  value={formValues.city}
                  onChange={handleChange}
                >
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                  <MenuItem value="New York">New York</MenuItem>
                  <MenuItem value="Toronto">Toronto</MenuItem>
                  {/* Add more cities as needed */}
                </TextField>
              </div>
              <p className="alert">{formErrors.city}</p>

              <div className="field">
                <TextField
                  label="PAN Number"
                  name="panNo"
                  fullWidth
                  value={formValues.panNo}
                  onChange={handleChange}
                />
              </div>
              <p className="alert">{formErrors.panNo}</p>

              <div className="field">
                <TextField
                  label="Aadhar Number"
                  name="aadharNo"
                  fullWidth
                  value={formValues.aadharNo}
                  onChange={handleChange}
                />
              </div>
              <p className="alert">{formErrors.aadharNo}</p>

              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
