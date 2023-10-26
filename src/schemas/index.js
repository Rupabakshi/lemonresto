import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("Please  Enter your Name"),
    resdate: Yup.string().required("Please select Date"),
    restime: Yup.string().required("Please choose suitable Time"),
    occasion: Yup.string().required("Please enter booking occasion"),
    guests: Yup.string().min(1).max(10).required("Number of guests should be 1-10 only")
    .required()
    });
