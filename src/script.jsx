class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: '#0000FF',
        quoteArr: [],
        quote: '',
        author: ''
        }
        
      this.fetchQuote = this.fetchQuote.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    //randomize quote
    fetchQuote() {
      const randomNum = Math.floor(Math.random() * this.state.quoteArr.length);
      return this.state.quoteArr[randomNum];
    }

    componentDidMount() {
      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/')
          .then((response) => response.json())
          .then((data) => {
              this.setState({
                quoteArr: data.quotes
              },()=>{
                this.handleClick();
              })
          })
          .catch(error => console.log('Error', error));

    }

    handleClick() {
      const randomQuote = this.fetchQuote();
      this.setState({
        color: '#' + Math.floor(Math.random()*16777215).toString(16), //randomize color
        quote: randomQuote.quote,
        author: randomQuote.author
      })
    }
    render() {
      return (
        <div>
          <div id="targetElem" style={{
            backgroundColor:this.state.color,
            height: '100vh',
            width: '100vw'}}/>
          <div className="centerContainer">
            <div className="container" id='quote-box'>
              <div className="contentContainer">
                <p id='text' className="quoteStyle" style={{
                  color:this.state.color}}>   
                      " 
                    {this.state.quote}
                </p>
                <p id='author' className="authorStyle" style={{
                  color:this.state.color}}>
                    - {this.state.author}
                </p>
                <br />
                <div>
                  <button className="btn" style={{
                    backgroundColor:this.state.color
                    }}>
                    <a id="tweet-quote" href="#" target="_blank">
                      <i className="fa fa-twitter"/>
                    </a>
                  </button>
                  <button className="btn" style={{
                    backgroundColor:this.state.color,
                    marginLeft:10 + 'px'
                    }}>
                    <a href="#" target="_blank">
                      <i className="fa fa-facebook-f"></i></a>
                  </button>
                  <button id="new-quote" className="btn" style={{
                    backgroundColor:this.state.color,
                    float:'right',
                    }}
                    onClick={this.handleClick}>
                    Next Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    }
    //fade each time a quote is fetched
    $(document).ready(function(){
          $('#new-quote').click(function(){
            $('#targetElem').fadeOut(0,function(){
              $('#targetElem').fadeIn(700);
            })
          })
        });

        $(document).ready(function(){
          $('#new-quote').click(function(){
            $('p').fadeOut(0,function(){
              $('p').fadeIn(700);
            })
          })
        });

        $(document).ready(function(){
          $('#new-quote').click(function(){
            $('button').fadeOut(0,function(){
              $('button').fadeIn(700);
            })
          })
        })
        
    ReactDOM.render(<App />, document.getElementById('reactDiv'))