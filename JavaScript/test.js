
var coll = document.getElementsByClassName("collapsible");
var i;
var collapsed = false;
for (i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (collapsed){
            collapsed = false;
            content.style.maxHeight = null;
            //content.style.display = "none";
        } 
        else{
            collapsed = true;
            //content.style.display = "block";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}