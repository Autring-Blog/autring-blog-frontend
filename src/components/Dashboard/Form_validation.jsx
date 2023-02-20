import * as yup from "yup";

export const Form_validation = yup.object().shape({
  inphotoTitle: 
  yup.string().required("Please mention the title"),
  Main_heading: 
  yup.string().required("Please mention the main heading"),
  description: 
  yup.string().required("Please mention the description"),

});