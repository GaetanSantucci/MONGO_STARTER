import { Post } from '../datamappers/posts.js';

const findPosts = async (req, res) => {

  try {

    await Post.connect();
    const allBlogs = await Post.findAll()
    console.log('allBlogs:', allBlogs);
    if (!allBlogs) return console.log("Pas de post !")
    return res.status(200).json(allBlogs);
  } catch (error) {
    console.log("error", error);
  }
}

const findOnePostByID = async (req, res) => {

  try {

    await Post.connect();
    const oneBlog = await Post.findOne('650bf1462ebf5de09904c3f3')
    console.log('oneBlog:', oneBlog);
    if (!oneBlog) return console.log("Pas de post !")
    return res.status(200).json(oneBlog);
  } catch (error) {
    console.log("error", error);
  }
}

export { findPosts, findOnePostByID }