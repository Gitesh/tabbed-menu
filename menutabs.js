/*

This code activates and deactivates menu tabs.

Copyright Gitesh Khodiyar 2002 All rights reserved

Commercial use prohibited without licence. Commercial use includes (but is not limited to) use on websites that contains avertising. For further details contact gitesh.khodiyar@gmail.com

This notice must remain intact. Additions may be documented below this line.

-------------------------------------------------


-------------------------------------------------


*/
      

        var imgMiddleLeft = new Image;
        var imgMiddleRight = new Image;
        
        imgMiddleLeft.src = "images/middleleft.png";
        imgMiddleRight.src = "images/middleright.png";
      
        var intMaxTabs = hidMaxTabs.value;
        //var intFirstRun = 0;
        
  
        function TabOnClick(strPage, intImageCounter)
          {   
/*          
            if (intFirstRun == 0)
            {                          
              ActivateTab(1);
              
              intFirstRun = 1;
            }       
*/            

	    window.open (strPage,"ifrTabPage");		        
		        objImageLeft = eval("ImageCell0");
            objImageLeft.className = "clsNonActiveTabCorner";
		        
		        for(i = 1; i<=intMaxTabs; i++)
		        {
		          objTabCell = eval("PageTab" + i);
                  objTabCell.className = "clsNonActiveTabLabel";
            
                  objImageLeft = eval("ImageCell" + i);
                  objImageLeft.className = "clsNonActiveTabCorner";                    		        
		        }		



            // Left tab corner

            if (intImageCounter > 1)
            {                      
              var imgLeft = eval("tab" + (intImageCounter - 1));      
              imgLeft.src = "images/middleleft.png";  
            }              

            objTabCell = eval("PageTab" + intImageCounter);
            objTabCell.className = "clsActiveTabLabel";



            // Right tab corner

            if (intImageCounter < intMaxTabs)
            {
              var imgRight = eval("tab" + intImageCounter);
              imgRight.src = "images/middleright.png";              
            }


            // Class
            if (intImageCounter == 1)
            {
              ImageCell0.className = "clsActiveTabCorner";
              ImageCell1.className = "clsActiveTabCorner";
            }
            else
            {            
              objImageLeft = eval("ImageCell" + (intImageCounter - 1));           
              objImageLeft.className = "clsActiveTabCorner";
              objImageRight = eval("ImageCell" + (intImageCounter));
              objImageRight.className = "clsActiveTabCorner";
              
            }

          }      
 