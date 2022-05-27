import React ,{useState}from "react";

function SignIn() {
  const [initialValues, setinitialValues] = useState({
    username:"",
    password:""
  })

  function HandleChange(e){
console.log(e.target.value)
  }
  return (
    <div>
      <div className="desktop-signin-dialog shared-signin-dialog">
        <div class="dialog-decoration">
          <div class="signin-image-math"></div>
        </div>
        <div className="dialog-content">
          <form>
            <h2 className="form-header"></h2>
            <div className="label-forgot-info">
              <label class="si-field-label signin-field-label" >
                Username
              </label>
              <button type="button" class="forgot-info-button">
                Forgot username?
              </button>
            </div>
            <div class="si-input-container">
              <input
                onChange={HandleChange}

                id="username"
                class="si-text-field "
                type="text"
                required=""
                placeholder=""
                // value={initialValues.username}
              />
            </div>
            <div className="label-forgot-info">
              <label class="si-field-label signin-field-label" for="username">
                Password
              </label>
              <button type="button" class="forgot-info-button">
                Forgot password?
              </button>
            </div>
            <div class="si-input-container">
              <input
                onChange={HandleChange}
              
                class="si-text-field "
                type="password"
                required="" 
                placeholder=""
                // autocomplete="off"
                // value={initialValues.password}
              />
             
            </div>
            <div class="form-bottom">
              <span class="remember-me-container">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="checkbox"
                />
                <label class="si-field-label " for="remember-me">
                  Remember
                </label>
              </span>
              <button
                name="signin"
                class="info-cta-btn info-cta-green info-cta-40-16 submit-btn"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
