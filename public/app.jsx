var GreeterMessage = React.createClass({
    render: function(){
      var name = this.props.name;
      var message = this.props.message;
      return(
        <div>
          <h1>Hi {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.name.value;

    if (name.length>0){
      this.refs.name.value='';
      updates.name = name;
    }
    if (message.length>0){
      this.refs.message.value='';
      updates.message = message;
    }
    this.props.onNewData(updates);
  },
  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="test" ref="name" placeholder="Enter Name"></input>
        <textarea ref="message" placeholder="Enter message"></textarea>
        <button>Submit</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      name: "React",
      message: "This is a react page"
    };
  },
  getInitialState: function(){
      return{
        name: this.props.name,
        message: this.props.message
      };
  },
  handleNewData: function(updates){
    this.setState(updates);
  },
  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="fahad" message="hello there React"/>,
  document.getElementById('app')
);
