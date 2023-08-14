import Image from "next/image";
import React from "react";
import s from "./style.module.scss";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";

interface Values {
  email?: string;
  password?: string;
}

const SignInView = () => {
  // const signInSchema = Yup.object().shape({
  //   email: Yup.string().required("Please enter a valid email or phone number."),
  //   password: Yup.string().required(
  //     "Your password must contain between 4 and 60 characters."
  //   ),
  // });

  const linksList = [
    {
      id: 1,
      title: "FAQ",
      href: "/",
    },
    {
      id: 2,
      title: "Jobs",
      href: "/",
    },
    {
      id: 3,
      title: "Buy gift cards",
      href: "/",
    },
    {
      id: 4,
      title: "Privacy",
      href: "/",
    },
    {
      id: 5,
      title: "Contact us",
      href: "/",
    },
    {
      id: 6,
      title: "Legal notice",
      href: "/",
    },
  ];
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Image
          src="/Images/Netflix_Logo.png"
          width={200}
          height={80}
          alt="Netflix logo"
        />
      </div>
      <div className={s.bgText}>
        <h1 className={s.title}>Sign In</h1>
        <Formik
          initialValues={{}}
          onSubmit={() => {
            console.log("success");
          }}
          // validationSchema={signInSchema}
        >
          <Form>
            <Field name="email">
              {({ field }: any) => (
                <input
                  type="email"
                  {...field}
                  placeholder="Email address"
                  className={s.input}
                />
              )}
            </Field>
            <Field name="passsword">
              {({ field }: any) => (
                <input
                  type="passsword"
                  {...field}
                  placeholder="password"
                  className={s.input}
                />
              )}
            </Field>
            <button className={s.btn} type="submit">
              Sign In
            </button>
          </Form>
        </Formik>
        <div className={s.subTitle}>
          <div className={s.checkBoxContainer}>
            <input
              type="checkbox"
              id="Remember me"
              name="Remember me"
              className={s.checkBox}
            />
            <label className={s.label}>Remember me</label>
          </div>
          <a href="/" className={s.help}>
            Need Help?
          </a>
        </div>
        <div className={s.textBottom}>
          <span className={s.linkTitle}>New to Netflix? </span>
          <a href="/" className={s.signUpLink}>
            Sign up now.
          </a>

          <div className={s.description}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="/" className={s.learnLink}>
              Learn more.
            </a>
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <a href="/" className={s.topLink}>
          Questions? Contact us.
        </a>
        {linksList?.map((item) => (
          <a href={item?.href} className={s.link}>
            {item?.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SignInView;
