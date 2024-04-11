export default defineNuxtRouteMiddleware((to,from)=>{
    // console.log(to);
    // console.log(from); 
    const isLoggedIn = false;

    console.log(to);
    if(isLoggedIn){
        return navigateTo(to.fullPath); 
        //redirect to the page we want to go
    }
    //redirect to a login page
    return navigateTo("/Login");
    
})