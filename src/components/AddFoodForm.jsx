import { Input, Form, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [nameInput, setnameInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  const handleSubmitForm = () => {
    // console.log(nameInput, imageInput, caloriesInput, servingsInput);
    const newFood = {
      name: nameInput,
      calories: caloriesInput,
      image: imageInput,
      servings: servingsInput,
    };
    props.setFood((foods) => [newFood, ...foods]);
    props.setFoodToDisplay((foods) => [newFood, ...foods]);
    setnameInput('');
    setImageInput('');
    setCaloriesInput(0);
    setServingsInput(0);
  };
  return (
    <div>
      <h3>Add Food</h3>
      <Form>
        <label htmlFor="Name">Name</label>
        <br />
        <Input
          type="text"
          name="name"
          value={nameInput}
          onChange={(event) => setnameInput(event.target.value)}
        />
        <br />
        <label htmlFor="image">Image</label>
        <br />
        <Input
          type="text"
          name="image"
          value={imageInput}
          onChange={(event) => setImageInput(event.target.value)}
        />
        <br />
        <label htmlFor="calories">Calories</label>
        <br />
        <Input
          type="number"
          name="calories"
          value={caloriesInput}
          onChange={(event) => setCaloriesInput(event.target.value)}
        />
        <br />
        <label htmlFor="servings">Servings</label>
        <br />
        <Input
          type="number"
          name="servings"
          value={servingsInput}
          onChange={(event) => setServingsInput(event.target.value)}
        />
        <br />
        <Button onClick={handleSubmitForm}>Create</Button>
      </Form>
    </div>
  );
}

export default AddFoodForm;
