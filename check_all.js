
//Check all plugin
(function(b, g, e) {
    function d(a, c) {
        this.$el = b(a);
        this.options = b.extend({}, f, this.$el.data(), c);
        this.init()
    }
    var f = { container: e, childCheckboxes: "input[type=checkbox]", showIndeterminate: !1 };
    d.prototype.init = function() {
        this._checkChildren();
        var a = this;
        this.$el.on("change", function(c) { b(a.options.childCheckboxes, a.options.container).not(a.$el).prop("checked", b(this).prop("checked")) });
        b(this.options.container).on("change", a.options.childCheckboxes, function(b) { a._checkChildren() })
    };
    b.fn.checkAll = function(a) {
        return this.each(function() {
            b.data(this,
                "plugin_checkAll") || b.data(this, "plugin_checkAll", new d(this, a))
        })
    };
    d.prototype._checkChildren = function() {
        var a = b(this.options.childCheckboxes, this.options.container).not(this.$el).length,
            c = b(this.options.childCheckboxes, this.options.container).filter(":checked").not(this.$el).length;
        this.$el.prop("indeterminate", this.options.showIndeterminate && 0 < c && c < a);
        this.$el.prop("checked", c === a && 0 !== a)
    }
})(jQuery, window, document);

var arr = [1, 2, 3, 4, 5, 6];

console.log(arr.filter(x => x % 2 == 0))
