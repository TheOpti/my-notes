import uuidv1 from 'uuid/v1';
import Tag from '../Models/Tag';

class TagsService {

  async getTags(userId) {
    const userTags = await Tag.findAll({
      where: { userId, deleted: false }
    }) || [];

    return {
      status: 'OK',
      tags: userTags
    };
  }


  async addTag(userId, tag) {
    console.log('AddTag, tag: ', tag);

    const addedTag = await Tag.create({
      id: uuidv1(),
      userId: userId,
      name: tag.name,
      deleted: false
    });

    if (addedTag) {
      return {
        status: 'OK',
        msg: 'Tag created successfully.'
      };
    } else {
      return {
        status: 'ERROR',
        msg: 'Error during adding new tag.'
      };
    }
  }


  async updateTag(tag, userId) {
    const foundTag = await Tag.findOne({
      where: { id: tag.id, userId }
    });


    if (foundTag) {
      const isUpdated = await foundTag.updateAttributes({
        title: tag.name,
        updatedAt: new Date(),
      });

      if (isUpdated) {
        return {
          status: 'OK',
          msg: 'Tag updated.'
        };
      } else {
        return {
          status: 'ERROR',
          msg: 'Error during updating tag.'
        };
      }
    } else {
      return {
        status: 'ERROR',
        msg: 'Error during updating tag.'
      }
    }
  }


  async deleteTag(noteId, userId) {
    const foundTag = await Tag.findOne({
      where: { id: noteId, userId }
    });

    if (foundTag) {
      const isDeleted = await foundTag.updateAttributes({ deleted: true });

      if (isDeleted) {
        return {
          status: 'OK',
          msg: 'Note deleted.'
        };
      } else {
        return {
          status: 'ERROR',
          msg: 'Error during deleting tag.'
        };
      }
    } else {
      return {
        status: 'ERROR',
        msg: 'Error during deleting tag.'
      }
    }
  }

}

export default new TagsService();
