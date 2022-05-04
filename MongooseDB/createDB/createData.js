//db = db.getSiblingDB('toDoSample')
db.createCollection('items')
itemCollection = db.getCollection("items")
itemCollection.remove({})
itemCollection.insert(
	{
		item_id: 1,
		category_id: 1,
		item_name: "pizza",
		item_number_of_votes: 0,
		item_percent_of_votes: 0.0,
		item_rank: 1,
	}
)


db.createCollection('categories')
categoryCollection = db.getCollection("categories")
categoryCollection.remove({})
categoryCollection.insert(
	{
		category_id : 1,
		category_name: "food",
		items : [
			{
				item_id: 2,
				category_id: 1,
				item_name: "item 2",
				item_number_of_votes: 0,
				item_percent_of_votes: 0.0,
				item_rank: 2,
			},
			{
				item_id: 3,
				category_id: 1,
				item_name: "item 3",
				item_number_of_votes: 0,
				item_percent_of_votes: 0.0,
				item_rank: 3,
			}
		]
	}
)