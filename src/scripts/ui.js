"use strict"
 class Ui{
     constructor(){
         this.profile = document.getElementById('profile')
     }
     showProfile(user){

         this.profile.innerHTML=`
        <div class="card mt-2 animated bounceInLeft">
        <img src="${ user.avatar_url }" alt="" class="card-imp-top img-responsive" >
        <div class="card-body">
        <h3 class="card-title">${user.name}/ ${user.login}</h3>
        <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">VIEW profile</a>
        <span class="badge badge-success">Followers: ${user.followers}</span>    
        <span class="badge badge-primary">Followings: ${user.following}</span>    

</div>
</div>
        `
         this.clearmessge()
     }
     showMessage(message,classNam){
         const div = document.createElement('div')
         div.className = classNam
         div.appendChild(document.createTextNode(message))
         const profile = document.getElementById('profile')

         const content = document.querySelector('.row')
         content.insertBefore(div,profile)
     }
     clearmessge(){
         let msg = document.querySelector('.alert')
         if(msg){
             msg.remove()
         }
     }
}
export default Ui