import { Post } from '../datamappers/posts.js';

const findPosts = async (req, res) => {

  try {

    await Post.connect(); // connection to post collection 

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

    await Post.connect(); // connection to post collection 

    const oneBlog = await Post.findOne(id)

    if (!oneBlog) return console.log("Pas de bras, pas de post!")

    return res.status(200).json(oneBlog);

  } catch (error) {
    console.log("error", error);
  }
}

export { findPosts, findOnePostByID }