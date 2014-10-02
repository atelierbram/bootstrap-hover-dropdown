$(document).ready(function() {
  $('.dropdown').on({

    'hide.bs.dropdown': function(e) {

      $(this).on('click', function(e) {
        var self = $(this);
        $(this).toggleClass('is-clicked').siblings('.dropdown').removeClass('is-clicked');

        if('ontouchstart' in document && self.hasClass('open', 'is-clicked')) {
          e.stopPropagation();
        }
        else {
          return this;
        }
      });
    }

  });


  $('.dropdown').on({

    'show.bs.dropdown': function(e) {

      $(this).on('click', function(e) {
        var self = $(this);
        // $(this).toggleClass('is-show').siblings('.dropdown').removeClass('is-show');

        if('ontouchstart' in document) {
          return this;
        }
        else {
          e.stopPropagation();
        }
      });
    }

  });

});   
