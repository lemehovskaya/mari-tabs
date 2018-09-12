mari-tabs
-------

### Demo

[Demo here](https://lemehovskaya.github.io/mari-tabs/test/)

### Installation

#### Include js

  ```html
  <script src="mari-tabs.js"></script>
  ```

  #### Set HTML

  ```html
  <div class="tab-wrap">
     <ul class="tabs-nav">
        <li class="active">
           Tab 1
        </li>
        <li>
           Tab 2
        </li>
        <li>
           Tab 3
        </li>
     </ul>

     <ul class="tabs-content">
        <li class="active-content">
           Content 1
        </li>
        <li>
           Content 2
        </li>
        <li>
           Content 3
        </li>
     </ul>
  </div>
  ```

  #### Call the plugin

  ```html
  <script type="text/javascript">
      $(document).ready(function() {
         $('.mari-tabs-content').mariTabs({
                nav: '.tabs-nav'
            });
      });
  </script>
  ```

  #### In result

  ```html
  <html>
    <head>
    <title>Tabs</title>
    </head>
    <body>

    <div class="tab-wrap">
         <ul class="tabs-nav">
            <li class="active">
               Tab 1
            </li>
            <li>
               Tab 2
            </li>
            <li>
               Tab 3
            </li>
         </ul>

         <ul class="tabs-content">
            <li class="active-content">
               Content 1
            </li>
            <li>
               Content 2
            </li>
            <li>
               Content 3
            </li>
         </ul>
      </div>

    <script src="mari-tabs.js"></script>

    <script type="text/javascript">
       $(document).ready(function() {
                $('.mari-tabs-content').mariTabs({
                       nav: '.tabs-nav'
                });
        });
    </script>

    </body>
  </html>
  ```

  ### Data Attribute Settings

  In mariTabs you can add settings using the data-mari-tabs attribute. You still need to call
  $(element).mariTabs()
  to initialize mariTabs on the element.

  Example:

  ```html
  <div data-mari-tabs='{"nav": ".tabs-nav"}'></div>
  ```

  ### Settings

  Option | Type | Default
  --- | --- | ---
  nav | str | mari-tabs-nav

  ### Events

  ```javascript
  // On trigger event
    $('.mari-tabs-content').on('ml.shown.tab', function(e, index){
      console.log(index);
    });

    $('.mari-tabs-content').on('ml.hidden.tab', function(e, index){
      console.log(index);
    });
  ```

  Event | Params | Description
  ------ | -------- | -----------
  ml.shown.tab | event, index | After tab shown
  ml.hidden.tab | event, index | After tab hidden


  #### Methods

  ```javascript

  // Goes to tab by index
  $('.mari-tabs-content').mariTabs('goTo', 2);
  ```
  Method | Argument | Description
  ------ | -------- | -----------
  `goTo` | index : int | Goes to tab by index


  #### Example

  Initialize with:

  ```javascript
 $('.mari-tabs-content').mariTabs({
   nav: '.tabs-nav'
 });
   ```

  Goes to tab by index:

  ```javascript
  $('.mari-tabs-content').mariTabs('goTo', 2);
  ```

  ### Browser support

  * Chrome
  * Firefox
  * Opera
  * IE10/11


  ### Dependencies

  * jQuery 1.7
  * Gsap


