import { useState } from 'react';

function TaskForm() {
  const emptyForm = {
    task: '',
    priority: false,
  };
  const [formData, setFormData] = useState(emptyForm);
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formData.task.length > 3) {
      setTasks((prev) => {
        return [...prev, formData];
      });
      // setFormData(emptyForm);
    }
    event.target.reset();
  };

  return (
    <>
      <ul>
        {tasks.map((item, index) => {
          return <li key={index}>{item.task}</li>;
        })}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <div className='row mb-3'>
          <label htmlFor='task' className='col-sm-2 col-form-label'>
            Task
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              id='task'
              name='task'
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-sm-10 offset-sm-2'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='priority'
                name='priority'
                onChange={handleInputChange}
              />
              <label className='form-check-label' htmlFor='priority'>
                Oncelikli
              </label>
            </div>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Kaydet
        </button>
      </form>
    </>
  );
}

export default TaskForm;
