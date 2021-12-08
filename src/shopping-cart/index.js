import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";
export default class LiftingStateUpCart extends Component {
  constructor(props){
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: []
    };
  };

  handleDetailProduct = (product) =>{
    //Nhận product từ component SanPham truyền ra
    //cập nhật state
    this.setState({
      detailProduct: product,
    });
  };

  //Tìm kiếm product có tồn tại trong state.listCart?
  _findIndex = (maSP) =>{
    return this.state.listCart.findIndex((item) =>{
      return item.maSP === maSP;
    });
  };
  

  handleAddCart = (product) =>{
    // copy mảng trong state dzo
    let listCart = [...this.state.listCart];
    const index = this._findIndex(product.maSP);
    // const index = this.state.listCart.findIndex((item) =>{
    //   return item.maSP === product.maSP;
    // });
    if(index !== -1){
      // cập nhật lại số lượng
      listCart[index].soLuong +=1;
    }else{
      // thêm vào listCart
      const productCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        donGia: product.giaBan,
      };
      listCart.push(productCart);
    }
    
    this.setState({
      listCart, //listCart: listCart
    }
    // ()=>{console.log(this.state.listCart);}
    );   
  };

  handleDelete = (product) =>{
    //nhận product từ modal
    /**
     * tìm kiếm product
     * tồn tại => splice(index, 1)
     * cập nhật lại state
     */
     const index = this._findIndex(product.maSP);
     if(index !== -1){
       let listCart = [...this.state.listCart];
       listCart.splice(index,1);
       this.setState({
         listCart,
       });
     }
  };

  handleUpdateQuantity = (product, status) =>{
    const index = this._findIndex(product.maSP);
    if(index !== -1){
      let listCart = [...this.state.listCart];
      if(status){
        listCart[index].soLuong +=1;
      }else{
        if(listCart[index].soLuong > 1)
          listCart[index].soLuong -=1;
      }
      this.setState({
        listCart
      })
    }
  };

  handleCartQuantity = () =>{
    return this.state.listCart.reduce((total, product)=>{
      return total+=product.soLuong;
    },0);
  };
  render() {
    const {detailProduct} = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.handleCartQuantity()})
          </button>
        </div>
        <DanhSachSanPham listProduct={this.state.listProduct} detailProduct={this.handleDetailProduct} addCart={this.handleAddCart}/>
        <Modal listCart={this.state.listCart} productDelete={this.handleDelete} productUpdateQuantity={this.handleUpdateQuantity}/>
        <br/>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
