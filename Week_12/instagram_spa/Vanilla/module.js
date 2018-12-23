export function userSign() {
    return `
    <div class="signin">
        <div class = 'sign-msg'>
            <h3 class='sign-status'>Log In</h3>
            <label for="">Email</label>
            <input type="email" placeholder="Your Email" class="u-full-width input-email">
            <label for="">Password</label>
            <input type="password" placeholder="Password" class="u-full-width input-password">
            <input type="submit" class='button-primary'> <br>
            <button class='sign-btn'>Sign Up</button>
        </div>
    </div>
        `
}

export function userExist() {
    return `
    <div class="user">
        <div class ='msg-user'>
            <h5>Sorry, that email is already taken</h5>
            <button class='button-primary ok-btn'>OK</button>
        </div>   
    </div>
        `
}

export function userCreated() {
    return `
    <div class="user">
        <div class ='msg-user'>
            <h5>Thank you for your registration, welcome!</h5>
            <button class='button-primary ok-btn'>OK</button>
        </div>   
    </div>
        `
}