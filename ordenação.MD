
    let changePosition = $(".id-column").map(function() {
        return $(this).text();
    });
    
  var oldContainer;
	var group = $("ol.test1").sortable({
	  group: 'nested',
	  afterMove: function (placeholder, container) {
	    if(oldContainer != container){
	      if(oldContainer)
	        oldContainer.el.removeClass("active");
	      container.el.addClass("active");

	      oldContainer = container;
	    }
	  },
	  onDrop: function ($item, container, _super) {

      var data = group.sortable("serialize").get();

      var jsonString = JSON.stringify(data, null, ' ');
      console.log(jsonString);
      $('#serialize_output').val(jsonString);

	    container.el.removeClass("active");
	    _super($item, container);
	  }
	});

	$("ol.test2").sortable({
    	group:  'nested',
    	drop: false,
    	drag: false,
  	});
  	$("ol.test2>li>ol").sortable({
      	group:  'nested',
      	drop: true,
     
  	});

	$(".switch-container").on("click", ".switch", function  (e) {
	  var method = $(this).hasClass("active") ? "enable" : "disable";
	  $(e.delegateTarget).next().sortable(method);
	});
  
  <form action="example3_action.php" name="example3" method="POST">
    <input type="hidden" id='serialize_output' name="serialize_output">
    <div class='span4'>
    	box 1 (Customer)
    	<ol class='nested_with_switch test1 vertical'>
    	  	<li data-id="1" data-name='Valentino Rossi'>Valentino Rossi</li>
    	  	<li data-id="2" data-name='David Beckham'>David Beckham</li>
    	  	<li data-id="3" data-name='Eden Hazard'>Eden Hazard</li>
    	    <li data-id="4" data-name='Lionel Messi'>Lionel Messi</li>
    	    <li data-id="5" data-name='Christiano Ronaldo'>Christiano Ronaldo</li>
    	    <li data-id="6" data-name='Frank Lampard'>Frank Lampard</li>
    	</ol>
    </div>

    <div class='span4'>
    	box 2 (Room Type)
    	<ol class='nested_with_switch test2 vertical'>
    	  	<li data-id="1" data-name='Single Room' class='highlight'>Single Room<ol></ol></li>
    	  	<li data-id="2" data-name='Double Room' class='highlight'>Double Room<ol></ol></li>
    	  	<li data-id="3" data-name='Family Room' class='highlight'>Family Room<ol></ol></li>
    	</ol>
    </div>
    <!--<button type="submit" name="submit">Save</button>-->
</form>
