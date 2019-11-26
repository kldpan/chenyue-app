import styled from 'styled-components';

function r(px){
  let baseSize=75/2;

  return (px/baseSize).toFixed(2) + "rem";
}
export  const TopBarSd = styled.div`
  height:${r(44)};
  border:1px solid red; 
` ;

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
        .vip-ahead__list__info{
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
