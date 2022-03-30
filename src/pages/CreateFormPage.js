import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const changeTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  const changeAuthor = (e) => {
    const { value } = e.target;
    setAuthor(value);
  };

  const createNewBook = (e) => {
    e.preventDefault();
    let data = {
      title,
      author,
    };
    // console.log(data);
    axios({
      method: "POST",
      data: JSON.stringify(data),
      headers: { "content-type": "application/x-www-form-urlencoded" },
    })
      .then((resp) => {
        console.log(resp.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <Form onSubmit={createNewBook} className="m-3 col-6">
          <h2 className="mt-5">Application Form</h2>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" value={title} onChange={changeTitle} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Author" value={author} onChange={changeAuthor} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
