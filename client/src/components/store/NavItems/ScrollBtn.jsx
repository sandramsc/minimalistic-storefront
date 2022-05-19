/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GET_CATEGORIES  } from '../../../graphql/queries';
import client from '../../../graphql/client';
import styled from 'styled-components';

const ScrollBtns = styled.div.attrs(props => ({
  className: props.className,
}))`
  width: 30%;
  display: flex;
  justify-content: flex-start; 

    & .scrollBtnChosen {
      color: #5ece7b;
      border-bottom: 3px solid #5ece7b;
    }

    & .scrollBtn{
      font-family: "Urbanist";
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #26282a;
      border: 0px;
      background-color: transparent;
      width: 100px;
      height: 80px;
      margin-right: 5px;
      &:hover{
        color: #5ece7b;
        cursor: pointer;
      }
    }
`;

export class ScrollBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: [],
        };
      }

      componentDidMount() {
        client
          .query({ query: GET_CATEGORIES, })
          .then((output) =>
            this.setState((previous) => {
              const categories = output.data.categories;
              this.props.setCategory(categories[0].name);
              return { ...previous, categories };
            })
          )
          .catch((error) => console.log(error));
      }

  render() {
    const { categories } = this.state;
    const { currentCategory, setCategory } = this.props;

    return(
        <ScrollBtns>
            {categories.map((category) => {
                const {name} = category;
                let className = " scrollBtn";

                if (name === currentCategory) {
                    className += " scrollBtnChosen";
                }
                return(
                    <Link to="/" key={name}>
                        <button className={className} onClick={() => setCategory(name)}>
                          {name.toUpperCase()}
                        </button>
                    </Link>
                );
            })}
        </ScrollBtns>
    );
  }
}

export default ScrollBtn;