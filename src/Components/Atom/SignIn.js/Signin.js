import React ,{useState}from "react";
import { Formik, Field, Form } from 'formik';
import styles from "./signin.module.css"
import * as Yup from 'yup';
function SignIn() {
  const [initialValues, setinitialValues] = useState({
    email:"",
    password:""
  })
  const SignInSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password:Yup.string().required('Required'),
  })
  function HandleChange(e){
console.log(e.target.value,e.target.name)


  }
  function handleSubmit(values){
    
    console.log(values)
  }
  return (
    <div>
       <Formik
    initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignInSchema}
    >
         {({ errors, touched }) => (
        <Form>
      <div className={`${styles.desktop_signin_dialog} ${styles.shared_signin_dialog}`}>
        <div class={`${styles.dialog_decoration}`}>
          <div class={`${styles.signin_image_math}`}></div>
        </div>
        <div className={`${styles.dialog_content}`}>
        
            <h2 className={`${styles.form_header}`}>Sign in </h2>
            <div className={`${styles.label_forgot_info}`}>
              <label className={`${styles.si_field_label} ${styles.signin_field_label} `}>
                email
              </label>
              <button type="button" className={`${styles.forgot_info_button}`}>
                Forgot email?
              </button>
            </div>
            <div class="si-Field-container">
              <Field
                // onChange={HandleChange}
                name="email"
                id="email"
                className={`${styles.si_text_field }`}
                type="text"
                required=""
                placeholder=""
                // value={initialValues.email}
              />
               {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
            </div>
            <div className={`${styles.label_forgot_info} mt-2`}>
              <label className={`${styles.si_field_label} ${styles.signin_field_label} `} for="email">
                Password
              </label>
              <button type="button" className={`${styles.forgot_info_button}`}>
                Forgot password?
              </button>
            </div>
            <div class="si-Field-container">
              <Field
                // onChange={HandleChange}
                name="password"
                className={`${styles.si_text_field }`}
                type="password"
                required="" 
                placeholder=""
                // autocomplete="off"
                // value={initialValues.password}
              />
               {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}
             
            </div>
            <div class={`${styles.form_bottom}`}>
              <span className={`${styles.remember_me_container}`}>
                <Field
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="checkbox"
                />
                <label class={`${styles.si_field_label} mx-2`} for="remember-me">
                  Remember
                </label>
              </span>
              <button
                name="signin"
                class={`info-cta-btn ${styles.info_cta_green} info-cta-40-16 ${styles.submit_btn}`}
                type="submit"
              >
                Sign in
              </button>
            </div>
         
        </div>
      </div>
      </Form>
       )}
      </Formik>
    
    
    
    </div>
  );
}

export default SignIn;
