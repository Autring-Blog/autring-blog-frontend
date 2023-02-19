import * as yup from "yup";

export const Form_custom = yup.object().shape({
  inphotoTitle: 
  yup.string().photoTitle("Please enter a valid Title").required("Required"),
  Main_Heading: 
  yup.string().shortDescription("Please enter a valid Heading").required("Required"),
  description: 
  yup.string().description("Please enter a valid Description").required("Required"),

});