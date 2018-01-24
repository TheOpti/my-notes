import TagRepository from '../Repository/TagRepository';

class TagsService {

  async getTags(userId) {
    try {
      const tags = await TagRepository.getTags(userId);

      return { status: 'OK',  tags }
    } catch (error) {
      return { status: 'ERROR', msg: error }
    }
  }


  async addTag(userId, tag) {
    try {
      const addedTag = await TagRepository.addTag(userId, tag);

      return { status: 'OK',  addedTag }
    } catch (error) {
      return { status: 'ERROR', msg: error }
    }
  }


  async updateTag(tag, userId) {
    try {
      const updatedTag = await TagRepository.updateTag(userId, tag);

      return { status: 'OK',  updatedTag }
    } catch (error) {
      return { status: 'ERROR', msg: error }
    }
  }


  async deleteTag(tagId) {
    try {
      const deleted = await TagRepository.deleteTag(tagId);

      return { status: 'OK', deleted }
    } catch (error) {
      return { status: 'ERROR', msg: error }
    }
  }

}

export default new TagsService();
