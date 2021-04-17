let headerTemplate ='<img src = "assests/images/logo.png" id="logo" alt = "logo"/>'+
                        '<button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false" data-target="#login-modal">LOGIN</button>'+

                        '<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label" aria-hidden="true">'+
                            '<div class="modal-dialog" role="document">'+
                                '<div class="modal-content">'+
                                    '<div class="modal-header">'+
                                        '<h5 class="modal-title" id="login-modal-label">Please Login</h5>'+
                                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                                            '<span aria-hidden="true">&times;</span>'+
                                        '</button>'+
                                    '</div>'+
                                    '<div class="modal-body">'+
                                        '<form id="login-form">'+
                                            '<div class="login-field">'+
                                                '<label for="username">Username: </label>'+
                                                '<input type="text" id="username" name="username" placeholder="Enter Username" required />'+
                                            '</div>'+
                                            '<div class="login-field">'+
                                                '<label for="password">Password: </label>'+
                                                '<input type="password" id="password" name="password" placeholder="Enter Password" autocomplete="off" required />'+
                                            '</div>'+
                                        '</form>'+
                                    '</div>'+
                                    '<div class="modal-footer">'+
                                        '<button id="login-button" type="button" class="btn btn-primary" data-dismiss="modal" onclick = "alertText()">Login</button>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>';

let footerTemplate = '<div id="contact-us">'+

                        '<button type="button" id="contact" class="btn btn-info btn-sm" data-toggle="modal" data-target="#contactusModal" data-backdrop="false">'+
                            'Contact Us'+
                        '</button>'+


                        '<div class="modal fade" id="contactusModal" tabindex="-1" role="dialog" aria-labelledby="contactusModalLabel" aria-hidden="true">'+
                            '<div class="modal-dialog" role="document">'+
                            '<div class="modal-content">'+
                                '<div class="modal-header">'+
                                '<h5 class="modal-title" id="contactusModalLabel">Get in touch</h5>'+
                                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                                    '<span aria-hidden="true">&times;</span>'+
                                '</button>'+
                                '</div>'+
                                '<div class="modal-body">'+

                                    '<form>'+
                                        '<p>'+
                                            'Thank you for reaching out!!! <br>'+
                                            'Please enter you email and we will get back to you.'+
                                        '</p>'+
                                        '<label for="email">Email: </label>'+
                                        '<input type="text" id="email" name="email" placeholder="Enter your email id" required>'+
                                    '</form>'+

                                '</div>'+
                                '<div class="modal-footer">'+
                                '<button type="button" class="btn btn-primary">Submit</button>'+
                                '</div>'+
                            '</div>'+
                            '</div>'+
                        '</div>'+

                    '</div>'+
                    '<div id="copyright">&copy 2020 ROOM SEARCH PVT. LTD.</div>'+
                    '<div id = "smicons">'+
                    '<a href ="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" class="socialMedia" id="facebook"></a>'+
                    '<a href ="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png" class="socialMedia" id="instagram"></a>'+
                    '<a href ="https://twitter.com" target="_blank"><img src="assests/images/twitter.png" class="socialMedia" id="twitter"></a>'+
                    '</div>';



document.getElementById('header-id').innerHTML = headerTemplate;
document.getElementById('footer-id').innerHTML = footerTemplate;

let alertText = () => {
    var a = document.getElementById("username").value;
    localStorage.setItem("usernameKey", a);
    var b = document.getElementById("password").value;
    localStorage.setItem("passwordKey", b);
    if((a === "admin") && (b === "admin")){
        alert("Successfully Loggedin");
        document.getElementById("login").innerHTML = "LOGOUT";
    }else{
        alert("Wrong credentials");
    }
}
