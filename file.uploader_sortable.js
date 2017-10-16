$(document).ready(function() {
    //    function readURL(input) {
    //    if (input.files && input.files[0]) {
    //        var image = jQuery(input).data('image-target');
    //
    //        var reader = new FileReader();
    //
    //        reader.onload = function (e) {
    //            jQuery(image).attr('src', e.target.result);
    //        }
    //
    //        reader.readAsDataURL(input.files[0]);
    //    }
    //    
    //    $(".load_imagem").change(function() {
    //        readURL(this);
    //    });
    //
    //    $("#sortable").sortable({
    //        helper: 'clone',
    //        placeholder: 'ui-state-highlight',
    //        over: function(event, ui) {
    //            var cl = ui.item.attr('class');
    //            $('.ui-state-highlight').addClass(cl);
    //        }
    //    }).disableSelection();
    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object

        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                    // Render thumbnail.
                    var span = document.createElement('span');
                    span.innerHTML = ['<img class="thumb" src="', e.target.result,
                        '" title="', escape(theFile.name), '"/>'
                    ].join('');
                    document.getElementById('list').insertBefore(span, null);
                };
            })(f);

            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
    }

    document.getElementById('files').addEventListener('change', handleFileSelect, false);
