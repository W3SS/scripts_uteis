<form action="/upload" class="dropzone" drop-zone="" id="file-dropzone"></form>
    <ul class="visualizacao sortable dropzone-previews" style="border:1px solid #000">
      
    </ul>
<div class="preview" style="display:none;">
  <li>
    <div>
    <div class="dz-preview dz-file-preview">
      <img data-dz-thumbnail />
    <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
    <div class="dz-success-mark"><span>✔</span></div>
    <div class="dz-error-mark"><span>✘</span></div>
    <div class="dz-error-message"><span data-dz-errormessage></span></div>
  </div>
    </div>
  </li>  
</div>

  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="uploadArea">
      <div class="image-widget visualizacao sortable dropzone-previews">
          <div class="row p-1 dz-preview dz-file-preview">
              <div class="col-12 image ui-sortable-handle preview" title="">
                  <div class="inner empty image-produto" id="">
                      <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i><img data-dz-thumbnail/>
                  </div>
              </div>
              <div class="col-4 image ui-sortable-handle preview" title="">
                  <div class="inner empty" id="img_preview">
                      <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i><img data-dz-thumbnail/>
                  </div>
              </div>
              <div class="col-4 image ui-sortable-handle preview" title="">
                  <div class="inner empty" id="img_preview">
                      <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i><img data-dz-thumbnail/>
                  </div>
              </div>
              <div class="col-4 image ui-sortable-handle preview" title="">
                  <div class="inner empty" id="img_preview">
                      <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i><img data-dz-thumbnail/>
                  </div>
              </div>
          </div>
      </div>
      <div style="display:none;">
        <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
        <div class="dz-success-mark"><span>✔</span></div>
        <div class="dz-error-mark"><span>✘</span></div>
        <div class="dz-error-message"><span data-dz-errormessage></span></div>
        <div class="image-upload-widget card card-block m-1">
      </div>
          <form action="/file-upload" class="dropzone">
              <div class="fallback">
                  <input type="file" class="filestyle" id="Imagens" multiple>
              </div>
          </form>
          <div class="clear"></div>
          <span><p><small>No máximo 4 imagens, Tamanho máximo. <strong>3MB</strong>.
          Para <a href="" target="_blank">maior qualidade</a> envie imagens no formato <strong>JPG</strong>.</small></p></span>
      </div>


$(document).ready(function(){
 $('.sortable').sortable();
   
});

//DropzoneJS example
$.getScript('https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.js',function(){
  // instantiate the uploader
  $('#file-dropzone').dropzone({ 
    url: "/upload", // path para upload
    maxFilesize: 3, // MB
    paramName: "uploadfile", //parametro
    maxThumbnailFilesize: 4, máximo de miniaturas
    previewsContainer: '.visualizacao', 
    previewTemplate : $('.preview').html(),
    init: function() {
      this.on('completemultiple', function(file, json) {
       $('.sortable').sortable('enable');
      });

      this.on('success', function(file, json) {
        alert('aa');
      });
      
      this.on('addedfile', function(file) {
        alert("Novo Arquivo Adicionado!");

      });
      
      this.on('drop', function(file) {
        console.log('File',file);
      }); 

      this.on('complete', function(file) {
        this.removeFile(file);
      });
    }
  });
});
$(document).ready(function() {});

Dropzone.myDropzone.options = {
  previewTemplate: document.querySelector('#template-container').innerHTML,
  // Specifing an event as an configuration option overwrites the default
  // `addedfile` event handler.
  addedfile: function(file) {
    file.previewElement = Dropzone.createElement(this.options.previewTemplate);
    // Now attach this new element some where in your page
  },
  thumbnail: function(file, dataUrl) {
    // Display the image in your file.previewElement
  },
  uploadprogress: function(file, progress, bytesSent) {
    // Display the progress
  }
  // etc...
};



