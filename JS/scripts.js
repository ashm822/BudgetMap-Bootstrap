$(function() {

    $(document).ready(function() {  
        console.log("javaRunn")    
       // $('#sideNav').sideNav('show');
       // $('#sideNav').sideNav('hide');

        function openNav() {
            console.log("openNav")
            document.getElementById("mySidenav").style.width = "100%";
          }
          
          /* Close/hide the sidenav */
          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
          }


          
    });

  // login modal toggle 
        $("#loginBtn").click(function() {
            $("#loginModal").modal("show");

        });


    });