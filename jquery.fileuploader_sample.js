<!doctype html>
<html>
<head>
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <style>
  #sortable { list-style-type: none; margin: 0; padding: 0; width: 450px; }
  #sortable li { margin: 3px 3px 3px 0; padding: 1px; float: left; width: 100px; height: 90px; font-size: 4em; text-align: center; }
  </style>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
      $( function() {
        $( "#sortable" ).sortable();
        $( "#sortable" ).disableSelection();
      } );
  </script>
  <script>
      function preview_image() 
      {
       var total_file=document.getElementById("upload_file").files.length;
       for(var i=0;i<total_file;i++)
       {
        $('#image_preview').append("<li class='ui-state-default'><img src='"+URL.createObjectURL(event.target.files[i])+"' width='100px' height='100px'></li>");
       }
      }
  </script>
</head>
<body>
     <input type="file" id="upload_file" name="upload_file[]" onchange="preview_image();" multiple/> 
     <ul id="sortable">
          <div id="image_preview">
     </ul> 
</body>
</html>
