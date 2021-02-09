const db = require('./conn');

class blogModel {
    constructor(id, name, slug, year) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.year = year;
    }
    static async getAll() {
       const response = await db.any('SELECT * FROM  blog1;');
        return response;
    }
        static  async getBySlug(slug) {
        const response = await db.one(`SELECT * FROM blog1 WHERE slug; = ${slug}`);
        return response
    };
    static async addEntry (name, slug, year) {
        const response = await db.result(`INSERT INTO blog1 (name, slug, year) VALUES ($1, $2, $3)`, [name, slug, year]);
        return response;
    }
    async deleteEntry() {
        const response = await db.result(`DELETE FROM blog1 WHERE id = $1`, [this.id]);
        return response;
    }
}

module.exports = blogModel;