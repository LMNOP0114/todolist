let data = [
    {
        name: 'Have breakfast',
        duration: '15 minutes'
    },
    {
        name: 'Studying ACCA',
        duration: '3 hours'
    },
    {
        name: 'Have lunch',
        duration: '15 minutes'
    },
    {
        name: 'going to the gym',
        duration: '45 minutes'
    },
    {
        name: 'Have breakfast',
        duration: '15 minutes'
    }
];
let edited = -1;
let tbody = document.getElementById('forjs');
function Aylanish(){
    tbody.innerHTML = ''
    data.map((v,i) =>{
        return tbody.innerHTML += ` <td>${i+1}</td>
        <td>${v.name}</td>
        <td>${v.duration}</td>
        <td>
        <button onclick= "editTodo(${i})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Edit <i class="fas fa-edit"></i>
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <div class="container">
              <div class="card bg-dark">
                <div class="card-header">
                  <h4 class="text-center text-white">
                    Rejani O'zgartirish
                  </h4>
                </div>
                <div class="card-body">
                  <form name="Myform2">
                    <label for="name" class="text-white"
                      >Ish nomini kiriting</label
                    >
                    <input
                      type="text"
                      id="name"
                      class="form-control"
                      name="name"
                    />

                    <label for="duration" class="text-white"
                      >Davomiyligi</label
                    >
                    <input
                      type="text"
                      id="duration"
                      class="form-control"
                      name="duration"
                    />
                  </form>
                </div>
              </div>
            </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close <i class="fas fa-times"></i></button>
                <button onclick= "save()" type="button" class="btn btn-primary">Save <i class="far fa-save"></i> </button>
              </div>
            </div>
          </div>
        </div></td>
        <td><button onclick="deletetodo(${i})" class="btn btn-danger ms-2">Delete <i class="fas fa-trash-alt"></i></button></td>`
    })
}
Aylanish();

function trimqilish(){
let name = document.forms['Myform']['name'].value;
let duration = document.forms['Myform']['duration'].value;
const addbtn = document.getElementById('add2');

if (name.trim().length > 0 && duration.trim().length > 0){
    if (name.trim().length > 0 && duration.trim().length > 0){
        addbtn.classList.add('activate')
    }else{
        addbtn.classList.remove('activate')
    }
    let newtodo = {
        name,
        duration,
    };
    data.push(newtodo)
    Aylanish();
    document.forms['Myform'].reset();
    
}

}
trimqilish();

function deletetodo(index){
    data.splice(index,1)
    Aylanish();
    
}

function editTodo(index){
    document.forms['Myform2']['name'].value=data[index].name;
    document.forms['Myform2']['duration'].value=data[index].duration;
}
editTodo()

function save(){
    edited = index;
    if (edited>0){
        data[edited]=newtodo;
        edited=-1
    }
}
