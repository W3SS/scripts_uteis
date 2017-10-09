<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js"></script>
<script>
    // Here's my data model
    var ViewModel = function(cheio, promo) {
        this.valorCheio = ko.observable(cheio);
        this.valorPromo = ko.observable(promo);

        this.valoresShow = ko.computed(function() {
            // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
            return this.valorCheio() + "  " + this.valorPromo();
        }, this);
    };
    ko.applyBindings(new ViewModel(" ", "Earth")); // This makes Knockout get to work

    var ViewModel = function() {
        this.Nome = ko.observable(Nome), this;
    };
    ko.applyBindings(new ViewModel("nome")); // This makes Knockout get to work
</script>
