//View Info:
// This page has 3 different views
//      - Desktop: more then set_limit width which is what most people will
//                  see on a laptop
//      - Browser to small: which is when the user shrinks the browser width 
//                  to small so lower or equal to the set limit. This means
//                  the browser is to small to have the desktop view look
//                  viewable
//      - Mobile: This view is for mobile on devices(phones,tablets, etc.)


//These variables are used to get the browser width and height
var browser_width = window.innerWidth;
var browser_height = window.innerHeight;

//These variables are used to get thescreen width and height
var screen_width = screen.width;
var screen_height = screen.height;

// This variable is the set limit used to know when the browser width is to
// small for desktop view so the minimum width for desktop view in a sense 
// since anthting above set_limit is desktop view
var set_limit = 1020;

//Variable hold wether themenu is open
// if true then menu open 
// if menu is false then menu closed
var is_menu_open = false; 

//View: mobile, browser to small
//Summary: This function opens dropdown menu of tabs in header
function show_menu()
{
    'use strict';
    document.getElementById("menuImage").style.display = "none";
    document.getElementById("menu_show_container").style.display = "block";
    document.getElementById("close_image").style.display = "block";
    is_menu_open = true;
}
//View: mobile, browser to small
//Summary: This function opens dropdown menu of tabs in header


//View: mobile, browser to small
//Summary: This function closes dropdown menu of tabs in header
function close_menu()
{
    'use strict';
     document.getElementById("menu_show_container").style.display = "none";
    document.getElementById("close_image").style.display = "none";
    document.getElementById("menuImage").style.display = "block";
    is_menu_open = false;
                            
   
}

//View: mobile, browser to small
//Summary: This function opens dropdown menu of tabs in header
function go_to_services()
{
    'use strict';
    window.location.href = "services.html";
}

//View: Browser too small
//Summary: This functio checks to see if browser was adjusted to a size that is to small for
//          the desktop view and this is not on a small device since the screen width
//          is still bigger then the set limit
//          Returns true if it is to small and false if it is not
function is_browser_to_small()
{
    'use strict';
    if(!(screen_width <= set_limit) && (browser_width <= set_limit))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function checkScreen()
{
    'use strict';
                        //  View: Browser to small
                        //  Summary: Basically for when user adjust browser to too small view   
                        //  Description: Here we changed the code to only allow 
                        //  changes if the browser size
                        //  is below/equal the set limit variable 
                        //  and the screen size is above the set limit variable
                        if(is_browser_to_small())
                        {

                            
                            //Remove desktop tabs
                            //side note: in css i just did this with the class for 
                            // mobile view
                            document.getElementById("list_one").style.display = "none";
                            document.getElementById("list_two").style.display = "none";
                            document.getElementById("list_three").style.display = "none";
                            document.getElementById("list_four").style.display = "none";

                            //checks to see if menu open is open if it is dnt
                            //show menu icon
                            if(is_menu_open)
                            {
                                //do not show menu image icon
                            }
                            else
                            {
                                 //Show mobile menu button
                                document.getElementById("menuImage").style.display = "block";
                            }
                            
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "60px";
                            //resize image
                            document.getElementById("logoImage").style.height = "50px";
                            //bar height
                            document.getElementById("bar").style.height = "75px";

                            //document.getElementById("big_image_container").style.display = "none";
                            //document.getElementById("mobile_big_image_container").style.display = "block";
                            //document.getElementById("left_side_container").style.width = "100%";
                            //document.getElementById("right_side_container").style.width = "100%";
                            //document.getElementById("title_one_im").style.fontSize = "50px";
                            
                            //document.getElementById("desktop_title_logo_services").style.backgroundImage = "url(images/home/concrete_block_white_long_four.jpg)";
                            document.getElementById("desktop_title_logo_services").style.display = "none";
                            document.getElementById("mobile_desktop_title_logo_services").style.display = "block";
                            //document.getElementById("wwd_container").style.marginTop = "0px";

                            //document.getElementById("slide_out_title_container").style.width = "100%";
                            document.getElementById("left_side_second_level").style.width = "100%";
                            document.getElementById("right_side_second_level").style.width = "100%";
                            //document.getElementById("third_level_container").style.display = "none";
                            //document.getElementById("small_browser_what_we_do_container").style.display = "inline-block";
                            //document.getElementById("second_level_container").style.display = "none";
                            //document.getElementById("mobile_location_with_stamps_container").style.display = "block";
                          
                            
                        }
                        //  View: Desktop
                        //  This code is ran in regular desktop/browser view so that means
                        //  that both the browser and screen width are greater then set_limit
                        if((screen_width > set_limit) && (browser_width > set_limit))
                        {
                            //Closes menu if menu is open when adjusting browser
                            close_menu();
                            //Removes menu button 
                            document.getElementById("menuImage").style.display = "none";
                            //Brings back tabs
                            document.getElementById("list_one").style.display = "inline";
                            document.getElementById("list_two").style.display = "inline";
                            document.getElementById("list_three").style.display = "inline";
                            document.getElementById("list_four").style.display = "inline";
                            
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "40px";
                            //resize image
                            document.getElementById("logoImage").style.height = "80px";
                            //bar height
                            document.getElementById("bar").style.height = "70px";

                            //document.getElementById("big_image_container").style.display = "block";
                            //document.getElementById("mobile_big_image_container").style.display = "none";
                            //document.getElementById("left_side_container").style.width = "40%";
                            //document.getElementById("right_side_container").style.width = "40%";
                            //document.getElementById("title_one_im").style.fontSize = "80px";
                           // document.getElementById("desktop_title_logo_services").style.backgroundImage = "url(images/home/concrete_block_white.jpg)";
                            document.getElementById("desktop_title_logo_services").style.display = "block";
                            document.getElementById("mobile_desktop_title_logo_services").style.display = "none";
                            document.getElementById("wwd_container").style.marginTop = "0px";

                            //document.getElementById("slide_out_title_container").style.width = "100%";
                            document.getElementById("left_side_second_level").style.width = "35%";
                            document.getElementById("right_side_second_level").style.width = "65%";
                            //document.getElementById("third_level_container").style.display = "inline-block";
                            //document.getElementById("small_browser_what_we_do_container").style.display = "none";
                            //document.getElementById("second_level_container").style.display = "block";
                            //document.getElementById("mobile_location_with_stamps_container").style.display = "none";
                            
                           
                        }

}
//Here i call the checkscreen function for when page first loads for 
//adjusting to neccessary view
checkScreen();

//This event listener is used to to know when the browser is resized
// if it is resized then checks screen to see if changes need to be made for
// the website to look presentable
window.addEventListener('resize', 
    function(event){
                        //Gets new browser width and height
                        browser_width = window.innerWidth;
                        browser_height = window.innerHeight;
                        //Gets new screen width and height
                        screen_width = screen.width;
                        screen_height = screen.height;
                        
    
                        //Closes menu when resized since if you dont close it then
                        //both buttons will show with menu open
                        //close_menu();
                        //when screen resizes calls this function to adjust website 
                        //to work with website dimensions
                        checkScreen();
                        
                    });