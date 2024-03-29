const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//Get all categories
router.get('/', async (req, res) => {
  try {
    const getAllCategories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(getAllCategories);
    } catch (err) {
    res.status(500).json(err);
  }
});
//Get a single category
router.get('/:id', async (req, res) => {
  try {
    const getSingleCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!getSingleCategory) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(getSingleCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Add a new category
router.post('/', async (req, res) => {
  try {
    const createNewCategory = await Category.create(req.body);
    res.status(200).json(createNewCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Update a category
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateCategory[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete a category
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteCategory) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
