var json_edges = '{"system_edges":{"edges":[{"edgeID":"28","pn":"2","cn":"3"},{"edgeID":"29","pn":"2","cn":"4"},{"edgeID":"3","pn":"2","cn":"7"},{"edgeID":"4","pn":"2","cn":"8"},{"edgeID":"1","pn":"3","cn":"5"},{"edgeID":"2","pn":"4","cn":"6"},{"edgeID":"9","pn":"7","cn":"13"},{"edgeID":"10","pn":"8","cn":"14"},{"edgeID":"5","pn":"5","cn":"9"},{"edgeID":"6","pn":"5","cn":"10"},{"edgeID":"7","pn":"5","cn":"11"},{"edgeID":"8","pn":"6","cn":"12"},{"edgeID":"18","pn":"16","cn":"17"},{"edgeID":"15","pn":"13","cn":"15"},{"edgeID":"16","pn":"14","cn":"15"},{"edgeID":"14","pn":"12","cn":"15"}, {"edgeID":"13","pn":"11","cn":"15"},{"edgeID":"12","pn":"10","cn":"15"},{"edgeID":"11","pn":"9","cn":"15"},{"edgeID":"17","pn":"15","cn":"16"} ]}}';


//'{"system_edges":{"edges":[{"edgeID":"1","pn":"3","cn":"5"},{"edgeID":"2","pn":"4","cn":"6"},{"edgeID":"3","pn":"24","cn":"7"},{"edgeID":"4","pn":"2","cn":"8"},{"edgeID":"5","pn":"5","cn":"9"},{"edgeID":"6","pn":"5","cn":"10"},{"edgeID":"7","pn":"5","cn":"11"},{"edgeID":"8","pn":"6","cn":"12"},{"edgeID":"9","pn":"7","cn":"13"},{"edgeID":"10","pn":"8","cn":"14"},{"edgeID":"11","pn":"9","cn":"15"},{"edgeID":"12","pn":"10","cn":"15"},{"edgeID":"13","pn":"11","cn":"15"},{"edgeID":"14","pn":"12","cn":"15"},{"edgeID":"15","pn":"13","cn":"15"},{"edgeID":"16","pn":"14","cn":"15"},{"edgeID":"17","pn":"15","cn":"16"},{"edgeID":"18","pn":"16","cn":"17"}]}}';



var json_nodes = '{"system_nodes":{"nodes":[{"nodeID":"2","label":"V","parent":"2"},{"nodeID":"3","label":"A","parent":"2"},{"nodeID":"4","label":"B","parent":"2"},{"nodeID":"7","label":"E","parent":"2"},{"nodeID":"8","label":"F","parent":"2"},{"nodeID":"5","label":"C","parent":"1"},{"nodeID":"6","label":"D","parent":"4"}, {"nodeID":"13","label":"K","parent":"7"},{"nodeID":"14","label":"L","parent":"8"},{"nodeID":"9","label":"G","parent":"5"},{"nodeID":"10","label":"H","parent":"5"},{"nodeID":"11","label":"I","parent":"5"},{"nodeID":"12","label":"J","parent":"6"},{"nodeID":"15","label":"M","parent":"12"},{"nodeID":"16","label":"N","parent":"15"},{"nodeID":"17","label":"O","parent":"16"} ]}}';

//'{"system_nodes":{"nodes":[{"nodeID":"2","label":"V"},{"nodeID":"3","label":"A"},{"nodeID":"4","label":"B"},{"nodeID":"5","label":"C"},{"nodeID":"6","label":"D"},{"nodeID":"7","label":"E"},{"nodeID":"8","label":"F"},{"nodeID":"9","label":"G"},{"nodeID":"10","label":"H"},{"nodeID":"11","label":"I"},{"nodeID":"12","label":"J"},{"nodeID":"13","label":"K"},{"nodeID":"14","label":"L"},{"nodeID":"15","label":"M"},{"nodeID":"16","label":"N"},{"nodeID":"17","label":"O"}]}}';
//{"nodeID":"18","label":"P"},{"nodeID":"19","label":"Q"},{"nodeID":"20","label":"R"},{"nodeID":"21","label":"S"},{"nodeID":"22","label":"T"},{"nodeID":"23","label":"U"},



