 import { useFormik  } from "formik";  
 import * as Yup from "yup";
 import {LoginFormContainer, InputsContainer, Title } from "./stylesContactUs";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {LOGIN_FORM_VALUES } from "./types.ts"


const validationSchema = Yup.object().shape({
  [LOGIN_FORM_VALUES.FULL_NAME]: Yup.string()
    .required("Full name field is required")
     .min(3, "min of 3 characters")
    .max(50, "max of 50 characters"),

  [LOGIN_FORM_VALUES.PHONE_NUMBER]: Yup.string()
    .required("Phone field is required")
    .min(4, "min of 4 characters")
    .max(20, "max of 20 characters"),

  [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
    .min(6, "Email should contain min 6 characters")
    .max(60, "max of 60 characters")
     });


function ContactUs(){

    const formik = useFormik( {   
     initialValues: {
      [LOGIN_FORM_VALUES.FULL_NAME]: "",
      [LOGIN_FORM_VALUES.PHONE_NUMBER]: "",
      [LOGIN_FORM_VALUES.EMAIL]: "",
    },
                               
    validationSchema: validationSchema,
    validateOnChange: false,
 onSubmit: (values, helpers)=>{console.log("Formik submit event works!");  
   console.log(values);
      console.log(helpers);

      alert("The verification is completed. Your message has been received! Thank you for contacting us! ");

      helpers.resetForm();
    },
  });
        
   return(
        <LoginFormContainer onSubmit={formik.handleSubmit}>   
  <Title>Contact Us</Title>
   <InputsContainer>
        <Input
          id="fullName"
          name={LOGIN_FORM_VALUES.FULL_NAME}
          placeholder="Your full name"
          label="Full name"
           value={formik.values[LOGIN_FORM_VALUES.FULL_NAME]}
           onChange={formik.handleChange}      
           error={formik.errors[LOGIN_FORM_VALUES.FULL_NAME]}                          
          />
        <Input
          id="phone"
          name= {LOGIN_FORM_VALUES.PHONE_NUMBER}
          placeholder="Your phone number"
          label="phone"
          value={formik.values[LOGIN_FORM_VALUES.PHONE_NUMBER]}
          onChange={formik.handleChange }
          error={formik.errors[LOGIN_FORM_VALUES.PHONE_NUMBER]} 
        />
            <Input
          id="email"
          name= {LOGIN_FORM_VALUES.EMAIL}
          placeholder="Your email"
          label="email"
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange }
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]} 
        />
      </InputsContainer>
      <Button name="Send" type="submit" />
</LoginFormContainer>
    );
}
export default ContactUs;