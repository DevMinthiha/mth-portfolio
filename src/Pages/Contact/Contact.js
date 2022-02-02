import React from 'react'
import {RiMailSendFill} from 'react-icons/ri'
import {FaFacebookF} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {SiMinutemailer} from 'react-icons/si'
import {BsFillPhoneFill} from 'react-icons/bs'
import * as yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
import emailjs from "emailjs-com";

const Contact = () => {

    const formSchema = yup.object().shape({
        full_name: yup.string().required("Name is required"),
        email: yup
            .string()
            .email("Please fill valid email")
            .required("Email is required"),
        phone: yup
            .number()
            .required("Please fill your phone number")
            .min(5, "Phone number should be at least 5 number"),
        suggestion: yup.string().required("Suggestion is required"),
    });

    const messageForm = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            phone: "",
            suggestion: "",
        },
        validationSchema: formSchema,
        onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
            const response = await emailjs.send(
                "service_1ovtrzs",
                "template_ax5q9ti",
                values,
                "user_T1mEM3StbjMCT4Q1rXIje"
            );
            setSubmitting(false);
            resetForm();
        },
    });

    const { errors, isSubmitting, handleSubmit, getFieldProps } = messageForm;

    return (
        <div className='w-full flex justify-center py-20' id='contact'>
            <div className="w-full md:w-4/5 flex flex-col items-center">
                <h1 className='text-center text-2xl font-bold tracking-widest mb-8'>ContactMe</h1>
                <div className="w-full bg-black text-white py-20 flex flex-col xl:flex-row md:rounded-3xl shadow-lg">
                    <div className="left flex-1 flex flex-col items-center">
                        <h3 className='text-xl mb-10 font-bold tracking-widest'>Send Message <RiMailSendFill className='inline text-2xl'/></h3>
                        <FormikProvider value={messageForm}>
                        <Form autoComplete="off" onSubmit={handleSubmit} className='w-4/5'>
                            <div className="form-group mb-5">
                                <label htmlFor="name">Full Name</label> <br />
                                <input
                                    type="text"
                                    className="w-full outline-none bg-transparent p-2 border-white border-b-2"
                                    placeholder="Enter your full name"
                                    {...getFieldProps("full_name")}
                                />
                                <p className={`text-red-500 ${errors? "opacity-100" : "opacity-0"}`}>{errors.full_name}</p>
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="email">Email Address</label> <br />
                                <input
                                    type="email"
                                    className="w-full outline-none bg-transparent p-2 border-white border-b-2"
                                    placeholder="Enter your email address"
                                    {...getFieldProps("email")}
                                />
                                <p className={`text-red-500 ${errors? "opacity-100" : "opacity-0"}`}>{errors.email}</p>
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="phone">Phone Number</label> <br />
                                <input
                                    type="text"
                                    className="w-full outline-none bg-transparent p-2 border-white border-b-2"
                                    placeholder="Enter your phone number"
                                    {...getFieldProps("phone")}
                                />
                                <p className={`text-red-500 ${errors? "opacity-100" : "opacity-0"}`}>{errors.phone}</p>
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="message">Message</label> <br />
                                <textarea
                                    className="w-full outline-none bg-transparent p-2 border-white border-b-2"
                                    name=""
                                    id=""
                                    cols="20"
                                    placeholder="Send message to us"
                                    {...getFieldProps("suggestion")}
                                ></textarea>
                                <p className={`text-red-500 ${errors? "opacity-100" : "opacity-0"}`}>{errors.suggestion}</p>
                            </div>
                            <button type='submit' className='bg-white text-black px-7 py-1 rounded-full font-bold shadow-lg'>Send</button>
                        
                        
                        
                        </Form>
                        </FormikProvider>
                    </div>

                    <div className="right flex-1 flex flex-col items-center mt-20 xl:mt-0">
                        <h3 className='text-xl mb-10 font-bold tracking-widest'>Contact information</h3>
                        <div className="">
                            <div className="flex flex-col sm:flex-row items-center gap-5 mb-10">
                                <div className="icon-btn">
                                <FaFacebookF className='text-lg' />
                                </div>
                                <p className='font-semibold'>Dev Mth</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-5 mb-10">
                                <div className="icon-btn">
                                <FiGithub className='text-lg' />
                                </div>
                                <p className='font-semibold'>https://github.com/DevMinthiha</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-5 mb-10">
                                <div className="icon-btn">
                                <SiMinutemailer className='text-lg' />
                                </div>
                                <p className='font-semibold'>minthiha.flar@gmail.com</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-5 mb-10">
                                <div className="icon-btn">
                                <BsFillPhoneFill className='text-lg' />
                                </div>
                                <p className='font-semibold'>09 253432774 / 09 971402383</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
