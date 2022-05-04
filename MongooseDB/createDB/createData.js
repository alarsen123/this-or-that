db = db.getSiblingDB('things')

db.createCollection('items')
itemCollection = db.getCollection("items")
itemCollection.remove({})
itemCollection.insert(
	{
		item_id: 1,
		category_id: 1,
		item_name: "Pizza",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 1,
	}
)
itemCollection.insert(
	{
		item_id: 2,
		category_id: 1,
		item_name: "Ice Cream",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 2,
	}
)
itemCollection.insert(
	{
		item_id: 3,
		category_id: 2,
		item_name: "The Matrix",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 3,
	}
)
itemCollection.insert(
	{
		item_id: 4,
		category_id: 1,
		item_name: "Sushi",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 4,
	}
)
itemCollection.insert(
	{
		item_id: 5,
		category_id: 3,
		item_name: "Basketball",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 5,
	}
)
itemCollection.insert(
	{
		item_id: 6,
		category_id: 3,
		item_name: "Baseball",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 6,
	}
)
itemCollection.insert(
	{
		item_id: 7,
		category_id: 2,
		item_name: "Avatar",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 7,
	}
)
itemCollection.insert(
	{
		item_id: 8,
		category_id: null,
		item_name: "Tree",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 8,
	}
)
itemCollection.insert(
	{
		item_id: 9,
		category_id: 3,
		item_name: "Tennis",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 9,
	}
)
itemCollection.insert(
	{
		item_id: 10,
		category_id: null,
		item_name: "Ford F-150",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 10,
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