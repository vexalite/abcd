"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async create(item) {
        const createdItem = new this.model(item);
        return createdItem.save();
    }
    async findById(id) {
        return this.model.findById(id).exec();
    }
    async findByIdAndPopulate(id) {
        const result = await this.model
            .findById(id)
            .populate(['bookId', 'instituteId'])
            .exec();
        return result;
    }
    async findAll() {
        return this.model.find().exec();
    }
    async findAllReservation(id) {
        return this.model
            .find({
            instituteId: id,
        })
            .exec();
    }
    async findAllBooks(id) {
        return this.model
            .find({
            instituteId: id,
        })
            .populate('bookId')
            .exec();
    }
    async update(id, item) {
        return this.model.findByIdAndUpdate(id, item, { new: true }).exec();
    }
    async delete(id) {
        return this.model.findByIdAndDelete(id).exec();
    }
    async remove(id) {
        return this.model.findByIdAndDelete(id).exec();
    }
    async findOne(filter) {
        return this.model.findOne(filter).exec();
    }
    async findMultiple(filter) {
        return this.model.find(filter).exec();
    }
    async findBookByISBN(isbn) {
        return this.model
            .findOne({
            $or: [{ 'ISBN.ISBN10': isbn }, { 'ISBN.ISBN13': isbn }],
        })
            .exec();
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=repository.js.map