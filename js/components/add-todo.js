export default class AddTodo{
    constructor() {
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.btn = document.getElementById('add');
    }

    onClick(callback){
        this.btn.onclick = () =>{
            if (title.value === '' && description.value === '') {
               /* alert.classList.remove('d-none');
                alert.innerText = "The title and description are requered";
                return;*/
                console.error("Campos vacios");
            } else {
                callback(this.title.value,this.description.value);
            }
        }
    }
}