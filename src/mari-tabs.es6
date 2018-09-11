/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/mari-tabs
 */

'use strict';

(function ($) {

    class MariTabs {

        constructor(element, options) {

            let self = this;
            
            //extend by function call
            self.settings = $.extend(true, {
               
                test_property: false
                
            }, options);

            self.$element = $(element);

            //extend by data options
            self.data_options = self.$element.data('mari-tabs');
            self.settings = $.extend(true, self.settings, self.data_options);

            self.init();
            
        }

        init(){
            let self = this;
        }
    }


    $.fn.mariTabs = function() {
        let $this = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            length = $this.length,
            i,
            ret;
        for (i = 0; i < length; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                $this[i].mari_tabs = new MariTabs($this[i], opt);
        else
            ret = $this[i].mari_tabs[opt].apply($this[i].mari_tabs, args);
            if (typeof ret != 'undefined') return ret;
        }
        return $this;
    };

})(jQuery);