import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GET_CATEGORIES  } from "../../../graphql/queries";
import client from "../../../graphql/client";


export class ScrollBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: [],
        };
      }

      componentDidMount() {
        client
          .query({query: GET_CATEGORIES})
          .then((output) =>
            this.setState((prev) => {
              const categories = output.data.categories;
              this.props.setCategory(categories[0].name);
              return { ...prev, categories };
            })
          )
          .catch((error) => console.log(error));
      }

  render() {
    const { categories } = this.state;
    const { currentCategory, setCategory } = this.props;

    return(
        <div className="scrollBtns">
            {categories.map((category) => {
                const {name} = category;
                let className = "scrollBtn";

                if (name === currentCategory) {
                    className += "scrollBtnSelected";
                }
                return(
                    <Link to="/" key={name}>
                        <button className={className} onClick={() => setCategory(name)}>
                        {name.toUpperCase()}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
  }
}
export default ScrollBtn;