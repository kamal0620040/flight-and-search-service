class CRUDService{
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try{
            console.log(this.repository);
            const response = await this.repository.create(data);
            return response;
        } catch(error){
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async destroy(id){
        try{
            const response = await this.repository.destroy(id);
            return response;
        } catch(error){
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async get(id){
        try{
            const response = await this.repository.create(id);
            return response;
        } catch(error){
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async getAll(){
        try{
            const response = await this.repository.getAll();
            return response;
        } catch(error){
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async update(id, data){
        try{
            const response = await this.repository.update(id, data);
            return response;
        } catch(error){
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }
}

module.exports = CRUDService;