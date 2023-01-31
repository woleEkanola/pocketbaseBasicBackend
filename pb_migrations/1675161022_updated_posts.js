migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzua6cba593764a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efdh0qts",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qbyn7c3c",
    "name": "issues_reported_by",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "username",
        "id",
        "country"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzua6cba593764a")

  // remove
  collection.schema.removeField("efdh0qts")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qbyn7c3c",
    "name": "issues_reported_by",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "username",
        "id",
        "country"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
