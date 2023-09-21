import { client } from '../services/dbClient.js';
import { CoreDataMapper } from './coreDatamapper.js';


class PostDatamapper extends CoreDataMapper {

  databaseName = 'blog';
  collectionName = 'posts';

}

const Post = new PostDatamapper(client);
export { Post }