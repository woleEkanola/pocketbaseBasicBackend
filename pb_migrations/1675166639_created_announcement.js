migrate((db) => {
  const collection = new Collection({
    "id": "eozwdqpzgoiu56h",
    "created": "2023-01-31 12:03:59.040Z",
    "updated": "2023-01-31 12:03:59.040Z",
    "name": "announcement",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hpw2zaof",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "1uj2cnli",
        "name": "message",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "w4ubql0e",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/vnd.mozilla.apng"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "t11dpkvr",
        "name": "link",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eozwdqpzgoiu56h");

  return dao.deleteCollection(collection);
})
