import { Card, Col } from 'antd';
import { Button, Space } from 'antd';

function FoodBox(props) {
  const { name, calories, image, servings } = props.food;

  const handleDelete = (event) => {
    console.log(event.target.value);
    props.deleteFood(event.target.value);
  };
  return (
    <Col span={8}>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height="60px" alt={`a ${name}`} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings}</b>
          kcal
        </p>
        <Space wrap>
          <Button type="primary" onClick={handleDelete} value={name}>
            Delete
          </Button>
        </Space>
      </Card>
    </Col>
  );
}

export default FoodBox;
