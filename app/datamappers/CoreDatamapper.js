import { ObjectId } from 'mongodb';

class CoreDataMapper {
  constructor(client, collectionName) {
    this.client = client;
    this.collection = this.client.db().collection(collectionName)
  }

  async disconnect() {
    await this.client.close();
  }

  async create(inputData) {
    try {
      if (Array.isArray(inputData)) {
        const result = await this.collection.insertMany(inputData);
        return result.insertedIds;
      } else {
        const result = await this.collection.insertOne(inputData);
        return result.insertedId;
      }
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const result = await this.collection.find().toArray();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const result = await this.collection.findOne({ _id: new ObjectId(id) });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(id, inputData) {

    try {
      const result = await this.collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: inputData }
      );
      return result.modifiedCount;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount;
    } catch (error) {
      throw error;
    }
  }
}

export { CoreDataMapper };

