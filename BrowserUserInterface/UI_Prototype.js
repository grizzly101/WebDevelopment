
class Canvas extends React.Component {
  constructor(){
    super();
    main(document.getElementById('graphContainer'));
  };
  
  render() {
    return (
      
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
  
  componentWillMount ()
  {
    
  };
}

class SelectMenu extends React.Component {
  render() {
    return (
    <form action="#">
      <fieldset>
        <label for="speed">Select a speed</label>
        <select name="speed" id="speed">
            <option>Slower</option>
            <option>Slow</option>
            <option selected="selected">Medium</option>
            <option>Fast</option>
            <option>Faster</option>
        </select>
      </fieldset>
    </form>  
    );
  }
}


    
class EntireUserInterface extends React.Component {
  render() {
    return (
      <div>
        <Canvas />
        
        <SelectMenu />
      </div>
    );
  }
}


 
ReactDOM.render(
  <EntireUserInterface />,
  document.getElementById('container')

);
