# DIY Slidedown

Files for this are in this diy-slidedown folder, and there is [a demo for this here](http://atelierbram.github.io/bootstrap-hover-dropdown/diy-slidedown/demo.html).
Added “do-it-yourself” CSS-transitions to the dropdown lists, making the value for `padding-bottom` on the dropdown-list transition from zero, (_or mabybe some low value like `5px`_) to its full length. This works because the `height` value for the list has been reset to zero. This creates this custom `slidedown` effect, you can [read more about this here](http://codepen.io/atelierbram/blog/interplay-css-javascript).

## Making the toggle-links clickable

Essential is to have `data-toggle="dropdown" data-target="#"` on the toggle links in the `HTML`-markup, in order for this to work.

```html
 <a href="http://www.google.com" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-target="#">
```

From the docs for dropdowns [on getbootstrap.com](http://getbootstrap.com/javascript/#dropdowns)

> the dropdown events which are fired at the `.dropdown-menu`'s parent element.

| Event Type | Description |
| ---------- | ----------- |
| show.bs.dropdown | This event fires immediately when the show instance method is called. The toggling anchor element is available as the relatedTarget property of the event. |
| shown.bs.dropdown | This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete). The toggling anchor element is available as the relatedTarget property of the event. |
| hide.bs.dropdown | This event is fired immediately when the hide instance method has been called. The toggling anchor element is available as the relatedTarget property of the event. |
| hidden.bs.dropdown | This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete). The toggling anchor element is available as the relatedTarget property of the event. |

One can hook into these to do something on those events:


```javascript
// effectively create two different functioning dropdowns: this is for touch
$('.dropdown').on({

  'hide.bs.dropdown': function(e) {

    $(this).on('click', function(e) {
      var self = $(this);
      $(this).toggleClass('is-clicked').siblings('.dropdown').removeClass('is-clicked');

      if (self.hasClass('open', 'is-clicked')) {
        e.stopPropagation();
      }
      else {
        return this;
      }
    });
  }

});

// effectively make two different functioning dropdowns: this is for desktop, or to be precise: non-touch
  $('.dropdown').on({

    'show.bs.dropdown': function(e) {

      $(this).on('click', function(e) {

    if('ontouchstart' in document) {
          return this;
        }
        else {
          e.stopPropagation();
        }
      });
    }

  });
```

The javascript for this works, but probably could be improved upon, (_should one use `relatedTarget` as suggested in the docs? Don't know, couldn’t make that work_). So please let me know if there is a better way of doing this. 
