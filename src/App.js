import "./App.css";
import { useState } from "react";

function App() {
  const [formValue, setFormValue] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    agreement: false,
  });

  const handleSubmitForm = (value) => {
    value.preventDefault();
    console.log(formValue);
  };

  return (
    <div className="App">
      <div className="formContainer">
        <form onSubmit={handleSubmitForm}>
          <h2>Create account</h2>
          <p>
            Already have an account? <span className="link">Sign in</span>
          </p>
          <input
            type="text"
            className="username"
            placeholder="Username"
            onChange={(e) =>
              setFormValue({ ...formValue, username: e.target.value })
            }
          />
          <div className="inlinePart">
            <input
              type="text"
              className="firstname"
              placeholder="Firstname"
              onChange={(e) =>
                setFormValue({ ...formValue, firstname: e.target.value })
              }
            />
            <input
              type="text"
              className="lastname"
              placeholder="Lastname"
              onChange={(e) =>
                setFormValue({ ...formValue, lastname: e.target.value })
              }
            />
          </div>
          <input
            type="email"
            className="email"
            placeholder="Email"
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
          />
          <button>
            Sign up<span>→</span>
          </button>
          <div>
            <input
              type="checkbox"
              name="agreement"
              id="agreement"
              onChange={(e) =>
                setFormValue({ ...formValue, agreement: e.target.checked })
              }
            />
            <label htmlFor="agreement">
              I have read and agree to the{" "}
              <span className="link">Terms of Service</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
