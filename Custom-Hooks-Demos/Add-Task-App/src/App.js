import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './Hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  // const { isLoading, error, sendRequest: fetchTasks } = useHttp(useMemo(() => {
  //   return {url: 'https://react-http-ba0a5-default-rtdb.firebaseio.com/tasks.json'}
  // }, []), transformTasks);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    // const transformTasks = useCallback(taskObj => {
    const transformTasks = (taskObj => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
      setTasks(loadedTasks);
    })

    fetchTasks({ url: 'https://react-http-ba0a5-default-rtdb.firebaseio.com/tasks.json' }, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;




//const fetchTasks = async (taskText) => {
//   setIsLoading(true);
//   setError(null);
//   try {
//     const response = await fetch(
//       'https://react-http-6b4a6.firebaseio.com/tasks.json'
//     );

//     if (!response.ok) {
//       throw new Error('Request failed!');
//     }

//     const data = await response.json();

//     const loadedTasks = [];

//     for (const taskKey in data) {
//       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//     }

//     setTasks(loadedTasks);
//   } catch (err) {
//     setError(err.message || 'Something went wrong!');
//   }
//   setIsLoading(false);
// };