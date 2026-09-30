import { JsonPostRepository } from '@/app/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postsTable); // clean db
    await drizzleDb.insert(postsTable).values(posts);
    console.log(`${posts.length} posts foram salvos na base de dados.`);
  } catch (error) {
    console.log('Ocorreu um erro', error);
  }
})();
