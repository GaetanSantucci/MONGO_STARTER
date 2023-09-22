import { client } from '../services/dbClient.js';
import { CoreDataMapper } from './CoreDatamapper.js';


class PostDatamapper extends CoreDataMapper {

}

const Post = new PostDatamapper(client, 'posts');
export { Post }