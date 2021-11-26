// import React, { useState } from "react";
// import {
//   Grid,
//   Paper,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   FormLabel,
//   FormControl,
//   Checkbox,
// } from "@mui/material";

// export default function Signup() {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirm: "",
//   });

//   const handleChange = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const [check, checked] = useState();

//   const handleCheck = (e) => {
//     checked(e.target.checked);
//   };

//   const paperStyle = {
//     padding: "30px 20px",
//     width: "470px",
//     margin: "20px auto",
//   };
//   const avatarStyle = { backgroundColor: "lightBlue" };
//   const headStyle = { margin: 10 };
//   const marginTop = { marginTop: "10px" };

//   console.log(`....render.... ${handleChange}`);

//   return (
//     <Grid>
//       <Paper elevation={10} style={paperStyle}>
//         <Grid align="center">
//           <Avatar style={avatarStyle}></Avatar>

//           <h2 style={headStyle}>Sign-up</h2>
//           <Typography variant="current">
//             Please fill this form to create your account.
//           </Typography>
//         </Grid>
//         <form>
//           <TextField
//             fullWidth
//             label="Name"
//             type="text"
//             placeholder="Enter your Name"
//             name="name"
//             value={values.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             type="email"
//             placeholder="Enter your Email"
//             name="email"
//             value={values.email}
//             onChange={handleChange}
//             required
//           />

//           <FormControl component="fieldset" style={marginTop}>
//             <FormLabel component="legend">Gender</FormLabel>
//             <RadioGroup
//               aria-label="gender"
//               label="gender"
//               style={{ display: "initial" }}
//             >
//               <FormControlLabel
//                 value="Female"
//                 control={<Radio />}
//                 label="Female"
//               />
//               <FormControlLabel value="male" control={<Radio />} label="Male" />
//             </RadioGroup>
//           </FormControl>

//           <TextField
//             fullWidth
//             label="Phone Number"
//             type="text"
//             placeholder="Enter your Phone Number"
//             name="phone"
//             value={values.phone}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             placeholder="Enter your Password"
//             name="password"
//             value={values.password}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Confirm Password"
//             type="password"
//             placeholder="Confirm Password"
//             name="confirm"
//             value={values.confirm}
//             onChange={handleChange}
//             required
//           />
//           <FormControlLabel
//             control={<Checkbox name="checkedA" onChange={handleCheck} />}
//             label="I accept the terms and conditions"
//             value={check}
//             required
//           />
//           <Button type="submit" variant="contained" color="primary">
//             Create an Account
//           </Button>
//         </form>
//       </Paper>
//     </Grid>
//   );
// }
