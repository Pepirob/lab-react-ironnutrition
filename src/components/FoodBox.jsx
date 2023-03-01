import { Card, Col } from 'antd';

function FoodBox(props) {
  const { name, calories, image, servings } = props.food;

  const handleDelete = (event) => {
    console.log(event.target.value);
    props.deleteFood(event.target.value);
  };
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height="60px" alt={`a ${name}`} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings}</b>
          kcal
        </p>
        <button onClick={handleDelete} type="primary" value={name}>
          Delete
        </button>
      </Card>
    </Col>
  );
}

export default FoodBox;
