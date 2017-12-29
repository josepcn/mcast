$.ajax({url: "https://g64vzck9m8.execute-api.eu-west-1.amazonaws.com/prod/list", 
		success: function(result){
			final_dataset = []

			$.each(result, function( index, value ) {
				value['link'] = "http://www.google.com";
			 	final_dataset.push(value);
			});

			$('#my-final-table').dynatable(
			{
			  dataset: {
			    records: final_dataset
			  },
			  features: {
			    paginate: false,
			    search: false,
			    recordCount: false,
			    perPageSelect: false
			  }
			}
			);
    }});