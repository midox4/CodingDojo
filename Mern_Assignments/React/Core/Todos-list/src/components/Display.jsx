
const Display = (props) => {

  //Destructure props object
  const { todoList, handleCompleted, deleteButton } = props;


  return (
    <div className="display">

      {
      todoList.map((todo, index) => (
        <div key={todo.id} className="contentt">
          <p className={todo.isComplete? "completed" : ""}>{todo.content}</p>
          <input type="checkbox" onChange={() => handleCompleted(todo)} />
          <button  className="del" onClick={() => deleteButton(todo.id)}>Delete</button>
        </div>
      ))
      }

    </div>
  );
};

export default Display;