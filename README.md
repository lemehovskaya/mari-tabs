mari-tabs
-------

### Demo

[https://lemehovskaya.github.io/mari-tabs/test/)

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


  ### Browser support

  * Chrome
  * Firefox
  * Opera
  * IE10/11


  ### Dependencies

  * jQuery 1.7
  * Gsap


