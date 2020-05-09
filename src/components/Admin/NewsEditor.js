import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const NewsEditor = () => {
  const [type, setType] = useState("news");
  const [category, setCategory] = useState("");
  const [caption, setCaption] = useState("");
  const [summary, setSummary] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [priority, setPriority] = useState(888);

  const handleSubmit = (event) => {
    alert(
      "Seçilen Tip " +
        type +
        " Yazılan Kategori " +
        category +
        " Aktif mi " +
        isActive
    );
    event.preventDefault();
  };

  return (
    <div className="centerFlex">
      <Form onSubmit={handleSubmit} className="col-md-10 col-xl-10">
        <Form.Group>
          <Form.Label>Kategori</Form.Label>
          <Form.Control
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Kategori giriniz"
          />
        </Form.Group>


        <Form.Group>
          <Form.Label>Tip</Form.Label>
          <Form.Control
            value={type}
            onChange={(e) => setType(e.target.value)}
            as="select"
          >
            <option value="news">Ana Haber</option>
            <option value="subNews">Alt Haber</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Başlık</Form.Label>
          <Form.Control
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Başlık giriniz"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Özet</Form.Label>
          <Form.Control
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            as="textarea" rows="2"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>İçerik</Form.Label>
          <Form.Control as="textarea" rows="5" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Durum</Form.Label>
          <Form.Control
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
            as="select"
          >
            <option value={true}>Aktif</option>
            <option value={false}>Pasif</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Öncelik</Form.Label>
          <Form.Control
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewsEditor;
