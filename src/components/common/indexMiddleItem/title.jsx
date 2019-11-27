import React from "react";
import { connect } from "react-redux";

class TopTitle extends React.PureComponent {
  
  render() {
      return(
        <div className="category-block__list__wrap">
          <h3 className="category-block__list__wrap__title">{this.props.title}</h3>
          <div className="category-block__list__wrap__arrow">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
          </div>
        </div>
      )    
    }
  
}  
  const mapStateToProps = state => {
    return {
     
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(TopTitle);