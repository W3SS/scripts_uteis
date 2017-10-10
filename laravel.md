Para lidar com a exceção, você pode fazer o seguinte:

#Put this in the <head> element
{{-- This is the token Laravel requires for non-GET requests --}}
    <meta id="_token" value="{{ csrf_token() }}"> 
Se você estiver usando o Vue http do Vue, use este código para incluir o token:

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
Se você estiver usando jQuery, use este código:

<script>
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
</script>
