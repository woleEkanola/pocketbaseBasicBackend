migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l3g4ngc7sb1h1f7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p6xahj31",
    "name": "courses",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "3cjkyr9axll3jdo",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": [
        "id",
        "description",
        "image"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l3g4ngc7sb1h1f7")

  // remove
  collection.schema.removeField("p6xahj31")

  return dao.saveCollection(collection)
})
