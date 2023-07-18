migrate((db) => {
  const collection = new Collection({
    "id": "3cjkyr9axll3jdo",
    "created": "2023-02-10 15:59:01.263Z",
    "updated": "2023-02-10 15:59:01.263Z",
    "name": "courses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qjeti8nd",
        "name": "description",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "wsd0tff4",
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
        "id": "xia9dx0v",
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
        "id": "8u8rx8wq",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0ugmio5u",
        "name": "video",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "video/mpeg",
            "video/quicktime",
            "video/mp4"
          ],
          "thumbs": []
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
  const collection = dao.findCollectionByNameOrId("3cjkyr9axll3jdo");

  return dao.deleteCollection(collection);
})
