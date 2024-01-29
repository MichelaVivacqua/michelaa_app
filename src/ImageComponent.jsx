// questo è un componente React creato con una CLASSE
// non ci sono differenze nel funzionamento
import { Component } from "react";

class ImageComponent extends Component {
  render() {
    const { src, altText } = this.props;
    return (
      <div>
        <img src={src} alt={altText} />
      </div>
    );
  }
}

export default ImageComponent;
