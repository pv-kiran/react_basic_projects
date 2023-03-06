import React , {useState , useEffect} from 'react'
import Alert from './Alert'
import List from './List'
import './Style.css'


const getLocalStorageItems = () => {
    const localList = localStorage.getItem('list');
    console.log(localList);
    if(localList) {
        return JSON.parse(localList);
    }
    return [];
    
}

function Groccery() {

  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorageItems);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false , msg: '' , type:''});

  useEffect(() => {
    localStorage.setItem('list' , JSON.stringify(list));
  }, [list])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
        showAlert(true , 'Enter an item name' , 'danger')
    } 
    else if(name && isEditing) {
       setList(
        list.map((item) => {
           if(item.id === editId) {
             return {...item , title: name}
           }
           return item;
        })
       )
       showAlert(true , 'Item edited' , 'success');
       setEditId(null);
       setIsEditing(false);
       setName('');
    }
    else {
        const newItem = {
            id: new Date().getMilliseconds().toString() ,
            title: name
        }
        setList([...list , newItem]);
        setName('');
        showAlert(true , 'New item added' , 'success')
    }
  }


  

  const showAlert = (show= false , msg='' , type='') => {
      setAlert({show , msg , type})
  }

  const clearItems = () => {
    showAlert(true , 'All items are removed' , 'danger')
    setList([]);
  }

  const removeItem =  (id) => {
    const newList = list.filter((item) => item.id !== id)
    setList(newList);
    showAlert(true , 'Item removed' , 'danger')
  }

  const editItem = (id) => {
    const item = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(item.title);
  }

  

  return (
    <div>
        <section className="section-center">
         
            <form className='grocery-form' onSubmit={handleSubmit}>
                 {
                    alert.show && <Alert {...alert} removeAlert = {showAlert} list={list}></Alert>
                 }
                 <h3>Grocery Bud</h3>
                 <div className="form-control">
                    <input type="text" value={name} onChange={(e) => {
                         setName(e.target.value)
                    }} placeholder="Example: Eggs" />
                    <button className="submit-btn">
                      {isEditing ? "Edit" : "Submit"}
                    </button>
                 </div>
            </form>
            {
                list.length > 0 &&
                <div className="grocery-container">
                    <List items={list} removeItem = {removeItem} editItem = {editItem}></List>
                    <button className='clear-btn' onClick={clearItems}>Clear Items</button>
                </div>
            }
            
        </section>
    </div>
  )
}

export default Groccery