var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      color: '#0000FF',
      quoteArr: [],
      quote: '',
      author: ''
    };

    _this.fetchQuote = _this.fetchQuote.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  //randomize quote


  _createClass(App, [{
    key: 'fetchQuote',
    value: function fetchQuote() {
      var randomNum = Math.floor(Math.random() * this.state.quoteArr.length);
      return this.state.quoteArr[randomNum];
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/').then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          quoteArr: data.quotes
        }, function () {
          _this2.handleClick();
        });
      }).catch(function (error) {
        return console.log('Error', error);
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var randomQuote = this.fetchQuote();
      this.setState({
        color: '#' + Math.floor(Math.random() * 16777215).toString(16), //randomize color
        quote: randomQuote.quote,
        author: randomQuote.author
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('div', { id: 'targetElem', style: {
            backgroundColor: this.state.color,
            height: '100vh',
            width: '100vw' } }),
        React.createElement(
          'div',
          { className: 'centerContainer' },
          React.createElement(
            'div',
            { className: 'container', id: 'quote-box' },
            React.createElement(
              'div',
              { className: 'contentContainer' },
              React.createElement(
                'p',
                { id: 'text', className: 'quoteStyle', style: {
                    color: this.state.color } },
                '"',
                this.state.quote
              ),
              React.createElement(
                'p',
                { id: 'author', className: 'authorStyle', style: {
                    color: this.state.color } },
                '- ',
                this.state.author
              ),
              React.createElement('br', null),
              React.createElement(
                'div',
                null,
                React.createElement(
                  'button',
                  { className: 'btn', style: {
                      backgroundColor: this.state.color
                    } },
                  React.createElement(
                    'a',
                    { id: 'tweet-quote', href: '#', target: '_blank' },
                    React.createElement('i', { className: 'fa fa-twitter' })
                  )
                ),
                React.createElement(
                  'button',
                  { className: 'btn', style: {
                      backgroundColor: this.state.color,
                      marginLeft: 10 + 'px'
                    } },
                  React.createElement(
                    'a',
                    { href: '#', target: '_blank' },
                    React.createElement('i', { className: 'fa fa-facebook-f' })
                  )
                ),
                React.createElement(
                  'button',
                  { id: 'new-quote', className: 'btn', style: {
                      backgroundColor: this.state.color,
                      float: 'right'
                    },
                    onClick: this.handleClick },
                  'Next Quote'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);
//fade each time a quote is fetched


$(document).ready(function () {
  $('#new-quote').click(function () {
    $('#targetElem').fadeOut(0, function () {
      $('#targetElem').fadeIn(700);
    });
  });
});

$(document).ready(function () {
  $('#new-quote').click(function () {
    $('p').fadeOut(0, function () {
      $('p').fadeIn(700);
    });
  });
});

$(document).ready(function () {
  $('#new-quote').click(function () {
    $('button').fadeOut(0, function () {
      $('button').fadeIn(700);
    });
  });
});

ReactDOM.render(React.createElement(App, null), document.getElementById('reactDiv'));