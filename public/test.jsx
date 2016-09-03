var TestMessage = React.createClass({
  render:function(){
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hi {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var TestFrom = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var update = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length>0){
      this.refs.name.value = '';
      update.name = name;
    }
    if (message.length>0){
      this.refs.message.value = '';
      update.message = message;
    }
    this.props.onNewData(update)
  },
  render:function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="test" ref="name"/>
        <br/>
        <textarea type="text" ref="message"></textarea>
        <br/>
        <button>Click Me!</button>
      </form>
    );
  }
});

var TestComp = React.createClass({
    getDefaultProps: function(){
      return{
        name: "Andrew",
        message: "Andrew is the teacher"
      }
    },
    handleNewData: function(update){
      this.setState(update)
    },
    getInitialState: function(){
      return{
        name: this.props.name,
        message: this.props.message
      }
    },
    render: function(){
      var name = this.state.name;
      var message = this.state.message;
      return(
        <div>
          <TestMessage name={name} message={message}/>
          <TestFrom onNewData={this.handleNewData} />
        </div>
      );
    }
});

ReactDOM.render(<TestComp />, document.getElementById('test'));
