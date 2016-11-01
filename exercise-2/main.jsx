
var MyComponent = React.createClass( {
	render:function() {
		var text1 = "Hello, my name is NAME";
		var text2 = "I am interested in INTEREST";
		return (
			<div>
				<p>{text}</p>
				<p>{text2}</p>
			</div>
		)
	}
});

ReactDOM.render(<MyComponent/>, document.querySelector('main'));