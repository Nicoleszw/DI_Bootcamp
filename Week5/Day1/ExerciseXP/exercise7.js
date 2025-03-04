(function (userName, userImage) {
    const userContainer = document.getElementById("user-container");

    const userProfile = document.createElement("div");
    userProfile.classList.add("user-profile");

    const userImg = document.createElement("img");
    userImg.src = userImage || "https://www.w3schools.com/howto/img_avatar.png"; 
    userImg.alt = `${userName}'s avatar`;

    const userNameSpan = document.createElement("span");
    userNameSpan.textContent = `Welcome, ${userName}`;

    userProfile.appendChild(userImg);
    userProfile.appendChild(userNameSpan);

    userContainer.appendChild(userProfile);

})( "John", "https://i.pravatar.cc/40" ); 