@import url('https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.css');
.sortable {
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.sortable li {
      float: left;
      width: 120px;
      height: 120px;
    overflow:hidden;
    border:1px solid red;
      text-align: center;
      margin:5px;
    }
  li.sortable-placeholder {
      border: 1px dashed #CCC;
      background: none;
    }

<form action="/upload" class="dropzone" drop-zone="" id="file-dropzone"></form>
    <ul class="visualizacao sortable dropzone-previews" style="border:1px solid #000">
      
    </ul>
<div class="preview" style="display:none;">
  <li>
    <div>
      <div class="dz-preview dz-file-preview">
        <img data-dz-thumbnail />
        <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
        <div class="dz-success-mark"><span>✔</span></div>
        <div class="dz-error-mark"><span>✘</span></div>
        <div class="dz-error-message"><span data-dz-errormessage></span></div>
      </div>
    </div>
  </li>  
</div>

                            <div class="image-widget visualizacao sortable dropzone-previews">
                                <div class="row p-1 dz-preview dz-file-preview">
                                    <div class="col-12 image ui-sortable-handle preview" title="">
                                        <div class="inner empty image-produto" id="">
                                            <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i><img data-dz-thumbnail/>
                                        </div>
                                    </div>
                                    <div class="col-4 image ui-sortable-handle preview" title="">
                                        <div class="inner empty" id="img_preview">
                                            <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i><img data-dz-thumbnail/>
                                        </div>
                                    </div>
                                    <div class="col-4 image ui-sortable-handle preview" title="">
                                        <div class="inner empty" id="img_preview">
                                            <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i><img data-dz-thumbnail/>
                                        </div>
                                    </div>
                                    <div class="col-4 image ui-sortable-handle preview" title="">
                                        <div class="inner empty" id="img_preview">
                                            <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i><img data-dz-thumbnail/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="display:none;">
                                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                                <div class="dz-success-mark"><span><i class="fa fa-check"></i></span></div>
                                <div class="dz-error-mark"><span><i class="fa fa-times"></i></span></div>
                                <div class="dz-error-message"><span data-dz-errormessage></span></div>
                            </div>

                                    //$upload_dir = '/public/arquivos/temp';
        //$result = $uploader->handleUpload($upload_dir);
        //if (!$result) {
        //  exit(json_encode(array('success' => false, 'msg' => $uploader->getErrorMsg())));  
        //}
            
        //$imageUp = json_decode('success' =>getContent(), true);
        //$imageName = str_replace(' ', '', $request->file('$imageUp')->getClientOriginalName());
        //    $request->file('$imageUp')->move(
        //        base_path() .'/public/arquivos/temp', $imageName
        //    );
            
        $image = $request->file('file');
        $imageName = str_replace(' ', '', $request->file('$imageUp')->getClientOriginalName());
        //$imageName = time().$image->getClientOriginalName();
        $image->move(base_path() .'/public/arquivos/temp',$imageName);
        //$image->move(public_path('images'),$imageName);
        //return response()->json(['success'=>$imageName]);

                Dropzone.options.imageUpload = {
            maxFilesize: 3, // em mb o tamanho da imagem
            maxThumbnailFilesize: 4, // máximo de miniaturas
            acceptedFiles: ".jpeg,.jpg,.png,.gif",
            previewsContainer: '.visualizacao',
            previewTemplate: $('.preview').replace(),
            init: function() {
                this.on('completemultiple', function(file, json) {
                    $('.sortable').sortable('enable');
                });

                this.on('success', function(file, json) {
                    alert('aa');
                });

                this.on('addedfile', function(file) {
                    alert("Novo Arquivo Adicionado!");

                });

                this.on('drop', function(file) {
                    console.log('File', file);
                });

                this.on('complete', function(file) {
                    this.removeFile(file);
                });
            }
        };

                                <div id="dropzone">
                                    <h3 class="text-muted">
                                        <strong>Solte o arquivo aqui para fazer upload...</strong>
                                    </h3>
                                    <div class="image"></div>
                                    <form ([ 'route'=> [ 'arquivos.temp' ], 'files' => true, 'enctype' => 'multipart/form-data', 'class' => 'dropzone', 'id' => 'image-upload' ])>
                                </div>

                                    <div style="display:none;">
                                        <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                                        <div class="dz-success-mark"><span><i class="fa fa-check"></i></span></div>
                                        <div class="dz-error-mark"><span><i class="fa fa-times"></i></span></div>
                                        <div class="dz-error-message"><span data-dz-errormessage></span></div>
                                    </div>


<a href="#" onclick="addMult();"><i class="fa fa-plus-square" aria-hidden="true"></i></a>
function addMult()
{
    id = $('#id_multiplicacao').val();
    /*html = "<div class='control-group' id='mult"+id+"'> <label class='control-label'>Quantidade/Valor:</label> <div class='controls'> <div class='input-prepend' style='width:146px;'> <span class='add-on'><strong>Qtd</strong></span> <input type='text' id='multiplicacao"+id+"' value='' name='multiplicacao"+id+"' class='span8 required number'> </div> <div class='input-prepend' style='width:146px;'> <span class='add-on'><strong>R$</strong></span> <input type='text' id='porcentagem"+id+"' value='' name='porcentagem"+id+"' class='span8 required maskMoney'> </div> <span class='help-block' style='padding-left:0;display:inline;'><span style='padding-right:15px;display:none;' id='valor"+id+"'></span><a onclick='removeMult("+id+")' style='color:#b94a48; margin-left:0;'>(Clique aqui para remover)</a> </span> </div> </div>";*/
    html = '<div class="row">\n'+'<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">\n'+'<div class="form-group">\n'+'<span class="label label-default" for="multiplicacao1">Quantidade</span>\n'+'<input type="text" class="form-control form-control-sm" name="multiplicacao1" id="multiplicacao1" aria-describedby="multiplicacao1Help" placeholder="">\n'+'<small id="multiplicacao1Help" class="form-text text-muted">Help text</small>\n'+'</div>\n'+'</div>\n';
id++;
$('#id_multiplicacao').val(id);
$("#add_multiplicacao").before(html).fadeIn(400);
}

var rowNum = 0;
$("body").on("click", ".addRow", function() {
    rowNum++;
    var $tabelado = $(this).parents('.tabl');
    var nextHtml = $tabelado.clone();
    nextHtml.attr('id', 'tabl' + rowNum);
    var hasRmBtn = $('.rmbtn', nextHtml).length > 0;
    if (!hasRmBtn) {
        var rm = "<button type='button' class='btn btn-sm btn-danger rmbtn'><i class='fa fa-plus'></i></button>"
        $('.addRow', nextHtml).append(rm);
    }
    $tabelado.after(nextHtml);
});
$("body").on("click", ".rmbtn", function() {
    $(this).parents('.tabl').remove();
});




<form action="{{route('admin.produtos.save')}}" id="imageUpload" class="dropzone" method="post" style="border:1px solid #000;" role="form" enctype="multipart/form-data"></form>

<script>
    $(".dropzone").sortable({
        items: '.dz-preview',
        cursor: 'move',
        opacity: 0.5,
        containment: '.dropzone',
        tolerance: 'pointer'
    });
</script>
            
            var minSteps = 6,
            maxSteps = 60,
            timeBetweenSteps = 100,
            bytesPerStep = 100000;

        myDropzone.uploadFiles = function(files) {
            var self = this;

            for (var i = 0; i < files.length; i++) {

                var file = files[i];
                totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

                for (var step = 0; step < totalSteps; step++) {
                    var duration = timeBetweenSteps * (step + 1);
                    setTimeout(function(file, totalSteps, step) {
                        return function() {
                            file.upload = {
                                progress: 100 * (step + 1) / totalSteps,
                                total: file.size,
                                bytesSent: (step + 1) * file.size / totalSteps
                            };

                            self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
                            if (file.upload.progress == 100) {
                                file.status = Dropzone.SUCCESS;
                                self.emit("success", file, 'success', );
                                self.emit("complete", file);
                                self.processQueue();
                            }
                        };
                    }(file, totalSteps, step), duration);
                }
            }
        }



var regex = /^(.+?)(\d+)$/i;
var cloneIndex = $(".clonedInput").length;

function clone(){
    $(this).parents(".clonedInput").clone()
        .appendTo("body")
        .attr("id", "clonedInput" +  cloneIndex)
        .find("*")
        .each(function() {
            var id = this.id || "";
            var match = id.match(regex) || [];
            if (match.length == 3) {
                this.id = match[1] + (cloneIndex);
            }
        })
        .on('click', 'button.clone', clone)
        .on('click', 'button.remove', remove);
    cloneIndex++;
}
function remove(){
    $(this).parents(".clonedInput").remove();
}
$("button.clone").on("click", clone);

$("button.remove").on("click", remove);
