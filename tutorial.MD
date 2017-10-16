http://itsolutionstuff.com/post/simple-php-jquery-ajax-crudinsert-update-delete-tutorial-example-with-source-codeexample.html
<script>
        $('.currency').each(function() {
            var val, $field;
            $field = $(this);
            /*
             * Transforma um decimal BR em float.
             * >>> formatar_decimal('15,00')
             * 15.00
             * >>> formatar_decimal('1.125,35')
             * 1125.35
             */
            val = $field.val();
            val = val.replace(/[^\d\.-]/g, '');
            val *= 100;
            val = Math.round(val);
            val /= 100;
            // Retira qualquer ponto de milhar.
            val = val.toFixed(2);
            $field.val(val);

            $field.maskMoney({
                symbol: 'R$',
                thousands: '.',
                decimal: ',',
                precision: 2,
                showSymbol: true,
                allowZero: false,
                defaultZero: false,
                symbolStay: true,
                affixesStay: false
            }).maskMoney('mask');
        });
    </script>
