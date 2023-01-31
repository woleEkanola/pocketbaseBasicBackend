migrate((db) => {
  const collection = new Collection({
    "id": "7lk4tdkh61megui",
    "created": "2023-01-31 12:01:58.301Z",
    "updated": "2023-01-31 12:01:58.301Z",
    "name": "comment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xzlbqfvd",
        "name": "content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "vkk1pgba",
        "name": "approved",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "1c5rcg27",
        "name": "owner",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "username",
            "country"
          ]
        }
      },
      {
        "system": false,
        "id": "hffu5osn",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "comment",
            "reply"
          ]
        }
      },
      {
        "system": false,
        "id": "6xw9vfyj",
        "name": "post",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "mzua6cba593764a",
          "cascadeDelete": true,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
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
  const collection = dao.findCollectionByNameOrId("7lk4tdkh61megui");

  return dao.deleteCollection(collection);
})
