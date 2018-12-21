export function logIn() {
    return`
            <h3 class='sign-status'>Log In</h3>
            <label for="">Email</label>
            <input type="email" placeholder="Your Email" class="u-full-width">
            <label for="">Password</label>
            <input type="password" placeholder="Password" class="u-full-width">
            <input type="submit" class='button-primary'> <br>
            <button class='sign-btn'>Sign Up</button>
        `
}

export function signUp() {
    return`
            <h3 class='sign-status'>Sign Up</h3>
            <label for="">Name</label>
            <input type="text" placeholder="Your Name" class="u-full-width">
            <label for="">Email</label>
            <input type="email" placeholder="Your Email" class="u-full-width">
            <label for="">Password</label>
            <input type="password" placeholder="Password" class="u-full-width">
            <input type="submit" class='button-primary'> <br>
            <button class='sign-btn'>Log In</button>
        `
}