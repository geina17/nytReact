import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Container, Row } from '../../components/Grid';
import { Input, FormBtn } from "../../components/Form";
import { RecipeList, RecipeListItem } from "../../components/RecipeList";
import API from "../../utils/API";

class Articles extends Component {

	state = {
		articles: [],
		savedArticles: [],
		topic: ""
	};
	//automatically load saved articles from DB when component loads
	componentDidMount = () => {
		this.loadArticles();
	}
	//calls our nyt api with title parameter
	getArticles = query => {
		API.getArticles(query)
			.then(res =>
				this.setState({ articles: res.data.response.docs }))
			.catch(err => console.log(err));
	};
	//calls api for loading mongo articles
	loadArticles = () => {
		API.loadSaved()
			.then(res =>
				this.setState({ savedArticles: res.data }))
			.catch(err => console.log(err));	
	};
	//allows state changes(right now just the title/search paramter) to be updated live
	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	//for getting nyt articles
	handleFormSubmit = event => {
		event.preventDefault();
		this.getArticles(this.state.topic);
	};
	//should collect article data (how?) and then pass that to our own api for saving in mongo
	handleArticleSave = event => {
		let articleData;
		API.saveArticle(articleData);
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="sm-12">
						<h2>Search</h2>
						<form>
							<Input value={this.state.topic} onChange={this.handleInputChange} name="topic" placeholder="Topic (required)" />
							<Input value={this.state.startYear} onChange={this.handleInputChange} name="startYear" placeholder="Start Year" />
							<Input value={this.state.endYear} onChange={this.handleInputChange}	name="endYear" placeholder="End Year" />
							<FormBtn disabled={!(this.state.topic)} onClick={this.handleFormSubmit}>
								Search
              				</FormBtn>
						</form>
					</Col>
				</Row>
				<Row>
					<Col size="sm-12">
						<h2>Results</h2>
						<RecipeList>
                  			{this.state.articles.map(data => {
                    			return (
                      				<RecipeListItem
                        				key={data._id}
                        				title={data.headline}
                        				href={data.web_url}
                      				/>
                   				);
                  			})}
                		</RecipeList>
					</Col>
				</Row>
				<Row>
					<Col size="sm-12">
						<h2>Saved Articles</h2>
					</Col>
				</Row>
			</Container>
		);
	}
}	

export default Articles;