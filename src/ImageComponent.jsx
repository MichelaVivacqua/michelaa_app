// questo è un componente React creato con una CLASSE
// non ci sono differenze nel funzionamento
import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.altText} />
      </div>
    );
  }
}

export default ImageComponent;
