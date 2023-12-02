import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>

      <form action="POST">
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <input type="submit" onClick={submit} />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/signup">Signup Page</Link>
    </div>
  );
}

export default Login;
