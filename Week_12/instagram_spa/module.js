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
      <span>${user.name}'s Profile</span>
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
        <input type="text" class='url-photo'>
        <label for="">Description</label>
        <textarea name="" id="" cols="30" rows="10" class ='user-description'></textarea><br>
        <button class= 'button-primary publish-btn'>Publish</button>
    </div>
  
    <div class="follow">
        <span>Name:${user.name}</span>
        <span>Followers: <strong>${user.followers.length}</strong></span>
        <span>Following:<strong>${user.following.length}</strong> </span>
    </div>

    <div class ='user-images'>
        
    ${user.urlImages.map(img => {
        return `
        <div class='box'>
        <div class='img' style='background:url(${img[0]})no-repeat;width:300px;height:300px;background-size:cover'></div>
        <p class='photo-description'>${img[1]}</p>
        </div>
        
        `
    }).join('')}

        
    </div>
  
    </div>`
}
