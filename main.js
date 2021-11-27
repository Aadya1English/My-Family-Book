var images= ["Family_1.jpeg","Dad_1.jpeg","Mom_1.jpeg","Bro_1.jpeg","Me_1.jpeg"];
var names= ["My Family","Aditya Gupta (Dad)","Sonali Gupta (Mom)","Rudra Gupta (Brother)","Aadya Gupta (Myself)"];
var i=0;
function update()
{
    i++; 
    var no.of_family_members=5;
    if (i>no.of_family_members)
    {
        i=0;
    }
    var update_img=images[i];
    var update_name=names[i];
    document.getElementById("My_Family").src=update_img;
    document.getElementById("Family_Member_Name").innerHTML=update_name;
}