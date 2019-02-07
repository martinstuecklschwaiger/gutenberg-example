
import {
  Component,
} from "@wordpress/element";


export default class Edit extends Component {

  render() {
    return (
      <div className={ this.props.className }>
        <p>— Hello from the backend.</p>
        <p>
          CGB BLOCK: <code>testblock</code> is a new Gutenberg block
        </p>
        <p>
          It was created via{ ' ' }
          <code>
            <a href="https://github.com/ahmadawais/create-guten-block">
              create-guten-block
            </a>
          </code>.
        </p>
      </div>
    );
  }
}