class Canvas extends React.Component {
 
   constructor(props){
    super(props);
    
    this.graph = new mxGraph(container);
   
      /**
				 * Returns the padding for pages in page view with scrollbars.
				 */
  this.main(document.getElementById('graphContainer'));

  }
  
  
  render() {
    
   
    return (
      <div> 
      
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

        // Avoids overlap of edges and collapse icons
				this.graph.keepEdgesInBackground = true;
        
        // If the mouse is over a cell object (node or edge) disable panning
		//		this.graph.panningHandler.ignoreCell = false;
			//	this.graph.setPanning(true);
        	// Enables automatic sizing for vertices after editing and
				// panning by using the left mouse button.
		//		this.graph.setAutoSizeCells(true);
		//		this.graph.panningHandler.useLeftButtonForPanning = true;
        
           /**
				 * Specifies the size of the size for "tiles" to be used for a graph with
				 * scrollbars but no visible background page. A good value is large
				 * enough to reduce the number of repaints that is caused for auto-
				 * translation, which depends on this value, and small enough to give
				 * a small empty buffer around the graph. Default is 400x400.
				 */
				this.graph.scrollTileSize = new mxRectangle(0, 0,10, 10);
      
        // Set some stylesheet options for the visual appearance
				var style = this.graph.getStylesheet().getDefaultVertexStyle();
				style[mxConstants.STYLE_SHAPE] = 'treenode';
				style[mxConstants.STYLE_COLOR] = 'blue';
				style[mxConstants.STYLE_SHADOW] = true;
				style[mxConstants.STYLE_FONTSIZE] = 24;
        style[mxConstants.STYLE_FONTCOLOR] = 'black';
				style = this.graph.getStylesheet().getDefaultEdgeStyle();
			//	style[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom;
      // style[mxConstants.STYLE_EDGE] = mxEdgeStyle.SideToSide;
       style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
     //  style[mxConstants.STYLE_EDGE] = mxEdgeStyle.SegmentConnector;
			//	style[mxConstants.STYLE_EDGE] = mxEdgeStyle.OrthConnector;
        style[mxConstants.STYLE_ROUNDED] = true;
        // Controls Edge Width
        style[mxConstants.STYLE_STROKEWIDTH] = 5;
       
        
        // Enables automatic sizing for vertices after editing and
				// panning by using the left mouse button.
			//	this.graph.setAutoSizeCells(true);
			//	this.graph.setPanning(true);
			//	this.graph.panningHandler.useLeftButtonForPanning = true;
          // Enables automatic layout on the graph and installs
				// a tree layout for all groups who's children are
				// being changed, added or removed.
        //	var layout = new  mxCompactTreeLayout(this.graph, false);
        var layout = new  mxCompactTreeLayout(this.graph, false);
				layout.useBoundingBox = false;
				layout.edgeRouting = false;
				layout.levelDistance = 30;
				layout.nodeDistance = 50;
				layout.horizontal = true;
				
// Enables connect preview for the default edge style
     

/*				var layoutMgr = new mxLayoutManager(this.graph);
       layoutMgr.getLayout = function(cell)
				{
					if (cell.getChildCount() > 0)
				{
						return layout;
					}
				};
        
        layout.execute(this.graph.getDefaultParent());   
*/        
     
        // Disallow any selections
				this.graph.setCellsSelectable(false);
        /**
				 * Returns the size of the page format scaled with the page size.
				 */
				this.graph.getPageSize = function()
				{
					return (this.pageVisible) ? new mxRectangle(0, 0, this.pageFormat.width * this.pageScale,
							this.pageFormat.height * this.pageScale) : this.scrollTileSize;
				};
        
     /**
				 * Returns the padding for pages in page view with scrollbars.
				 */
				this.graph.getPagePadding = function()
				{
					return new mxPoint(Math.max(0, Math.round(container.offsetWidth - 34)),
							Math.max(0, Math.round(container.offsetHeight - 34)));
				};
        /**
				 * Returns a rectangle describing the position and count of the
				 * background pages, where x and y are the position of the top,
				 * left page and width and height are the vertical and horizontal
				 * page count.
				 */
				this.graph.getPageLayout = function()
				{
					var size = (this.pageVisible) ? this.getPageSize() : this.scrollTileSize;
					var bounds = this.getGraphBounds();

					if (bounds.width == 0 || bounds.height == 0)
					{
						return new mxRectangle(0, 0, 1, 1);
					}
					else
					{
						// Computes untransformed graph bounds
						var x = Math.ceil(bounds.x / this.view.scale - this.view.translate.x);
						var y = Math.ceil(bounds.y / this.view.scale - this.view.translate.y);
						var w = Math.floor(bounds.width / this.view.scale);
						var h = Math.floor(bounds.height / this.view.scale);
						
						var x0 = Math.floor(x / size.width);
						var y0 = Math.floor(y / size.height);
						var w0 = Math.ceil((x + w) / size.width) - x0;
						var h0 = Math.ceil((y + h) / size.height) - y0;
						
						return new mxRectangle(x0, y0, w0, h0);
					}
				};
        
        
        // Fits the number of background pages to the graph
				this.graph.view.getBackgroundPageBounds = function()
				{
					var layout = this.graph.getPageLayout();
					var page = this.graph.getPageSize();
					
					return new mxRectangle(this.scale * (this.translate.x + layout.x * page.width),
							this.scale * (this.translate.y + layout.y * page.height),
							this.scale * layout.width * page.width,
							this.scale * layout.height * page.height);
				};
				
				this.graph.getPreferredPageSize = function(bounds, width, height)
				{
					var pages = this.getPageLayout();
					var size = this.getPageSize();
					
					return new mxRectangle(0, 0, pages.width * size.width, pages.height * size.height);
				};
				
       
        /**
				 * Guesses autoTranslate to avoid another repaint (see below).
				 * Works if only the scale of the graph changes or if pages
				 * are visible and the visible pages do not change.
				 */
				var graphViewValidate = this.graph.view.validate;
				this.graph.view.validate = function()
				{
					if (container != null && mxUtils.hasScrollbars(container))
					{
						  var pad = this.graph.getPagePadding();
						var size = this.graph.getPageSize();
						
						// Updating scrollbars here causes flickering in quirks and is not needed
						// if zoom method is always used to set the current scale on the graph.
			
						var tx = this.translate.x;
						var ty = this.translate.y;
						this.translate.x = pad.x / this.scale - (this.x0 || 0) * size.width;
						this.translate.y = pad.y / this.scale - (this.y0 || 0) * size.height;
					}
					
					graphViewValidate.apply(this, arguments);
				};
        	
        var graphSizeDidChange = this.graph.sizeDidChange;
        
        /*
         Since this functor is being assigned to this.graph, the 'this' keyword refers to 
         'this.graph' and not the class object 'EnhancedUserInterface'.
        */
				this.graph.sizeDidChange = function()
				{
					
							if (this.container != null && mxUtils.hasScrollbars(this.container))
					{
						var pages = this.getPageLayout();
						var pad = this.getPagePadding();
						var size = this.getPageSize();
						
						// Updates the minimum graph size
						var minw = Math.ceil(2 * pad.x / this.view.scale + pages.width * size.width);
						var minh = Math.ceil(2 * pad.y / this.view.scale + pages.height * size.height);
						
						var min = this.minimumGraphSize;
						
						// LATER: Fix flicker of scrollbar size in IE quirks mode
						// after delayed call in window.resize event handler
						if (min == null || min.width != minw || min.height != minh)
						{
						 this.minimumGraphSize = new mxRectangle(0, 0, minw, minh);
						}
						
						// Updates auto-translate to include padding and graph size
						var dx = pad.x / this.view.scale - pages.x * size.width;
						var dy = pad.y / this.view.scale - pages.y * size.height;
						
						if (!this.autoTranslate && (this.view.translate.x != dx || this.view.translate.y != dy))
						{
							this.autoTranslate = true;
							this.view.x0 = pages.x;
							this.view.y0 = pages.y;

							// NOTE: THIS INVOKES THIS METHOD AGAIN. UNFORTUNATELY THERE IS NO WAY AROUND THIS SINCE THE
							// BOUNDS ARE KNOWN AFTER THE VALIDATION AND SETTING THE TRANSLATE TRIGGERS A REVALIDATION.
							// SHOULD MOVE TRANSLATE/SCALE TO VIEW.
							var tx = this.view.translate.x;
							var ty = this.view.translate.y;

							this.view.setTranslate(dx, dy);
							this.container.scrollLeft += (dx - tx) * this.view.scale;
							this.container.scrollTop += (dy - ty) * this.view.scale;

							this.autoTranslate = false;
							return;
						}

						graphSizeDidChange.apply(this, arguments);
					}
						
				}
        
				// Enables rubberband selection
				new mxRubberband(this.graph);
				
				// Gets the default parent for inserting new cells. This
				// is normally the first child of the root (ie. layer 0).
				var parent =this.graph.getDefaultParent();
								
				// Adds cells to the model in a single step
				this.graph.getModel().beginUpdate();
				try
				{
          var tree_edges_obj = JSON.parse(json_edges)
          var tree_nodes_obj = JSON.parse(json_nodes)
          var i = 0;
          
         
         
          for(i=0; i< tree_nodes_obj.system_nodes.nodes.length; i++)
          {
              var id = tree_nodes_obj.system_nodes.nodes[i].nodeID;
              var label =  tree_nodes_obj.system_nodes.nodes[i].label; 
            // var parentID =  tree_nodes_obj.system_nodes.nodes[i].parent;
           // var parentNode = this.graph.getModel().getCell(parentID); 
           
             var v1 = this.graph.insertVertex(parent, id, label, 0, 0, 100 , 50);
              
          }
          
           for(i=0; i< tree_edges_obj.system_edges.edges.length; i++)
          {
              
              var pnID = tree_edges_obj.system_edges.edges[i].pn;
              var cnID =  tree_edges_obj.system_edges.edges[i].cn; 
              
              var pn = this.graph.getModel().getCell(pnID);
              var cn = this.graph.getModel().getCell(cnID);
              //console.log('pn.id: ' + pn.id);
              console.log(pn.id + " " + cn.id);
             var e1 = this.graph.insertEdge(parent, null, '', pn,cn);
             
          }
        
          // This block of code positions all the nodes
          var origin = this.graph.insertVertex(parent, id, label, 0, 0, 100 , 50); 
         
          var ox =  origin.geometry.x;
          var oy = origin.geometry.y;
           
          var r = this.graph.getModel().getCell(16);
          r.geometry.x = ox - 250;
          r.geometry.y = oy;
         
         
          var r = this.graph.getModel().getCell(15);
          r.geometry.x = ox - 500;
          r.geometry.y = oy;
          
          var r = this.graph.getModel().getCell(9);
          r.geometry.x = ox - 750;
          r.geometry.y = oy-500;
          
          var r = this.graph.getModel().getCell(10);
          r.geometry.x = ox - 750;
          r.geometry.y = oy-300;
          
          var r = this.graph.getModel().getCell(11);
           r.geometry.x = ox - 750;
          r.geometry.y = oy-200;
           var r = this.graph.getModel().getCell(12);
          r.geometry.x = ox - 750;
          r.geometry.y = oy-100;
          
            var r = this.graph.getModel().getCell(13);
          r.geometry.x = ox - 750;
          r.geometry.y = oy+100;
          
             var r = this.graph.getModel().getCell(14);
          r.geometry.x = ox - 750;
          r.geometry.y = oy+250;
          
          var r = this.graph.getModel().getCell(5);
          r.geometry.x = ox - 1000;
          r.geometry.y = oy-500;
          
           var r = this.graph.getModel().getCell(6);
          r.geometry.x = ox - 1000;
          r.geometry.y = oy-250;
          
          var r = this.graph.getModel().getCell(7);
          r.geometry.x = ox - 1000;
          r.geometry.y = oy+0;
          
           var r = this.graph.getModel().getCell(8);
          r.geometry.x = ox - 1000;
          r.geometry.y = oy+250;
          
           var r = this.graph.getModel().getCell(3);
          r.geometry.x = ox - 1250;
          r.geometry.y = oy-500;
          
           var r = this.graph.getModel().getCell(4);
          r.geometry.x = ox - 1250;
          r.geometry.y = oy-300;
          
           var r = this.graph.getModel().getCell(2);
          r.geometry.x = ox - 1500;
          r.geometry.y = oy-500;

				}
				finally
				{
					// Updates the display
					this.graph.getModel().endUpdate();
				}
			}
      
      /* Use bind(this) to bind the main EntireUserInterface object with the new object function or functor, which is being passed to setTimeout, allowing the 'this' keyword to refer to the EntireUserInterface object.*/
      window.setTimeout(function()
				{
          
					var bounds = this.graph.getGraphBounds();
					var width = Math.max(bounds.width, this.graph.scrollTileSize.width * this.graph.view.scale);
					var height = Math.max(bounds.height, this.graph.scrollTileSize.height * this.graph.view.scale);
					this.graph.container.scrollTop = Math.floor(Math.max(0, bounds.y - Math.max(20, (this.graph.container.clientHeight - height) / 4)));
					this.graph.container.scrollLeft = Math.floor(Math.max(0, bounds.x - Math.max(0, (this.graph.container.clientWidth - width) / 2)));
				}.bind(this), 0);
		}//main
  
}

