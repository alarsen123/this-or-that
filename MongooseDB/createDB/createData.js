db = db.getSiblingDB('things')

db.createCollection('items')
itemCollection = db.getCollection("items")
itemCollection.remove({})
itemCollection.insert(
	{
		item_id: 1,
		category_id: 1,
		item_name: "Pizza",
		item_number_of_votes: 20,
		item_percent_of_votes: 0.0,
		item_rank: 1,
	}
)
itemCollection.insert(
	{
		item_id: 2,
		category_id: 1,
		item_name: "Ice Cream",
		item_number_of_votes: 19,
		item_percent_of_votes: 0.0,
		item_rank: 2,
	}
)
itemCollection.insert(
	{
		item_id: 3,
		category_id: 2,
		item_name: "The Matrix",
		item_number_of_votes: 18,
		item_percent_of_votes: 0.0,
		item_rank: 3,
	}
)
itemCollection.insert(
	{
		item_id: 4,
		category_id: 1,
		item_name: "Sushi",
		item_number_of_votes: 17,
		item_percent_of_votes: 0.0,
		item_rank: 4,
	}
)
itemCollection.insert(
	{
		item_id: 5,
		category_id: 3,
		item_name: "Basketball",
		item_number_of_votes: 16,
		item_percent_of_votes: 0.0,
		item_rank: 5,
	}
)
itemCollection.insert(
	{
		item_id: 6,
		category_id: 3,
		item_name: "Baseball",
		item_number_of_votes: 15,
		item_percent_of_votes: 0.0,
		item_rank: 6,
	}
)
itemCollection.insert(
	{
		item_id: 7,
		category_id: 2,
		item_name: "Avatar",
		item_number_of_votes: 14,
		item_percent_of_votes: 0.0,
		item_rank: 7,
	}
)
itemCollection.insert(
	{
		item_id: 8,
		category_id: null,
		item_name: "Tree",
		item_number_of_votes: 13,
		item_percent_of_votes: 0.0,
		item_rank: 8,
	}
)
itemCollection.insert(
	{
		item_id: 9,
		category_id: 3,
		item_name: "Tennis",
		item_number_of_votes: 12,
		item_percent_of_votes: 0.0,
		item_rank: 9,
	}
)
itemCollection.insert(
	{
		item_id: 10,
		category_id: null,
		item_name: "Ford F-150",
		item_number_of_votes: 11,
		item_percent_of_votes: 0.0,
		item_rank: 10,
	}
)
itemCollection.insert(
	{
		item_id: 11,
		category_id: 1,
		item_name: "Cookie",
		item_number_of_votes: 10,
		item_percent_of_votes: 0.0,
		item_rank: 11,
	}
)
itemCollection.insert(
	{
		item_id: 12,
		category_id: null,
		item_name: "iPhone",
		item_number_of_votes: 9,
		item_percent_of_votes: 0.0,
		item_rank: 12,
	}
)
itemCollection.insert(
	{
		item_id: 13,
		category_id: null,
		item_name: "Computer",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 13,
	}
)
itemCollection.insert(
	{
		item_id: 14,
		category_id: null,
		item_name: "Computer Science",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 14,
	}
)
itemCollection.insert(
	{
		item_id: 15,
		category_id: 4,
		item_name: "Nike",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 15,
	}
)
itemCollection.insert(
	{
		item_id: 16,
		category_id: 4,
		item_name: "Adidas",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 16,
	}
)
itemCollection.insert(
	{
		item_id: 17,
		category_id: 4,
		item_name: "Tesla",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 17,
	}
)
itemCollection.insert(
	{
		item_id: 18,
		category_id: 4,
		item_name: "Supreme",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 18,
	}
)
itemCollection.insert(
	{
		item_id: 19,
		category_id: 4,
		item_name: "Apple",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 19,
	}
)
itemCollection.insert(
	{
		item_id: 20,
		category_id: 4,
		item_name: "Android",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 20,
	}
)


db.createCollection('categories')
categoryCollection = db.getCollection("categories")
categoryCollection.remove({})
categoryCollection.insert(
	{
		category_id : 1,
		category_name: "Food",
		items : [ 
			{
				item_id: 1
			},
			{
				item_id: 2
			},
			{
				item_id: 4
			}
		],

	}
)
categoryCollection.insert(
	{
		category_id : 2,
		category_name: "Movies",
		items : [ 
			{
				item_id: 3
			},
			{
				item_id: 7
			}
		],

	}
)
categoryCollection.insert(
	{
		category_id : 3,
		category_name: "Sports",
		items : [ 
			{
				item_id: 5
			},
			{
				item_id: 6
			},
			{
				item_id: 9
			}
		],

	}
)
categoryCollection.insert(
	{
		category_id : 4,
		category_name: "Brands",
		items : [ 
			{
				item_id: 15
			},
			{
				item_id: 16
			},
			{
				item_id: 17
			},
			{
				item_id: 18
			},
			{
				item_id: 19
			},
			{
				item_id: 20
			}
		],

	}
)
