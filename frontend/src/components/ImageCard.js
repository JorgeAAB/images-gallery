import React from 'react';
import { Card, Button } from 'react-bootstrap';
const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.tittle.toUpperCase()}</Card.Title>
        <Card.Text>
          {image.description || ImageBitmapRenderingContext.alt_description}
        </Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
