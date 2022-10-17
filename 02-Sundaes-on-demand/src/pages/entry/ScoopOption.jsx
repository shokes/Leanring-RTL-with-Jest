import Col from 'react-bootstrap/col';

export default function ScoopOption({ name, imagePath }) {
  return (
    <div>
      <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
        <img
          style={{ width: '75%' }}
          alt={`${name} scoop`}
          src={`http://localhost3030${imagePath}`}
        />
      </Col>
    </div>
  );
}
