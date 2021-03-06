import Author from './Author';
import Post from './Post';

export default class Query {
  getAuthor({ _id }, context) {
    return Author.objects.getById(_id);
  }

  getPostsByTitle({ titleContains }, context) {
    return Post.objects.findByTitle({ contains: titleContains });
  }

  getPostsByAuthor({ authorId }, context) {
    return Post.objects.findByAuthor(authorId);
  }
}
