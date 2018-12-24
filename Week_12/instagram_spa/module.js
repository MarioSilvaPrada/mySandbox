export function userSign() {
    return `
    <div class="signin">
        <div class = 'sign-msg'>
            <h3 class='sign-status'>Log In</h3>
            
            <label for="">Email</label>
            <input type="email" placeholder="Your Email" class="u-full-width input-email">
            <label for="">Password</label>
            <input type="password" placeholder="Password" class="u-full-width input-password">
            <div class = 'name-display'>
            <label for="">Nome</label>
            <input type="text" placeholder="Your Name" class="u-full-width input-name">
            <label for="">Id / Username</label>
            <input type="text" placeholder="Your ID" class="u-full-width input-id">
            </div>
            <input type="submit" class='button-primary'> <br>
            <button class='sign-btn'>Sign Up</button>
        </div>
    </div>
        `
}

export function userMsg(msg) {
    return `
    <div class="user">
        <div class ='msg-user'>
            <h5>${msg}</h5>
            <button class='button-primary ok-btn'>OK</button>
        </div>   
    </div>
        `
}

export function userProfile(user) {
    return `<div class="main-page">
    <div class="header">
      <span>Welcome ${user.name}</span>
      <div class="user-btns">
        <button class='profile-btn'>My Profile</button>
        <button class='logout-btn'>Log Out</button>
      </div>
    </div>
    <div class="search-field">
        <input type="email" class='email-search' placeholder="Find Email">
        <div class="btns-search">
        <button class='search-btn'>Search</button>
        <button class='follow-btn'>Follow this Person</button>
        </div>
    </div>
  
  

    <div class="publish-field">
        <h5>Publish</h5>
        <label for="">Photo URL</label>
        <input type="text">
        <label for="">Description</label>
        <textarea name="" id="" cols="30" rows="10"></textarea><br>
        <button class= 'button-primary'>Publish</button>
    </div>
  
    <div class="follow">
        <span>Name:${user.name}</span>
        <span>Followes: <strong>${user.followers}</strong></span>
        <span>Following:<strong>${user.following}</strong> </span>
    </div>
  
    </div>`
}
