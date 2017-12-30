$.ajax({url: "https://g64vzck9m8.execute-api.eu-west-1.amazonaws.com/prod/list", 
		success: function(result){
			final_dataset = []

			var deferreds = [];
			$.each(result, function( index, value ) {
				deferreds.push(
				 	$.ajax({url:"https://g64vzck9m8.execute-api.eu-west-1.amazonaws.com/prod/latest?show_id="+value['show_id'], 
				 		success: function(result2){
				 			link = "http://www.google.com";
				 			link = result2["url"];
							value['link'] = "<a href=" + link + ">audio</a>";
				 		}
				 	})
				 )
			});

			$.when.apply($, deferreds).then(function(){
				$('#my-final-table').dynatable(
				{
				  dataset: {
				    records: result
				  },
				  features: {
				    paginate: false,
				    search: false,
				    recordCount: false,
				    perPageSelect: false
				  }
				});
			});
			

			
    }});