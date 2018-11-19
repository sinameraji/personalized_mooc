var provider = new firebase.auth.GithubAuthProvider();
function login(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(user)
  }).catch(function(error) {
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}
document.getElementById("login").onclick = login;
