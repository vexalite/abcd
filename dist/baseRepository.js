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
    async findAllByInstitute(id) {
        return this.model
            .find({
            instituteId: id,
        })
            .exec();
    }
    async findReservationByBook(id, bookid, status) {
        return this.model
            .find({
            instituteId: id,
            bookId: bookid,
            status: status
        })
            .populate('bookId')
            .exec();
    }
    async findReservationByPatron(id, patronid, status) {
        return this.model
            .find({
            instituteId: id,
            patronId: patronid,
            status: status
        })
            .populate('bookId')
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
    async findOneReservation(filter) {
        return this.model
            .findById(filter)
            .populate('bookId')
            .exec();
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
//# sourceMappingURL=baseRepository.js.map