var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= " ";
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keypressed);

    if(keyPressed == '82')
    {
        new_image('https://th.bing.com/th/id/Rbebc06b921416ea01520807bcafe5342?rik=EMtLiDqRiG0sBQ&riu=http%3a%2f%2fwww.morphinlegacy.com%2fwp-content%2fuploads%2f2013%2f11%2fSuper-Megaforce-Red.png&ehk=9aA6n%2bDR%2fCZTYL2yiEm7ogx25mTqEI8rlH5f5mMdm7w%3d&risl=&pid=ImgRaw');
        console.log("r");
    }
    if(keyPressed == '71')
    {
        block_x = 200;
        new_image('https://th.bing.com/th/id/OIP.R_xeppbBBA0NsttC1iNBkQAAAA?pid=ImgDet&rs=1');
        console.log("g");
    }
    if(keyPressed == '89')
    {
        block_x = 350;
        new_image('https://th.bing.com/th/id/R.8f17f1f77e054792a60295e37aa66357?rik=b0QbMCrE3Y5Jng&riu=http%3a%2f%2fwww.morphinlegacy.com%2fwp-content%2fuploads%2f2013%2f11%2fSuper-Megaforce-Yellow.png&ehk=X8OmoutXxd2tqKbiM0lbFEyZyTwziUTm%2fkZHMHlaAdw%3d&risl=&pid=ImgRaw');
        console.log("y");
    }
    
    if(keyPressed == '80')
    {
        block_x = 600;
        new_image('https://th.bing.com/th/id/R.340eb6e1d9f1b4fe25b9615405fc0b5d?rik=G5x8iZAj%2fOGsBw&riu=http%3a%2f%2fwww.morphinlegacy.com%2fwp-content%2fuploads%2f2013%2f11%2fSuper-Megaforce-Pink.png&ehk=E0lhJbJfEwhJJtdQ5j7DXqi2VPXPC9ZBXdZP%2fLAUYEk%3d&risl=&pid=ImgRaw');
        console.log("p");
    }
    if(keyPressed == '66')
    {
        block_x = 700;
        new_image('https://th.bing.com/th/id/R.677471ad4858cb14b1ddbc6a7609f957?rik=Wa2PEZgv0J2S8Q&riu=http%3a%2f%2fwww.morphinlegacy.com%2fwp-content%2fuploads%2f2013%2f11%2fSuper-Megaforce-Blue.png&ehk=RMZyiS7pB1RgIH1qB3Al2ZlYBHwh0VZqZjXC08N5u3U%3d&risl=&pid=ImgRaw');
        console.log("b");
    }

}