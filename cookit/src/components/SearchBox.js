import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  //   const [keyword, setKeyword] = useState("");

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     if (keyword.trim()) {
  //       history.push(`/search/${keyword}`);
  //     } else return;
  //     setKeyword("");
  //   };

  return (
    <Form className="d-flex" inline>
      <Form.Control
        type="text"
        name="q"
        // value={keyword}
        // onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Product..."
        className="mr-sm-2 ml-sm-5 me-2"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;