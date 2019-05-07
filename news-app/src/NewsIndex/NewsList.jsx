import React, {Component} from 'react';




const NewsList = (props) => {

	const newsList = props.news.map((info, i) => {
		return (
			<div key ={i}>


			<li >Story: {info.title}</li>
			<li >By: {info.author}</li>
			<li >Detail: {info.description}</li>
			<li> ___________________________ </li>
			</div>
		)
	});

return (
	<div><h4>News List</h4>
		<ul>
		{newsList}
		</ul>

	</div>
		)
};




export default NewsList;