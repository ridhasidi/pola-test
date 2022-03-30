import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

// import { Form, Button } from "react-bootstrap";
export default function HomePage() {
  const baseUrl = "https://crudcrud.com/api/4c48163b130a4f3983606edb3b03f2d1/books";
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: baseUrl,
    })
      .then((resp) => {
        setBooks(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteBook = (id) => {
    axios({
      method: "DELETE",
      url: baseUrl + `/${id}`,
    })
      .then(() => {
        console.log("delete");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <h2>Books</h2>
      <Link to="/create-form">Create Book</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Button onClick={() => deleteBook(book._id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
