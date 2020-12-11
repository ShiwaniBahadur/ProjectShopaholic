const categoryItemHeaders = document.querySelectorAll(".category-item-header");

categoryItemHeaders.forEach(categoryItemHeader => {
  categoryItemHeader.addEventListener("click", event => {
    
    // Used to allow for the display of only one collapsed item at a time!
    const currentlyActivecategoryItemHeader = document.querySelector(".category-item-header.active");
    if(currentlyActivecategoryItemHeader && currentlyActivecategoryItemHeader!==categoryItemHeader) {
       currentlyActivecategoryItemHeader.classList.toggle("active");
       currentlyActivecategoryItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    //finished

    //used to toggle the sign when one category item is open
    categoryItemHeader.classList.toggle("active"); 
    const categoryItemBody = categoryItemHeader.nextElementSibling;
    if(categoryItemHeader.classList.contains("active")) {
      categoryItemBody.style.maxHeight = categoryItemBody.scrollHeight + "px";
    }
    else {
      categoryItemBody.style.maxHeight = 0;
    }
    
  });
});