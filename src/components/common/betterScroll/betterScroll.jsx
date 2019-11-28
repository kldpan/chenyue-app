import React from "react";
import { connect } from "react-redux";
import BScroll from "better-scroll";
import {ScrollCss} from "@/components/main/index/styled.js"
// import {CHANGE_PAGE} from "@/components/main/index/actionType.js"
import {changePageAsync,getShowListAsync} from "@/components/main/index/actionCreator.js"

class Bscroll extends React.PureComponent {
  state={
    scroll:null,
    msg:"",
    page:1
  }
  render() {
    // setTimeout(() => {
    //   console.log(this.state.scroll.on);
    // }, 1000);
    
    
      return(
      <ScrollCss>
        <div className="wapper">
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </ScrollCss>
      )    
    }
  componentDidMount(){
    // this.state.page = this.props.page

    this.setState({scroll:new BScroll(document.querySelector('.wapper'),{
       click:true,
       probeType:3,
       pullUpLoad:true
     })},()=>{
      this.props.getShowListAsync.call(this,this.state.page);
      this.state.scroll.on('pullingUp',()=>{
        this.setState({page:++this.state.page},()=>{
          this.props.getShowListAsync.call(this,this.state.page);
         })
      })
     }) 
    

    //  this.state.scroll.on('pullingUp',()=>{
  
      // this.changePage()
      // this.setState({page:this.state.page++});
      // this.props.changePageAsync.bind(this)()
      
        
      //  var temp={
      //    type:CHANGE_PAGE,
      //    val:this.state.page
      //  }
      //  dispatch(temp)
    //  })

  }
  componentDidUpdate(){
   
  
  }
  changePage(){
  }
  finishUp(){
    // 
    console.log("run_OK")
    setTimeout(()=>{
      this.state.scroll.refresh();
      this.state.scroll.finishPullUp();
    },100)
  }
}
  
  
  const mapStateToProps = state => {
    return {
      page:state.getIn(["indexReducer","page"])
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      changePageAsync(){
        var temp = {
          page:this.state.page
        }
        changePageAsync(dispatch,temp)
      },
      getShowListAsync(page){
          getShowListAsync(dispatch,{page},this.finishUp.bind(this));
          // getShowListAsync(dispatch,{page});
          // getShowListAsync(dispatch,temp)
          // console.log(this.state.scroll.finishPullUp)
          // setTimeout(() => {
          //   this.state.scroll.finishPullUp()
          // }, 500);
        
      }
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Bscroll);