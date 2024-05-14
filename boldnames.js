$(document).ready(function() {
    // Get all the section elements
    var sections = $('section');
    
    // Get all the navigation menu items
    var menuItems = $('.menu a');
    
    // Function to update the active menu item based on scroll position
    function updateActiveMenuItem() {
      var scrollPosition = $(window).scrollTop();
      
      sections.each(function() {
        var currentSection = $(this);
        var sectionTop = currentSection.offset().top;
        var sectionHeight = currentSection.outerHeight();
        
        if (scrollPosition >= sectionTop - window.innerHeight * 0.5 && scrollPosition < sectionTop + sectionHeight - window.innerHeight * 0.5) {
          var sectionId = currentSection.attr('id');
          var correspondingMenuItem = $('.menu a[href="#' + sectionId + '"]');
          
          menuItems.removeClass('active');
          correspondingMenuItem.addClass('active');
          return false; // Exit the loop once a matching section is found
        }
      });
    }
    
    // Update active menu item on scroll
    $(window).scroll(function() {
      updateActiveMenuItem();
    });
    
    // Update active menu item on page load
    updateActiveMenuItem();
  });