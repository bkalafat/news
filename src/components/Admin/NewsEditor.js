import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { NEWS_TYPE, SUB_NEWS_TYPE } from "../../utils/constant";
import { getEnvironmentUrl } from "../../utils/helper"

const NewsEditor = () => {
  const [type, setType] = useState("news");
  const [category, setCategory] = useState("");
  const [caption, setCaption] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [priority, setPriority] = useState(888);

  const handleSubmit = (event) => {
    event.preventDefault();

    const imgSize = type === NEWS_TYPE ? "600x300" : "500x250";
    const imgText = caption.split(' ').join('+');

    const state = {
      category,
      type,
      caption,
      summary,
      imgPath: "https://via.placeholder.com/" + imgSize + "?text=" + imgText,
      imgAlt: caption,
      subjects: ["Covid", "Türkiye"],
      createDate: new Date().toISOString(),
      updateDate: new Date().toISOString(),
      expireDate: new Date().toISOString(),
      authors: ["Mustafa Çolakoğlu", "Burak Kalafat"],
      content,
      isActive,
      priority,
    };

    console.log(JSON.stringify(state));

    // fetch(getEnvironmentUrl() + "news")
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setNewsList(result);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //       console.log(error);
    //     }
    //   );

    fetch(getEnvironmentUrl() + "news",{
        method: 'POST',
        headers: {
            Accept: '*/*',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify(state)
    }).then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
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
            <option value={NEWS_TYPE}>Ana Haber</option>
            <option value={SUB_NEWS_TYPE}>Alt Haber</option>
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
            as="textarea"
            rows="2"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>İçerik</Form.Label>
          <Form.Control
            value={content}
            onChange={(e) => setContent(e.target.value)}
            as="textarea"
            rows="5"
          />
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
