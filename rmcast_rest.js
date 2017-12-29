$.ajax({url: "https://g64vzck9m8.execute-api.eu-west-1.amazonaws.com/prod/list", 
		success: function(result){
	        //$("#div1").html(result);
			$('#my-final-table').dynatable({
			  dataset: {
			    records: result
			  }
			});
    }});