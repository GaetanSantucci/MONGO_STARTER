import { Post } from '../datamappers/posts.js';

const findPosts = async (req, res) => {

  try {

    const allBlogs = await Post.findAll()

    if (!allBlogs) return console.log("Pas de post !")

    return res.status(200).json(allBlogs);

  } catch (error) {
    console.log("error", error);
  }
}

const findOnePostByID = async (req, res) => {
  const { id } = req.params
  try {

    const oneBlog = await Post.findOne(id)

    if (!oneBlog) return console.log("Pas de bras, pas de post!")

    return res.status(200).json(oneBlog);

  } catch (error) {
    console.log("error", error);
  }
}

const createPost = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Merci de saisir des infos !' });
  }
  try {
    const createdPost = await Post.create(req.body)
    console.log('createdPost:', createdPost);
    if (createPost) return res.status(200).json(createdPost)
  } catch (error) {
    console.log(error)
  }
}

const updatePosts = async (req, res) => {
  const { _id } = req.body
  const { [`_id`]: remove, ...data } = req.body //extract all data and remove id for update

  try {

    const oneBlog = await Post.update(_id, data)

    if (!oneBlog) return console.log("Pas de bras, pas de post!")

    return res.status(200).json(oneBlog);

  } catch (error) {
    console.log("error", error);
  }
}


const deletePosts = async (req, res) => {
  const { _id } = req.body

  try {
    const deletePosts = await Post.delete(_id)
    console.log('deletePosts:', deletePosts);

    if (!deletePosts) return res.status(404).json("Post inexistant ou déjà supprimé !")
    if (deletePosts) return res.status(200).json("Le post a bien été supprimé");

  } catch (error) {
    console.log("error", error);
  }
}
export { findPosts, findOnePostByID, createPost, updatePosts, deletePosts }