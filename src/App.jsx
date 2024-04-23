import { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { Title } from "./components/Title";
import { getAllTasks, deleteTasks, updateTask } from "./util/axiosHandler";

const ttHrPerWk = 24 * 7;
function App() {
  const [entryList, setEntryList] = useState([]);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const addNewTask = (taskObj) => {
    if (ttlHr + taskObj.hr > ttHrPerWk) {
      return alert("sorry Boss not enough hours left to fit this task");
    }
    setEntryList([...entryList, taskObj]);
  };

  const switchTask = async (_id, type) => {
    const result = await updateTask({ _id, type });
    result.status === "success" && fetchAllTasks();
  };

  const fetchAllTasks = async () => {
    const { status, tasks } = await getAllTasks();
    if (status === "success") {
      setEntryList(tasks);
    }
  };
  const ttlHr = entryList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);

  return (
    <div className="wrapper">
      <div className="container">
        <Title />

        <Form fetchAllTasks={fetchAllTasks} ttlHr={ttlHr} />

        <Table
          entryList={entryList}
          switchTask={switchTask}
          fetchAllTasks={fetchAllTasks}
        />

        {/* <!-- toat time allocated --> */}
        <div className="alert alert-info">
          Total hrs per week allocated = <span id="totalHr">{ttlHr}</span>hr
        </div>
      </div>
    </div>
  );
}

export default App;
