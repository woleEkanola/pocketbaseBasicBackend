migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzua6cba593764a")

  // remove
  collection.schema.removeField("efdh0qts")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sj47ty8t",
    "name": "type",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "FAQ",
        "resolved_issues",
        "unresolved_issues"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l2uswjxb",
    "name": "issue_images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/vnd.mozilla.apng",
        "image/png",
        "image/gif"
      ],
      "thumbs": [
        "50x50",
        "480x720"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qujytcpm",
    "name": "solution_images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/vnd.mozilla.apng"
      ],
      "thumbs": [
        "50x50",
        "480x720"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fsucolkb",
    "name": "issue_video",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "video/mp4",
        "audio/mp4",
        "video/mpeg",
        "video/quicktime",
        "video/quicktime",
        "video/3gpp",
        "video/webm"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("sj47ty8t")

  // remove
  collection.schema.removeField("l2uswjxb")

  // remove
  collection.schema.removeField("qujytcpm")

  // remove
  collection.schema.removeField("fsucolkb")

  return dao.saveCollection(collection)
})
