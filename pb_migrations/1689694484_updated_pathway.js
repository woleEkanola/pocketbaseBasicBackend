migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l3g4ngc7sb1h1f7")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l3g4ngc7sb1h1f7")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
