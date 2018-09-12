/*
 Version: 1.0.0
 Author: lemehovskaya
 Repo: https://github.com/lemehovskaya/mari-tabs
 */

'use strict';

(function ($) {

    class MariTabs {

        constructor(element, options) {
            let self = this;

            //extend by function call
            self.settings = $.extend(true, {
                nav: '.mari-tabs-nav'
            }, options);

            self.$element = $(element);
            self.$nav = $(self.settings.nav);

            //extend by data options
            self.data_options = self.$element.data('mari-tabs');
            self.settings = $.extend(true, self.settings, self.data_options);

            self.state = {
                currentOpenIndex: 0
            };

            self.$navItems = self.$nav.find('li');
            self.$contentItems = self.$element.find('li');

            self.init();
        }

        init() {
            let self = this;

            self.$navItems.on('click', function () {
                self.goTo($(this).index());
            });
        }

        goTo(index) {
            this.close();
            this.open(index);
        }

        close() {
            let self = this;

            self.$navItems.removeClass('active');
            self.$contentItems.removeClass('active-content');

            this.$element.trigger( "ml.hidden.tab", self.state.currentOpenIndex);
        }

        open(index) {
            let self = this;

            self.$navItems.eq(index).addClass('active');
            self.$contentItems.eq(index).addClass('active-content');

            self.state.currentOpenIndex = index;

            this.$element.trigger( "ml.shown.tab", index);
        }
    }


    $.fn.mariTabs = function () {
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