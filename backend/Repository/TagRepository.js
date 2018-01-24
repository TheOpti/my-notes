import Tag from '../Models/Tag';
import uuidv1 from 'uuid/v1';

class TagRepository {

  async getTags(userId) {
    const userTags = await Tag.findAll({
        where: { userId, deleted: false }
      }) || [];

    if (!userTags) {
      throw 'Error during getting tags from DB';
    }

    return userTags;
  }


  async addTag(userId, tag) {
    const addedTag = await Tag.create({
      id: uuidv1(),
      userId: userId,
      name: tag.name,
      deleted: false
    });

    if (!addedTag) {
      throw 'Error during putting new tag into DB!';
    }

    return addedTag;
  }


  async updateTag(userId, tag) {
    const updatedTag = await Tag.update({
      name: tag.name,
      updatedAt: new Date(),
    }, {
      where: { id: tag.id, userId }
    });

    if (!updatedTag) {
      throw 'Error during updating tag!';
    }

    return updatedTag;
  }


  async deleteTag(tagId, userId) {
    const foundTag = await Tag.findOne({
      where: { id: tagId, userId }
    });

    if (!foundTag) {
      throw 'No tag found for given user!';
    }

    const isDeleted = await foundTag.updateAttributes({ deleted: true });

    if (!isDeleted) {
      throw 'Error during deleting tag!';
    }

    return true;
  }

}

export default new TagRepository();
