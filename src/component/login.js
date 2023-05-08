import React from 'react';

function LoginForm() {
  return (
    <section className="vh-100" style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 1rem', margin: '1px', height: '498px' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                       
                        <span className="h1 fw-bold mb-0">Login</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example17">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  
                 
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
export default LoginForm;