# mtm6302-capstone-samo0018

NAME: Anastasia "Nas" Samoyloff STUDENT NUMBER: 41037439 PROJECT: Astronomy Picture of the Day Search

I wanted to keep the design of this API website project as simple as possible because it only really serves the purpose of displaying one image. I kept the background of my mockup dark to compliment NASA's website, which was probably intended to look like the darkness of the cosmos. At the top of the page, users can immediately search for a photo of the day by typing in any date they wish. Users can favorite images by clicking the heart outline icon on the top left of the image. Image explanations follow in white on dark text for readability (and to comply with WCAG contrast standards). 

Resources: I used the "expressway" font from adobe, and the "font awesome" icons for my button icons (which are all linked in my head tag)

The biggest challenge I had was with the search bar. I think I coded it the "dirty" way in order to have the calendar icon appear inside the search box alongside the faded placeholder text. I basically manually moved the calendar icon to the right, and then adjusted the form search bar manually to center the placeholder text. There must be a better way to do it, but I am unsure, even despite googling and trying multiple strategies. The way I have it now most closely resembles the mockup, so for the purpose of this assignment, I am leaving it as is.

I also had trouble with flexbox - the heading div container (with the nasa logo and H1 page title). I could not figure out how to get the logo on the left and the title to be perfectly centered on screen. So, my solution was to add a second nasa logo to the end of the flex container after the H1. Then I set the flex justification to "space-between" to center the middle element (H1) and hid the second logo in CSS. Again, I know this is NOT the proper way to go about fixing this issue, but for the purpose of matching the mockup aesthetically, this will have to do for now.

My last challenge was the heart icon. I turned it into a button, added the "font awesome" icon into it (just like the icon in the search button), and styled it. I removed the background, and changed the colour. In the HTML, I manually changed the position to relative and then moved it to where I needed it on the image. Again, there must be a more neat and proper way to achieve this result, but I am puzzled.

Finally, the challenge I could not solve. Upon resizing the screen smaller, I am unsure how to style the heart outline to go back to where it should on the image, since I did the original styling in HTML. This was the one task I could not figure out and complete because I do not know how to target it. 