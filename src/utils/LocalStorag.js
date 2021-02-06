class LocalStorage {
    constructor() {
        let ids = localStorage.getItem("ids");
        if (!ids) {
            localStorage.setItem('ids', JSON.stringify([]));
        }

    }
    setId(id) {
        const ids = JSON.parse(localStorage.getItem("ids"));
        if (!ids.includes(id)) {
            ids.push(id)
            localStorage.setItem('ids', JSON.stringify(ids));
        }else{
            console.log("here")
            this.removeId(id);
        }
    }
    getIds() {
        return JSON.parse(localStorage.getItem("ids"));
    }
    removeId(id) {
        let ids = JSON.parse(localStorage.getItem("ids"));
        ids = ids.filter((innerId) => innerId !== id);
        localStorage.setItem('ids', JSON.stringify(ids));
    }
}
export default LocalStorage;