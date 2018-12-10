import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.styl'
class Zhenpin extends Component {
  static propTypes ={
    zhen:PropTypes.object.isRequired
  }
  render () {
    const {zhen} = this.props
    return (
      <div className="veryGoodsAll">
        <div className="veryGoods">
          <div className="veryGoodsTitle">
            <div className="foryou">{zhen.name}</div>
          </div>
          <div className="goodsImg">
            <img src={zhen.Item[0].picUrl} alt=""/>
          </div>
          <div className="goodsTitle">
            {zhen.Item[0].title}
          </div>
          <div className="goodsInfo">
            {zhen.Item[0].subTitle}
          </div>
        </div>
        <div className="qing">
          <div className="drinkLift">
            <div className="drinkTop">{zhen.Item[1].title}</div>
            <div className="drinkInfo">{zhen.Item[1].subTitle}</div>
          </div>
          <div className="drinkImg">
            <img v-lazy="data.Item[1].picUrl" alt=""/>
          </div>
        </div>
        <div className="qing" v-if="data">
          <div className="drinkLift">
            <div className="drinkTop">{zhen.Item[2].title}</div>
            <div className="drinkInfo">{zhen.Item[2].subTitle}</div>
          </div>
          <div className="drinkImg">
            <img src="data.Item[2].picUrl" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default Zhenpin;


