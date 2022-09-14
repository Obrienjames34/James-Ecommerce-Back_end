const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll()
  .then((dbCategoryData) => {
    res.json(dbCategoryData);
  })
  .catch((err) => {
    res.status(500).json(err);
  });

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
Category.create({
  id: req.body.id,
  category_name: req.body.category_name,
})
.then ((dbcategoryData) => {
res.json(dbcategoryData);
})
.catch((err) => {
  res.status(400).json(err);
})

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
