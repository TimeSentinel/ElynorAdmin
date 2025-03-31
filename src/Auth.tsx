/* -------------------------------------------
(c)2025 Lance Stubblefield
elynoradmin: src/Auth.tsx
-------------------------------------------- */

import "./auth.css"

function Auth() {
    return (
        <div className="auth">
            <h1>Sign in</h1>
            <form action="/login/password" method="post">
                <section>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" autoComplete="username" required autoFocus/>
                </section>
                <section>
                    <label htmlFor="current-password">Password</label>
                    <input id="current-password" name="password" type="password" autoComplete="current-password"
                           required/>
                </section>
                <button type="submit">LOGIN</button>
            </form>

        </div>
    )
}

export default Auth;