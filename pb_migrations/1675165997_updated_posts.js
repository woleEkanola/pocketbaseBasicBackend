migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzua6cba593764a")

  // remove
  collection.schema.removeField("nijpmnfh")

  // remove
  collection.schema.removeField("khanclhr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3xuboq4k",
    "name": "conversation_screenshots",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/jp2",
        "image/png",
        "image/vnd.mozilla.apng",
        "image/gif"
      ],
      "thumbs": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uulmmttf",
    "name": "platform",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "whatsapp",
        "discourse"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oxcuxqv6",
    "name": "solution_description",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0mcw5wns",
    "name": "issue_description",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzua6cba593764a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nijpmnfh",
    "name": "issue_description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "khanclhr",
    "name": "solution_description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("3xuboq4k")

  // remove
  collection.schema.removeField("uulmmttf")

  // remove
  collection.schema.removeField("oxcuxqv6")

  // remove
  collection.schema.removeField("0mcw5wns")

  return dao.saveCollection(collection)
})
