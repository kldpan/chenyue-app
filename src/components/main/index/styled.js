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


