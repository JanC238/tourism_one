$.extend({
    mask: function(val) {
        $('.mo_mask').remove()
        $('body').append('<div class="mo_mask"><div class="textpanel">' + val + '</div></div>')
        $('.mo_mask').velocity('transition.fadeIn', { duration: 400, display: "flex" })
        return {
            remove: function() {
                $('.mo_mask').velocity('transition.bounceOut', {
                    duration: 400,
                    display: "none",
                    complete: function() {
                        $('.mo_mask').remove()
                    }
                })
            }
        }
    },
    maskajax: function(type, url, data, cb,str) {
        var mask = $.mask(str)
        NProgress.start()
        $.ajax({
            method: type,
            url: url,
            data: data,
            success: function(_data) {
                NProgress.done()
                mask.remove()
                cb(_data)
            }
        })

    }
})