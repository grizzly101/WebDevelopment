
class Canvas extends React.Component {
  constructor(){
    super();

 
  };
 
  render() {
    
  }
  
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
  
  constructor(props){
    super(props);
    
    this.graph = new mxGraph(container)
       this.main(document.getElementById('graphContainer'));
  }
  
  render() {
    return (
      <div>
        <Canvas />
  
        <SelectMenu />
      </div>
    );
  }
  
  	main(container)
		{
			// Checks if the browser is supported
			if (!mxClient.isBrowserSupported())
			{
				// Displays an error message if the browser is not supported.
				mxUtils.error('Browser is not supported!', 200, false);
			}
			else
			{
				// Disables the built-in context menu
				mxEvent.disableContextMenu(container);
				
				// Creates the graph inside the given container
				this.graph = new mxGraph(container);

				// Enables rubberband selection
				new mxRubberband(this.graph);
				
				// Gets the default parent for inserting new cells. This
				// is normally the first child of the root (ie. layer 0).
				var parent =this.graph.getDefaultParent();
								
				// Adds cells to the model in a single step
				this.graph.getModel().beginUpdate();
				try
				{
					var v1 = this.graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
					var v2 = this.graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
					var e1 = this.graph.insertEdge(parent, null, '', v1, v2);
				}
				finally
				{
					// Updates the display
					this.graph.getModel().endUpdate();
				}
			}
		}
  
}


 
ReactDOM.render(
  <EntireUserInterface />,
  document.getElementById('container')

);
