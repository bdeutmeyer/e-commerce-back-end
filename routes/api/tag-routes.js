const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//Get all tags
router.get('/', async (req, res) => {
  try {
    const getAllTags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'tag_product_info' }],
    });
    res.status(200).json(getAllTags);
    } catch (err) {
    res.status(500).json(err);
  }
});
//Get a single tag
router.get('/:id', async (req, res) => {
  try {
    const getSingleTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'tag_product_info' }],
    });
    if (!getSingleTag) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(getSingleTag);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Add a new tag
router.post('/', async (req, res) => {
  try {
    const createNewTag = await Tag.create(req.body);
    res.status(200).json(createNewTag);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Update a tag
router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateTag[0]) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete a tag
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteTag) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
