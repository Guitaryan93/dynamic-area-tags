# Dynamic `<area>` Tags
Update HTML area tags dynamically for responsive web design and clickable images.

If you have ever used `<map>` and `<area>` tags then you know that updating the image size or changing the page size/resolution will break your coordinates and your links within your images. Frustrating, right?

Well, this repo contains a small JavaScript file to help with updating the area tag coords dynamically to avoid this issue! 🎉

Just download the script.js file, point to it from your webpage, and then all your `<area>` tags will update on page load and whenever the page size is updated.

> [!Important]
> Make sure to add the "defer" attribute to your script tag in your HTML file so that the complete page has loaded before the area tag JavaScript code is called. This should fix any issues where the area tags are not appearing on page load.
>
> `<script defer src="/path/to/script.js"></script>`