class ListBox extends React.Component {
  render() {
    
    var letterStyle = {
            backgroundColor: "#f5f5f5",
            color: "#000",
       
            fontSize: 28,
            width:"255px"
             
        };
    return (
      <div> 
      <select style={letterStyle} name="cars" size="10">
        <option value="White Fang">White Fang</option>
        <option value="Call of the Wild">Call of the Wild</option>
        <option value="Sea Wolf">Sea Wolf</option>
        <option value="To Build a Fire">To Build a Fire</option>
      </select>
      </div>

    );
    
    $( function() {
    $( "#selectable" ).selectable();
    } );
  }
}

class DropDown extends React.Component {
  render() {
    
      var labelStyle = {
            fontSize: 20,            
        }; 
    
    var selectStyle = {
            backgroundColor: "#f5f5f5",
            color: "#000",
       
            fontSize: 28,
            width:"255px"
             
        };
    
    return (
    <form  action="#">
      <fieldset >
        <label  style={labelStyle} for="author" > Select an Author</label>
        <select style={selectStyle} name="author" id="author">
            <option selected="selected">Jack London</option>
            <option>Anton Chekhov</option>
            <option >GK Chesterton</option>
            <option>C.S Lewis</option>
            <option>J.R.R Tolkien</option>
        </select>
      </fieldset>
    </form>  
    );
  }
}

 	
class EntireUserInterface extends React.Component {
  
  constructor(props){
    super(props);
    
   

  }
  
  
  render() {
    
 
  
     var parent = {
           position:"fixed",
           bottom: "20%",
           left: "1%",
          overflow:"hidden",
          width:"auto",
          display:"inline"
        };
     var listbox = {
           float:"bottom",
    marginBottom:"10px"
        };
    
    var dropdown= {
           
    
     position:"fixed",
           bottom: "14%",
           left: "0%",
     
        };
    
   /* var canvas = {
      position:"fixed",
      //overflow:"auto",
      //marginRight: "200px",
      bottom:"30%",
      right:"25%",
      width:"600px",
      height:"600px",
     //background:"url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Graph-paper.svg/600px-Graph-paper.svg.png')",
      //cursor:"default"
    }*/
    return (
       
      <div style={parent}>
        <div>
          <Canvas />
        </div>
        <div style={listbox}>
          <ListBox/>
        </div>
         <div style={listbox}>
          <ListBox/>
        </div>
        <div style={dropdown}>
         <DropDown />
        </div>
        
      </div>
    );
  }
  
   /**
				 * Returns the padding for pages in page view with scrollbars.
				 */  
}


 
ReactDOM.render(
  
  
  <EntireUserInterface />,
  document.getElementById('container')

);
