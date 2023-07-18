migrate((db) => {
  const collection = new Collection({
    "id": "l3g4ngc7sb1h1f7",
    "created": "2023-02-10 15:57:46.315Z",
    "updated": "2023-02-10 15:57:46.315Z",
    "name": "pathway",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ripyqh8e",
        "name": "description",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "gawigcn4",
        "name": "expected_duration",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "sxeqyqck",
        "name": "image",
        "type": "file",
        "required": true,
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
        "id": "n5q2ykpq",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("l3g4ngc7sb1h1f7");

  return dao.deleteCollection(collection);
})
