import React from "react";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="md-12">
          <h3>{props.title.main}</h3>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>
            Go to Article!
          </a>
          <button type="button" className="btn btn-info" data-id={props.key}> Save Article </button>
        </Col>
      </Row>
    </Container>
  </li>
);