import React from 'react';
import PropTypes from 'prop-types';

class Gist extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._calculateUrl = this._calculateUrl.bind(this);
    this._updateIframeContent = this._updateIframeContent.bind(this);
  }

  componentDidMount() {
    this._updateIframeContent();
  }

  componentDidUpdate() {
    this._updateIframeContent();
  }

  _calculateUrl() {
    if (this.props.file) {
      return 'https://gist.github.com/' + this.props.id + '.js?file=' + this.props.file
    } else {
      return 'https://gist.github.com/' + this.props.id + '.js'
    }
  }

  _updateIframeContent() {
    var iframe = this.refs.iframe;

    var doc = iframe.document;
    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;

    var gistLink = this._calculateUrl()
    var gistScript = '<script type="text/javascript" src="' + gistLink + '"></script>';
    var styles = '<style>*{font-size:12px;}</style>';
    var resizeScript = 'onload="parent.document.getElementById(\'gist-' + this.props.id + '\').style.height=document.body.scrollHeight + \'px\'"';
    var iframeHtml = '<html><head><base target="_parent">' + styles + '</head><body ' + resizeScript + '>' + gistScript + '</body></html>';

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  }

  render() {
    const gistId = `gist-${this.props.id}`
    return (
      <iframe
        ref="iframe"
        width="100%"
        height="100%"
        frameBorder={0}
        id={gistId}
      />
    );
  }
}

Gist.propTypes = {
  id: PropTypes.string.isRequired
};

export default Gist;
