import styled from 'styled-components';

function r(px){
  let baseSize=75/2;

  return (px/baseSize).toFixed(4) + "rem";
}
export  const TopBarSd = styled.div`
  height:${r(44)};
  width:100%;
  background:blue;
  border:1px solid red;
  position:fixed;
  top:0;
  z-index:1000;
` 

export const Header=styled.div`
   
`;
export const NICE=styled.p`
    line-height: .56rem;
    min-height: 1.09333rem;
    font-size: .4rem;
    color: #232323;
    margin-top: .32rem;
    width: 100%;
    font-weight: 700;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    `;
export const RMYC=styled.h2`
   font-size:${r(19)};
   font-weight:700;
   margin-bottom:${r(15)}
`;



export const BannerList=styled.div`
  .swiper-container{
    .swiper-wrapper{
      .swiper-slide{
        img{
          height:${r(196)};
        }
      }
    }
  }
`
export const SelectIco = styled.div`
.topSection{
  padding:${r(8)}  ${r(15)} 0;
  margin-bottom:${r(16)}
  .select{
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    font-size:${r(12)};
    margin-bottom:${r(1.5)};
    .select-son{
      text-align:center;
      width:20%;
      margin-bottom:${r(3)};
      display:flex;
      flex-direction:column;
      align-items:center;
      img{
        width:${r(51)};
        height:${r(51)};

      }
    }
  }
}
`

export const VipCss = styled.div`
  .vip-ahead{
    width: 100%;
    border-radius: .08rem;
    background-color: rgba(255,252,245,.5);
    border: 1px solid hsla(30,55%,64%,.3);
    margin-bottom:${r(18)};
    .vip-ahead__advert{
      width: 100%;
      height: ${r(40)};
      padding: 0 ${r(15)};
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .vip-ahead__advert__left{
        color: #6b4218;
        .vip-ahead__advert__left__pre{
          font-size: ${r(15)};
          margin-right: ${r(5)};
          font-weight: 700;
        }
        .vip-ahead__advert__left__tip{
            font-size:${r(12)};
        }
      }
      .vip-ahead__advert__right{
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #6b4218;
        .vip-ahead__advert__right__lab{
          font-size:${r(13)};
        }
        .vip-ahead__advert__right__icon{
          width: ${r(5)};
          height: ${r(10)};
          display: block;
          background-image: url(/static/img/vip_more.8fa27f2.png);
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: 100%;
          margin-left:${r(5)};
        }
      }
    }
    .vip-ahead__list{
      display: flex;
      padding:${r(15)} ${r(15)} ${r(12.5)};
      position: relative;
      .vip-ahead__list__item{
        width: ${r(65)};
        height: ${r(89)};
        border-radius: ${r(2)};
        overflow: hidden;
        img{
          width:100%;
          height:100%;
          border: none;
          border-color: transparent;
          vertical-align: middle;
        }
      }
      .vip-ahead__list__info{
        padding-top: ${r(2.5)};
        margin-left: ${r(15)};
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        .vip-ahead__list__info__title{
          width: 100%;
          font-size: ${r(14)};
          color: #232323;
          line-height: ${r(20)};
          min-height: ${r(20)};
          max-height: ${r(40)};
        }
        .vip-ahead__list__info__venue{
          margin-top: ${r(10)};
          width: ${r(200)};
          font-size: ${r(12)};
          height: ${r(17.5)};
          line-height: ${r(17.5)};
          color: #666;
        }
        .vip-ahead__list__info__tip{
          font-size: ${r(13)};
          margin-top: ${r(10)};

        }
      }
    }
  }
`

export const ScrollCss = styled.div`
  .wapper{
    position:absolute;
    /* top:${r(46)}; */
    /* bottom:${r(50)};
     */
     top:45.98px;
     bottom:50px;
    left:0;
    right:0;
    overflow:hidden;
    /* height:calc(100%-${r(96)});
    overflow:hidden; */
  }
`




export const Middle = styled.div`
  .category-block__list{
    padding-bottom:${r(30)};
    .category-block__list__wrap{
      overflow:hidden;
      .category-block__list__wrap__title{
        height: ${r(23)};
        line-height:${r(23)};
        font-size: ${r(19)};
        font-weight: 700;
        color: #232323;
        padding-left:${r(15)} ;
        float: left;
        
      }
      .category-block__list__wrap__arrow{
          width:${r(20)};
          height: ${r(20)};
          margin-right: ${r(10)};
          margin-top: ${r(1.5)};
          float: right;
          img{
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
          }
        }
    }
    .ategory-block__list__row{
      margin-top:${r(15)};
      .row--bg{
        background-color: rgba(0,0,0,.2);
        padding:${r(14)}   ${r(14)}  ${r(15)};
        display: flex;

        .category-block__list__row__item{
          width: ${r(102)};
          height: ${r(138)};
          border-radius: ${r(4)};
          border: 1px solid #ebebeb;
          overflow: hidden;
          position: relative;
          img{
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
          }
        }
        .category-block__list__row__info{
          flex: 1;
          margin-left: ${r(15)};
          color: #fefefe;
          padding-top: ${r(16)};
          .category-block__list__row__info__date{
            font-size: ${r(12)};
            height: ${r(24)};
            line-height: ${r(24)};
            letter-spacing: 1px;
            overflow: hidden;
            text-overflow: ellipsis;
            strong{
              font-size: ${r(16)};
              
            }
          }
          
          .category-block__list__row__info__title{
              width: 90%;
              font-size: ${r(16)};
              line-height:${r(22.5)};
              max-height: ${r(45)};
              min-height: ${r(22.5)};
              margin-top: ${r(10)};
              overflow: hidden;
              text-overflow: ellipsis;
            }
          .category-block__list__row__info__venue{
            width: ${r(210)};
            font-size: ${r(12)};
            height: ${r(24)};
            line-height: ${r(24)};
            margin-top: ${r(10)};
          }
        }
      }
    }
  }
  /* .swiper-slide-css{ */
    /* width:${r(107)}; */
    /* margin-right:${r(8)}; */
    /* .category-block__list__column__item{
      width: ${r(107)};
      height:${r(146)};
      border-radius: ${r(4)};
      border: 1px solid #ebebeb;
      position: relative; */
      /* overflow: hidden; */
      .swiper-slide{
         img{
            width: 100%;
            /* height: ${r(146)}; */
            vertical-align: middle;
            height:145px;
          }
        .category-block__list__column__title{
          width: 100%;
          line-height: ${r(21)};
          min-height: ${r(40)};
          font-size: ${r(15)};
          color: #232323;
          margin-top: ${r(12)};
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow:hidden;
        }
        .category-block__list__column__price{
          font-size: ${r(11)};
          color: #999;
          height: ${r(20)};
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: baseline;
          -ms-flex-align: baseline;
          align-items: baseline;
          margin-top: 0;
          strong{
            font-size: ${r(16)};
            letter-spacing: 0;
            margin-right: ${r(4)};
            font-weight: 400;
            color: #ff6743!important;
          }
        }
      }
     
    /* } */
    
  /* } */
`