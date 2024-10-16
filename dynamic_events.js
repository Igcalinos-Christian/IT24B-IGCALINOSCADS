class appletList{
    constructor(dataURL){
        this.dataURL = dataURL;
        this.list = [];
        this.init();
    }

    async init(){
        await this.fetchData();
        this.renderList(this.list);
        this.bindSearchEvent();
    }

    async fetchData(){
        try{
            const response = await fetch(this.dataURL);
            this.students = await response.json();
        }catch (error){
            console.error('Error fetching data:', error);
        }
    }
    
    renderList(){
        const listContainer = document.getElementById();
        listContainer.innerHTML = list.map(list => 
            `<button class="btn btn-primary style="margin-top: 15px; width: 25rem" href="${list.applet_link}">
            ${list.applet_name}
            </button><br>`
        ).join('');
    }

    searchList(){
        const searchList = document.getElementById('searchList');
        const Lcontainer = document.getElementById('searchResults');

        searchList.addEventListener('input', () => {
            this.searchFilter(searchList.value, Lcontainer);
        });

        this.renderList(this.list, Lcontainer);
    }

    searchFilter(query, ListContainer){
        const filteredResults = this.list.filter(list => {
            const appletName = `${list.applet_name} ${list.applet_link}`;
            return appletName.toLowerCase().includes(query.toLowerCase());
        });

        ListContainer.innerHTML = '';

        this.renderList(filteredResults, ListContainer);
    }
}

const studentList = new StudentList('dynamic_events.json');