import React from "react";

function App() {
  return (
    <>
      <div>
        <nav>
          <div class="container">
            <div class="nav-con">
              <div class="logo1">
                <a href="#"><img src="logo-bar" alt="Logo"/></a>
              </div>
            </div>
          </div>
        </nav>
        <div class="login-box">
          <div class="wrapper">
            <form action="">
              <h1>University Request System</h1>
              <h2>TU REQUEST SYSTEM (TU-REQ)</h2>
              <div class="input-box">
                <input type="text" placeholder="ID" required/>
                <i class='bx bxs-user'></i>
              </div>
              <div class="input-box">
                <input type="password" placeholder="Password" required/>
                <i class='bx bxs-lock-alt'></i>
              </div>
              <button type="submit" class="btn">LOGIN</button>
              <div class="cond">
                <h3>For first-time login</h3>
                <p>Use student ID, password is:</p>
                <p>TUREQ(last 4 digits of student ID)</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;