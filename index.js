
function createLoginTracker() {

  const userInfo = {
    username: "user1",
    password: "password123"
  }
  let attemptCount = 0;

const handleLogin = (passwordAttempt) => {

  if(attemptCount <= 1){
  if(passwordAttempt == userInfo.password){
    return("Login Successful");
  }else{
    return("Login Failed");
    attemptCount = attemptCount + 1;
    handleLogin(prompt("Password:"));
  }
}else {
  return("Account locked due to too many failed login attempts")
}




}

handleLogin(prompt("Password:"));

}

createLoginTracker();


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};